export default function createInt8TypedArray(length, position, value) {
  // Check if the specified position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view of the ArrayBuffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  return buffer;
}
