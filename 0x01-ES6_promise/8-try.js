/* eslint-disable */
export default function divideFunction(numerator, denominator) {
  // conditions
  if (denominator === 0) {
    throw new Error("cannot divide by 0");
  }
  return numerator / denominator;
}
