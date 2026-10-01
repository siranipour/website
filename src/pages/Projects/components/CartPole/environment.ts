// Gymnasium CartPole-v1: Euler integration, 20 ms steps, 500-step limit.
export type State = [number, number, number, number];
export const MAX_STEPS = 500;
export const ANGLE_LIMIT = (12 * Math.PI) / 180;

export function resetState(random = Math.random): State {
  return [0, 0, 0, 0].map(() => random() * 0.1 - 0.05) as State;
}

export function step(state: State, action: 0 | 1): State {
  const [x, velocity, theta, angularVelocity] = state;
  const force = action === 1 ? 10 : -10;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  const temp = (force + 0.05 * angularVelocity ** 2 * sin) / 1.1;
  const angularAcceleration = (9.8 * sin - cos * temp) /
    (0.5 * (4 / 3 - (0.1 * cos ** 2) / 1.1));
  const acceleration = temp - (0.05 * angularAcceleration * cos) / 1.1;
  return [
    x + 0.02 * velocity,
    velocity + 0.02 * acceleration,
    theta + 0.02 * angularVelocity,
    angularVelocity + 0.02 * angularAcceleration,
  ];
}

export function terminated([x, , theta]: State): boolean {
  return Math.abs(x) > 2.4 || Math.abs(theta) > ANGLE_LIMIT;
}

export function rightProbability(logits: ArrayLike<number>): number {
  // Stable two-action softmax; matches the categorical policy used in training.
  const difference = logits[0] - logits[1];
  return 1 / (1 + Math.exp(difference));
}
