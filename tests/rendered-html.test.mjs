import assert from "node:assert/strict";
import test from "node:test";

test("medoptio source contains real site content", async () => {
  const page = await import("node:fs/promises").then(({ readFile }) =>
    readFile(new URL("../app/MedOptioHome.tsx", import.meta.url), "utf8"),
  );

  assert.match(page, /Medication workflows, optimized for safer care/);
  assert.match(page, /MedOptio Review/);
  assert.match(page, /Request a Demo/);
  for (const term of [
    "Skeleton" + "Preview",
    "codex" + "-preview",
    "react" + "-loading" + "-skeleton",
  ]) {
    assert.equal(page.includes(term), false);
  }
});
