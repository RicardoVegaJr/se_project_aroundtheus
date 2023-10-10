import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    // this._popupPreviewCardData = document.querySelector(".js-preview-popup");
  }
  openModal() {
    super.openModal();
    this._imagePreview = this._popupElement.querySelector(
      ".modal__preview-image"
    );
    this.getView();
  }
  getView() {}
}
