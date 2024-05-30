export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._code = code;
      this._name = name;
    }
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set name(theName) {
    if (typeof theName !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = theName;
  }

  set code(theCode) {
    if (typeof theCode !== 'string') {
      throw new TypeError('Code must be a string');
    }

    this._code = theCode;
  }

  // Methods
  displayFullCurrency() {
    const firstAttr = this._name;
    const secondAttr = this._code;

    return `${firstAttr} (${secondAttr})`;
  }
}
