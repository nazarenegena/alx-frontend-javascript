import Currency from "./3-currency";

export default class Pricing {
  // constructor
  constructor(amount, currency) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be a number");
    } else if (!(currency instanceof Currency)) {
      throw new TypeError("Currency must be an instance of class Currency");
    }

    this._amount = amount;
    this._currency = currency;
  }

  // amount getter and setter
  get getAmount() {
    return this._amount;
  }

  set setAmount(amount) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be a number");
    }
    this._amount = amount;
  }

  // currency getter and setter
  get getCurrency() {
    return this._currency;
  }

  set setCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError("Currency must be an instance of class Currency");
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be a number");
    } else if (typeof conversionRate !== "number") {
      throw new TypeError("Conversion rate must be a number");
    }

    return amount * conversionRate;
  }
}
