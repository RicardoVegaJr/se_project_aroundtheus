import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._imagePreview = document.querySelector(".modal__preview-image");
    this._modalImageText = document.querySelector(".modal__preview-title");
  }
  openModal({ name, link }) {
    this._imagePreview.src = link;
    this._imagePreview.alt = `Photo of ${name}`;
    this._modalImageText.textContent = name;
    super.openModal();
  }
  closeModal() {
    super.closeModal();
  }
}
