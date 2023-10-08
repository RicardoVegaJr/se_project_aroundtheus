export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._modalPreviewCloseButton =
      document.querySelector("#modalContentClose");
  }
  openModal() {
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
  }
  closeModal() {
    //close popup
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscButton);
    document.removeEventListener("click", this._handleOverlayClose);
  }
  _handleEscButton(event) {
    //esc
    const key = event.key;
    if (key === "Escape") {
      // const openedPopup = document.querySelector(".modal_opened");
      console.log("esc pressed");
      // this.closeModal();
    }
  }
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains("modal_opened")) {
      this.closeModal();
    }
  }

  setEventListeners() {
    //set event listeners
    document.addEventListener("keyup", this._handleEscButton);
    document.addEventListener("click", this._handleOverlayClose);
  }
}
