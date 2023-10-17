import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._imagePreview = document.querySelector(".modal__preview-image");
  }
  openModal({ link, name }) {
    this.imagePreview.src = link;
    this.imagePreview.alt = `Photo of ${name}`;
    this.imagePreview.textContent = name;
    super.openModal();
  }
}
