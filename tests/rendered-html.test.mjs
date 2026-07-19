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
  assert.match(homeHtml, /\/team\/monisha\.jpg/);
  assert.doesNotMatch(homeHtml, /ISO(?:\/IEC)? 27001 aligned|Launch estimate derived|Compliance-ready describes/i);
  assert.doesNotMatch(homeHtml, /SOC\s*2|Chennai|Gandhi Nagar|India delivery/i);
  for (const name of ["Anitha", "Monisha", "Karthik", "Ranjith", "Abishek"]) {
    assert.match(teamHtml, new RegExp(`>${name}<`));
    assert.match(teamHtml, new RegExp(`/team/${name.toLowerCase()}\\.jpg`));
  }
  assert.doesNotMatch(teamHtml, /Anitha G|Monisha Anandakrishnan|Monisha A|Karthik Gopalraj|Ranjith Raja R|Abishek D/);
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
});
