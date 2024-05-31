import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    } else {
      this._floors = floors;
    }
  }

  evacuationWarningMessage() {
    const str = `Evaluate slowly the ${this._floors} floors`;
    return str;
  }
}
