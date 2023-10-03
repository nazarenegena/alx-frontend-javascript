import { getListStudents } from "./0-get_list_students";

export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades
) {
  // Filter students by the specified city
  const filteredStudents = studentsList.filter(
    (student) => student.city === city
  );

  // Map over the filtered students to update their grades
  const updatedStudents = filteredStudents.map((student) => {
    // Find the corresponding new grade object for the student
    const matchingGrade = newGrades.find(
      (grade) => grade.studentId === student.id
    );

    // If a matching grade is found, use it; otherwise, set the grade as "N/A"
    const grade = matchingGrade ? matchingGrade.grade : "N/A";

    // Return the student with the updated grade
    return { ...student, grade };
  });

  return updatedStudents;
}
