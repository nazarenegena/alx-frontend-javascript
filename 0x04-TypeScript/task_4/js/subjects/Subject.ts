/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;
// setter
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}