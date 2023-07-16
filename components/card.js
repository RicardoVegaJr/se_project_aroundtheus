import { openModal, closeModal } from "../utils/utils.js";
import {
  previewImageModalWindow,
  previewImageElement,
  modalPreviewCloseButton,
  modalPreviewTitle,
} from "../utils/utils.js";

export default class Card {
  constructor(
    { name, link },
    cardSelector,
    previewImageModalWindow,
    previewImageElement,
    modalPreviewCloseButton,
    modalPreviewTitle
  ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._previewImageModalWindow = previewImageModalWindow;
    this._previewImageElement = previewImageElement;
    this._modalPreviewCloseButton = modalPreviewCloseButton;
    this._modalPreviewTitle = modalPreviewTitle;
  }
  _setEventListeners() {
    // ".card-heart"
    this._cardElement
      .querySelector(".card-heart")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    // // ".card__delete-button"
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
    this._openModal(previewImageModalWindow);
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
