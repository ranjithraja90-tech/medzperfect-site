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
  ["/team", "Built by people who know"],
  ["/contact", "A clearer revenue cycle"],
]) {
  test(`renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(expected, "i"));
    assert.match(html, /Medzperfect/);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
  });
}

test("includes contact and compliance details", async () => {
  const [home, contact] = await Promise.all([render("/"), render("/contact")]);
  const homeHtml = await home.text();
  const contactHtml = await contact.text();
  assert.match(homeHtml, /HIPAA-aligned operating model/);
  assert.match(homeHtml, /ISO\/IEC 27001 aligned/);
  assert.match(homeHtml, /AI-enabled RCM/);
  assert.match(homeHtml, /Zero-retention/);
  assert.doesNotMatch(homeHtml, /SOC\s*2|Chennai|Gandhi Nagar|India delivery/i);
  assert.match(contactHtml, /1120 SW 5th Avenue/);
  assert.match(contactHtml, /10\/2, First Floor, Gandhi Nagar/);
  assert.match(contactHtml, /\+1 541 7222194/);
  assert.match(contactHtml, /\+91 96778 96274/);
  assert.match(contactHtml, /formsubmit\.co\/(?:ajax\/)?ranjith\.raja90@gmail\.com/);
  assert.doesNotMatch(contactHtml, /SOC\s*2/i);
});
