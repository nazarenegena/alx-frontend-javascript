// Create a function getListStudentIds that returns an array of ids from a list of object.

export default function getListStudentIds(objArr) {
  const result = Array.isArray(objArr);
  if (result) {
    const objItem = objArr.map((item) => item.id);
    return objItem;
  } else {
    const empty = [];
    return empty;
  }
}
