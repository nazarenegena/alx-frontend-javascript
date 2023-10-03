// Create a function named getListStudents that returns an array of objects.

export default function getListStudents() {
  return [
    {
      firstName: "Guillaume",
      id: 1,
      location: "in San Francisco",
    },
    {
      firstName: "James",
      id: 2,
      location: "in Columbia",
    },
    {
      firstName: "Serena",
      id: 5,
      location: "in San Francisco",
    },
  ];
}
console.log(getListStudents());
