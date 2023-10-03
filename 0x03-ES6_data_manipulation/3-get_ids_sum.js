export default function getStudentIdsSum(objArr) {
  const objItem = objArr.map((item) => item.id);
  const initialValue = 0;
  const sumId = objItem.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumId;
}
