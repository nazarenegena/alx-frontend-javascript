import Car from "./10-car";

class EVCar extends Car {
  // constructor
  constructor(brand = "", motor = "", color = "", range = "") {
    super(brand, motor, color);
    this._range = range;
  }
  // static method
  static get [Symbol.species]() {
    return Car;
  }
}

export default EVCar;
