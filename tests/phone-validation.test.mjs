import assert from "node:assert/strict";
import test from "node:test";
import { validatePhoneNumber } from "../app/contact/phone-validation.ts";

test("accepts common formatted phone numbers", () => {
  assert.equal(validatePhoneNumber("541 722 2194", "+1"), "");
  assert.equal(validatePhoneNumber("(020) 7946-0958", "+44"), "");
  assert.equal(validatePhoneNumber("96778.96274", "+91"), "");
});

test("requires at least seven local digits", () => {
  assert.match(validatePhoneNumber("123-456", "+1"), /at least 7 digits/);
});

test("rejects unsupported characters", () => {
  assert.match(validatePhoneNumber("541 722 ABCD", "+1"), /only numbers/);
});

test("enforces the E.164 total digit limit for the selected code", () => {
  assert.match(validatePhoneNumber("1234567890123", "+971"), /no more than 12 digits/);
});
