export default function returnHowManyArguments(...args) {
  let num = 0;
  for (const arg in args) {
    if (arg) {
      num += 1;
    }
  }
  return num;
}
