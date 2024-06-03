export default function hasValuesFromArray(set, array) {
  const arrayLength = array.length;
  let num = 0;
  for (const value of array) {
    if (set.has(value)) {
      num += 1;
    }
  }

  if (num === arrayLength) {
    return true;
  }

  return false;
}
