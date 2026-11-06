import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('accepts ordinary address', () => {
  assert.equal(api.hasEmailShape('person@example.com'), true);
});
test('accepts plus alias', () => {
  assert.equal(api.hasEmailShape('a+b@sub.example.org'), true);
});
test('rejects missing at sign', () => {
  assert.equal(api.hasEmailShape('person.example.com'), false);
});
test('rejects missing domain dot', () => {
  assert.equal(api.hasEmailShape('a@localhost'), false);
});
test('rejects empty local part', () => {
  assert.equal(api.hasEmailShape('@example.com'), false);
});
test('rejects non-string', () => {
  assert.throws(() => api.hasEmailShape(1), TypeError);
});
