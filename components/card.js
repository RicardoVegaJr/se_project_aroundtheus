export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {}
  getView() {
    //get the card view
    //set event listener
    this._setEventListeners();
    //return the card
  }
}