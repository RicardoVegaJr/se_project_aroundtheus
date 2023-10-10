import { openModal, closeModal } from "../utils/utils.js";
import {
  previewImageModalWindow,
  previewImageElement,
  modalPreviewCloseButton,
  modalPreviewTitle,
} from "../utils/utils.js";
// import PopupWithImage from "../scripts/PopupWithImage.js";

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    // ---- card like button -----------------------------------------------------------------

    this._cardElement
      .querySelector(".card-heart")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    // ---- card delete button ---------------------------------------------------------------

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    this._cardElement
      .querySelector(".card-image")
      .addEventListener("click", () => {
        this._previewImageElement.src = this.link;
        this._previewImageElement.alt = `Photo of ${this.name}`;
        this._modalPreviewTitle.textContent = this.name;
        this._handleOpenModal();
      });
  }
  _handleOpenModal() {
    previewImageElement.src = this._link;
    previewImageElement.alt = `Photo of ${this._name}`;
    modalPreviewTitle.textContent = this._name;
    openModal(previewImageModalWindow);
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card-heart")
      .classList.toggle("card-heart_active");
  }
  getView() {
    // ---- get the card view ----------------------------------------------------------------

    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardImageEl = this._cardElement.querySelector(".card-image");
    this._cardTitleEl = this._cardElement.querySelector(".card-title");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = `Photo of ${this._name}`;
    this._cardTitleEl.textContent = this._name;
    // ---- set event listener ---------------------------------------------------------------

    this._setEventListeners();
    // ---- return the card ------------------------------------------------------------------

    return this._cardElement;
  }
}
