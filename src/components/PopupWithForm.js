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
    this._handleFormSubmit();
  };
  setEventListeners() {
    this._popupForm.addEventListener("submit", this._handleFormSubmitButton);
    super.setEventListeners();

    // this._popupForm.addEventListener("submit", this._handleFormSubmitButton);
  }
  // toggleButtonState() {
  //   this._modalSubmitButton = this._popupForm.querySelector(
  //     "#modalContentSubmit"
  //   );
  //   this._modalSubmitButton.classList.toggle(".modal__button");
  // }
}
