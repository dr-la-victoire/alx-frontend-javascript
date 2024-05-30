import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be instance of Currency');
    } else {
      this._amount = amount;
      this._currency = currency;
    }
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(theAmount) {
    if (typeof theAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = theAmount;
  }

  set currency(theCurrency) {
    if (!(theCurrency instanceof Currency)) {
      throw new TypeError('Currency must be instance of Currency');
    }
    this._currency = theCurrency;
  }

  // Methods
  displayFullPrice() {
    const firstAttr = this._amount;
    const secondAttr = this._currency.displayFullCurrency();

    return `${firstAttr} (${secondAttr})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Attributes must be a number');
    }
    return amount * conversionRate;
  }
}
