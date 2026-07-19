import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const exportedPages = [
  ["index.html", "Recover every dollar"],
  ["team/index.html", "Built by people who know"],
  ["contact/index.html", "A clearer revenue cycle"],
];

for (const [relativePath, expectedContent] of exportedPages) {
  test(`exports ${relativePath}`, async () => {
    const fileUrl = new URL(`../dist/client/${relativePath}`, import.meta.url);
    const html = await readFile(fileUrl, "utf8");

    assert.match(html, new RegExp(expectedContent, "i"));
    assert.match(html, /Medzperfect/);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
  });
}

test("includes GitHub Pages custom-domain files", async () => {
  const [cname, noJekyll] = await Promise.all([
    readFile(new URL("../dist/client/CNAME", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/.nojekyll", import.meta.url), "utf8"),
  ]);

  assert.equal(cname.trim(), "medzperfect.com");
  assert.equal(noJekyll, "");
});
