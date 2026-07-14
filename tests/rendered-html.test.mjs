import assert from "node:assert/strict";
import test from "node:test";

test("medoptio source contains real site content", async () => {
  const { readFile } = await import("node:fs/promises");
  const page = await readFile(new URL("../app/MedOptioHome.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
  const demo = await readFile(new URL("../app/demo/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Medication workflows, optimized for safer care/);
  assert.match(content, /MedOptio Review/);
  assert.match(demo, /Request a Demo/);
  for (const term of [
    "Skeleton" + "Preview",
    "codex" + "-preview",
    "react" + "-loading" + "-skeleton",
  ]) {
    assert.equal(page.includes(term), false);
  }
});
