export default class Car {
  // initializer
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // static field
  static get [Symbol.species]() {
    return this;
  }

  // method
  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }
}
