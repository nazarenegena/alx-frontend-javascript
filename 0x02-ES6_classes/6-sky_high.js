import Building from "./5-building";

class SkyHighBuilding extends Building {
  // constructor
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get getFloors() {
    return this._floors;
  }
  // method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

export default SkyHighBuilding;
