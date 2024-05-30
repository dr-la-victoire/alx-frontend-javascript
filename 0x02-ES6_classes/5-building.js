export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }

    if (this.constructor === Building) {
      throw new Error('Error');
    }

    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Method
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
