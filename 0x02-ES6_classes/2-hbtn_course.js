// Implement a class named HolbertonCourse:

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    } else if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    } else if (!Array.isArray(students)) {
      throw new TypeError("Students must be an array of strings");
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name getter and setter
  get getName() {
    return this._name;
  }

  set setName(value) {
    this._name = value;
  }

  // length getter and setter
  get getLength() {
    return this._length;
  }

  set setLength(value) {
    this._length = value;
  }

  // Students getter and setter
  get getStudents() {
    return this._students;
  }

  set setStudents(value) {
    this._students = value;
  }
}
