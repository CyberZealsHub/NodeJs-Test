const test = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("../src");

test("greet uses the default name", () => {
  assert.equal(greet(), "Hello, world!");
});

test("greet includes the provided name", () => {
  assert.equal(greet("Node.js"), "Hello, Node.js!");
});
