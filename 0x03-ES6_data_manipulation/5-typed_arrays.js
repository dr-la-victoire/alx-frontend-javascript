export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const typedArray = new DataView(buffer);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  typedArray[position] = value;

  return typedArray;
}
