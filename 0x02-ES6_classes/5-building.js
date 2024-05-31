export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    } else if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    } else {
      this._sqft = sqft;
    }
  }

  // Getter
  get sqft() {
    return this._sqft;
  }
}
