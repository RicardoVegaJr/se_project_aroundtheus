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
  }
}

//index.js

// const newCardPopup = new PopupWithForm("#contentModal", () => {});
//newCardPopup.open();
