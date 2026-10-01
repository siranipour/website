import assert from "node:assert/strict";
import { test } from "node:test";
import { ANGLE_LIMIT, resetState, rightProbability, step, terminated } from "./environment";

test("Euler physics matches Gymnasium CartPole-v1 observations", () => {
  // Fixture generated with Gymnasium from state [0.1, -0.2, 0.03, -0.04].
  const first = step([0.1, -0.2, 0.03, -0.04], 1);
  const second = step(first, 0);
  const expected = [
    [0.09600000083446503, -0.005320804193615913, 0.029200000688433647, -0.3230687081813812],
    [0.09589358419179916, -0.2008461207151413, 0.0227386262267828, -0.021322188898921013],
  ];
  [first, second].forEach((state, index) => state.forEach((value, axis) => {
    assert.ok(Math.abs(value - expected[index][axis]) < 1e-7);
  }));
});

test("termination uses Gymnasium's strict boundaries", () => {
  assert.equal(terminated([2.4, 0, ANGLE_LIMIT, 0]), false);
  assert.equal(terminated([2.40001, 0, 0, 0]), true);
  assert.equal(terminated([-2.40001, 0, 0, 0]), true);
  assert.equal(terminated([0, 0, -ANGLE_LIMIT - 0.00001, 0]), true);
});

test("reset samples all four observations in [-0.05, 0.05)", () => {
  assert.deepEqual(resetState(() => 0), [-0.05, -0.05, -0.05, -0.05]);
  assert.deepEqual(resetState(() => 0.5), [0, 0, 0, 0]);
});

test("categorical probabilities are stable for large logits", () => {
  assert.equal(rightProbability([0, 0]), 0.5);
  assert.equal(rightProbability([1000, -1000]), 0);
  assert.equal(rightProbability([-1000, 1000]), 1);
  assert.ok(Math.abs(rightProbability([100, 101]) - 0.7310585786300049) < 1e-12);
});
