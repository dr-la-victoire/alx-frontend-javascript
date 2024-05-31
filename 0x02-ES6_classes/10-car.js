export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    } else if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    } else if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    } else {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  }

  // Methods
  cloneCar() {
    // Returning a new object of the class
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Static getter for Symbol species
  static get [Symbol.species]() {
    return this;
  }
}
