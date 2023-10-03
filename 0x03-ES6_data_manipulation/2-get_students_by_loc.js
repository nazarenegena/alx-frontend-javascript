// Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.
// It should accept a list of students (from getListStudents) and a city (string) as parameters.

export default function getStudentsByLocation(objArr, city) {
  const objItem = objArr.filter((item) => {
    return item.location.includes(city);
  });
  return objItem;
}
