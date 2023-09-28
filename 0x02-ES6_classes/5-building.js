export default class Building {
  // constructor function
  constructor(sqft = 0) {
    if (
      this.constructor !== Building &&
      typeof this.evacuationWarningMessage !== "function"
    ) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }

    this._sqft = sqft;
  }
  // getter
  get getSqft() {
    return this._sqft;
  }
}
