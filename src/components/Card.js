// import { openModal, closeModal } from "../components/Popup";
// import {
//   previewImageModalWindow,
//   previewImageElement,
//   modalPreviewCloseButton,
//   modalPreviewTitle,
// } from "../utils/utils.js";
// import PopupWithImage from "../scripts/PopupWithImage.js";

export default class Card {
  constructor(
    { name, link },
    cardSelector,
    handleImageClick,
    handleCardDeleteClick,
    cardId
  ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleCardDeleteClick = handleCardDeleteClick;
    this._cardId = cardId;
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
        // this._deleteConfirmation.classList.add("modal_opened");
        // const isConfirmed = document.querySelector("#confirmDeletion");
        // if (isConfirmed) {
        //   console.log("Deletion confirmed!");
        //   this._handleDeleteCard();
        //   this._handleCardDeleteClick({ name: this._name, link: this._link });
        //   this._deleteConfirmation.classList.remove("modal_opened");
        // } else {
        //   console.log("Deletion canceled.");
        //   this._deleteConfirmation.classList.remove("modal_opened");
        // }

        this._handleDeleteCard();
        this._handleCardDeleteClick(this._cardId);
      });
    this._cardElement
      .querySelector(".card-image")
      .addEventListener("click", () => {
        // this._previewImageElement.src = this.link;
        // this._previewImageElement.alt = `Photo of ${this.name}`;
        // this._modalPreviewTitle.textContent = this.name;
        this._handleImageClick({ name: this._name, link: this._link });
      });
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
