export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    // this._modalPreviewCloseButton =
    //   document.querySelector("#modalContentClose");
  }
  openModal() {
    this._popupElement.classList.add("modal_opened");
    this._closeModalButton = this._popupElement.querySelector(".modal__close");
    console.log(this._closeModalButton);
    this.setEventListeners();
  }
  closeModal() {
    //close popup
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscButton);
    document.removeEventListener("click", this._handleOverlayClose);
  }
  _handleEscButton = (event) => {
    //esc
    const key = event.key;
    if (key === "Escape") {
      console.log("esc pressed");
      this.closeModal();
    }
  };
  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      // console.log(this);
      this.closeModal();
    }
  };
  _handleClickButtonClose = () => {
    this.closeModal();
  };

  setEventListeners() {
    //set event listeners
    document.addEventListener("keyup", this._handleEscButton);
    document.addEventListener("click", this._handleOverlayClose);
    this._closeModalButton.addEventListener(
      "click",
      this._handleClickButtonClose
    );
  }
}
