export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    const arrValue = appendString + idx;
    newArray.push(arrValue);
  }

  return newArray;
}
