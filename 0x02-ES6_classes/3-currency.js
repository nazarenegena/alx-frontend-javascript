// Implement a class named Currency

export default class Currency {
  constructor(code, name) {
    if (typeof code && name !== "string") {
      throw new TypeError("Must be a string");
    }
    this._code = code;
    this._name = name;
  }

  // code getter and setter
  get getCode() {
    return this._code;
  }

  set setCode(value) {
    this._code = value;
  }

  // name getter and setter
  get getName() {
    return this._name;
  }

  set setName(value) {
    this._name = value;
  }

  // Implement a method named displayFullCurrency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
