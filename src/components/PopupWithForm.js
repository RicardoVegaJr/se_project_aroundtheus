import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  openModal() {
    super.openModal();
    this._setEventListeners();
  }
  closeModal() {
    this._popupForm.reset();
    super.closeModal();
  }
  _handleFormSubmitButton = (evt) => {
    // profileFormElement.addEventListener("submit", handleProfileFormSubmit);
    // contentFormElement.addEventListener("submit", handleCardFormSubmit);
    evt.preventDefault();
    console.log("step 2");
    this._handleFormSubmit();
  };
  _setEventListeners() {
    this._popupForm.addEventListener("submit", this._handleFormSubmitButton);
    console.log("step 1");
  }
}

//index.js

// const newCardPopup = new PopupWithForm("#contentModal", () => {});
//newCardPopup.open();
