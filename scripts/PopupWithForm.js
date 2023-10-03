import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector("#modalcontentform");
    this._handleFormSubmit = handleFormSubmit;
  }
  closeModal() {
    this._popupForm.reset();
    super.close();
  }
}

//index.js

// const newCardPopup = new PopupWithForm("#contentModal", () => {});
//newCardPopup.open();
