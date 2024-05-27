export default function returnHowManyArguments(...args) {
  let num = 0;
  for (const arg in args) {
    num++;
  }
  return num;
}
