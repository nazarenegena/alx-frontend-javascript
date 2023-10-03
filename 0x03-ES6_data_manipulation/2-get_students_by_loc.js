export default function getStudentsByLocation(objArr, city) {
  return objArr.filter((obj) => obj.location === city);
}
