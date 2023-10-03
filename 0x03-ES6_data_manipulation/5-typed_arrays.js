export default function createInt8TypedArray(length, position, value) {
  const objArr = new ArrayBuffer(length);
  const objVal = new DataView(objArr);

  try {
    objVal.setInt8(position, value);
  } catch (e) {
    throw Error("Position outside range");
  }
  return objVal;
}
