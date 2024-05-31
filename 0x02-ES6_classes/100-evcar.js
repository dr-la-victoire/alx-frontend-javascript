import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    } else {
      this._range = range;
    }
  }

  // Overiding the static getter
  static get [Symbol.species]() {
    return Car;
  }
}
