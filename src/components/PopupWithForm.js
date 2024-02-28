import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  closeModal() {
    this._popupForm.reset();
    super.closeModal();
    this._popupForm.removeEventListener("submit", this._handleFormSubmitButton);
  }
  _handleFormSubmitButton = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  };
  setEventListeners() {
    this._popupForm.addEventListener("submit", this._handleFormSubmitButton);
    super.setEventListeners();
  }
  _getInputValues() {
    const inputList = [...this._popupForm.querySelectorAll(".input")];

    const inputValues = {};

    for (const input of inputList) {
      inputValues[input.name] = input.value;
    }

    return inputValues;
  }
  setSubmitAction(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }
}
