import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector("#modalcontentform");
    this._handleFormSubmit = handleFormSubmit;
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
}

//index.js

const newCardPopup = new PopupWithForm("#contentModal", () => {});
newCardPopup.oopen();
