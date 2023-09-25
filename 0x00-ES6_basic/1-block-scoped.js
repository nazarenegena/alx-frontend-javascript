export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disabled-line
    const task = true;
    // eslint-disabled-line
    const task2 = false;
  }

  return [task, task2];
}
