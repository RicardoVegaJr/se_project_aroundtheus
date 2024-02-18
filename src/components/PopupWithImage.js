import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._imagePreview = document.querySelector(".modal__preview-image");
    this._modalImageText = document.querySelector(".modal__preview-title");
  }
  openModal(card) {
    this._imagePreview.src = card.link;
    this._imagePreview.alt = `Photo of ${card.name}`;
    this._modalImageText.textContent = card.name;
    super.openModal();
  }
  closeModal() {
    super.closeModal();
  }
}
