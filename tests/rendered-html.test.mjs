import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

for (const [pathname, expected] of [
  ["/", "Recover every dollar"],
  ["/team/", "Built by people who know"],
  ["/contact/", "A clearer revenue cycle"],
  ["/cookie-policy/", "Cookie policy"],
]) {
  test(`renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(expected, "i"));
    assert.match(html, /Medzperfect/);
    assert.match(html, /mailto:grow@medzperfect\.com/);
    assert.match(html, /https:\/\/linkedin\.com\/company\/medzperfect\//);
    assert.match(html, /https:\/\/www\.instagram\.com\/medzperfect\//);
    assert.match(html, /https:\/\/x\.com\/Medzperfect/);
    assert.doesNotMatch(html, /Monisha|\/team\/monisha\.jpg|SudalaiRaja|Sudalairaja/);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
  });
}

test("includes requested leadership, contact, and compliance details", async () => {
  const [home, team, contact] = await Promise.all([render("/"), render("/team/"), render("/contact/")]);
  const homeHtml = await home.text();
  const teamHtml = await team.text();
  const contactHtml = await contact.text();
  assert.match(homeHtml, /HIPAA-aligned operating model/);
  assert.match(homeHtml, /ISO 27001 Compliant/);
  assert.match(homeHtml, /AI-enabled RCM/);
  assert.match(homeHtml, /Zero-retention/);
  assert.match(homeHtml, /\/team\/anitha\.jpg/);
  assert.match(homeHtml, /\/team\/raja\.jpg/);
  assert.doesNotMatch(homeHtml, /ISO(?:\/IEC)? 27001 aligned|Launch estimate derived|Compliance-ready describes/i);
  assert.doesNotMatch(homeHtml, /SOC\s*2|Chennai|Gandhi Nagar|India delivery/i);
  for (const name of ["Anitha", "Raja", "Karthik", "Ranjith", "Abishek"]) {
    assert.match(teamHtml, new RegExp(`>${name}<`));
    assert.match(teamHtml, new RegExp(`/team/${name.toLowerCase()}\\.jpg`));
  }
  assert.match(teamHtml, /VP - Coding Operations/);
  assert.match(teamHtml, /20\+ years/);
  assert.match(teamHtml, /16\+ years/);
  assert.match(teamHtml, /7\+ years/);
  for (const vertical of ["RCM &amp; AI", "Product &amp; data", "Research &amp; L&amp;D", "Coding", "Business consulting", "Business process optimization"]) {
    assert.match(teamHtml, new RegExp(vertical, "i"));
  }
  assert.doesNotMatch(teamHtml, /Coding Manager|50\+<small> years/);
  assert.doesNotMatch(teamHtml, /Anitha G|Monisha(?: Anandakrishnan| A)?|SudalaiRaja|Sudalairaja|Karthik Gopalraj|Ranjith Raja R|Abishek D/);
  assert.match(contactHtml, /1120 SW 5th Avenue/);
  assert.match(contactHtml, /10\/2, First Floor, Gandhi Nagar/);
  assert.match(contactHtml, /\+1 541 7222194/);
  assert.match(contactHtml, /\+91 96778 96274/);
  assert.match(contactHtml, /formsubmit\.co\/(?:ajax\/)?ranjith\.raja90@gmail\.com/);
  assert.match(contactHtml, /Country calling code/);
  assert.match(contactHtml, /option value="US" selected=""/);
  assert.match(contactHtml, /United States/);
  assert.match(contactHtml, /id="phone-number"[^>]*required/);
  assert.match(contactHtml, /id="phone-number"[^>]*name="phone_number"/);
  assert.match(contactHtml, />Email<input[^>]*placeholder="you@healthcare\.com"/);
  assert.match(contactHtml, /placeholder="Individual Practice\/Clinics\/Hospitals or Other Health providers"/);
  assert.match(contactHtml, /type="hidden" name="_captcha" value="true"/);
  assert.match(contactHtml, /name="_honey"/);
  assert.doesNotMatch(contactHtml, /Choose a country code, then enter at least 7 digits/);
  assert.doesNotMatch(contactHtml, /Work email|you@practice\.com|Practice or health system|_captcha[^>]*false/);
  assert.doesNotMatch(contactHtml, /SOC\s*2/i);
  assert.match(homeHtml, /30-day free trial/);
  assert.match(homeHtml, /Convert on proven targets/);
  assert.match(contactHtml, /30-day free trial for eligible customers/);
  assert.match(contactHtml, /30-day free RCM trial consultation/);
});

test("exports the analytics disclosure without an active tracking script", async () => {
  const policy = await render("/cookie-policy/");
  const policyHtml = await policy.text();
  assert.match(policyHtml, /Microsoft Clarity analytics/);
  assert.match(policyHtml, /_clck/);
  assert.match(policyHtml, /_clsk/);
  assert.match(policyHtml, /_cltk/);
  assert.match(policyHtml, /deny advertising storage consent/);
  assert.match(policyHtml, /masked session recordings/);
  assert.doesNotMatch(policyHtml, /<script[^>]+src="https:\/\/www\.clarity\.ms/);
});

test("preloads only the two critical self-hosted fonts", async () => {
  const response = await render("/");
  const html = await response.text();
  const fontPreloads = html.match(/<link\b[^>]*as="font"[^>]*>/g) ?? [];
  // React/vinext may also hoist preload tags; duplicate URLs are one request.
  const uniqueFonts = new Set(fontPreloads.map((tag) => tag.match(/href="([^"]+)"/)?.[1]));
  assert.equal(uniqueFonts.size, 2);
  assert.match(fontPreloads.join(""), /\/fonts\/inter-latin\.woff2/);
  assert.match(fontPreloads.join(""), /\/fonts\/poppins-latin-700\.woff2/);
  assert.doesNotMatch(html, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
});
