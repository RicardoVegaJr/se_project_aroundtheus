export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  openModal() {
    this._popupElement.classList.add("modal_opened");
    this._popupElement.setEventListeners();
  }
  closeModal() {
    //close popup
    this._popupElement.classList.remove("modal_opened");
  }
  _handleEscButton(event) {
    //esc

    const key = event.key;
    if (key === "Escape") {
      const openedPopup = this._popupElement.querySelector(".modal_opened");
      this.closeModal(openedPopup);
    }
  }
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains("modal_opened")) {
      this.closeModal(evt.target);
    }
  }

  setEventListeners() {
    //set event listeners

    this._popupElement.addEventListener("click", () => {
      this._handleOverlayClose();
    });

    this._popupElement.addEventListener("keyup", () => {
      this._handleEscButton();
    });
  }
}
