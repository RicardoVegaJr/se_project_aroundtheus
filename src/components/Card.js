export default class Card {
  constructor(
    cards,
    cardSelector,
    handleImageClick,
    handleCardDeleteClick,
    handleCardLike,
    _handleCardLikeRemove
  ) {
    this._name = cards.name;
    this._link = cards.link;
    this._id = cards._id;
    this._isLiked = cards.isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleCardDeleteClick = handleCardDeleteClick;
    this._handleCardLike = handleCardLike;
    this._handleCardLikeRemove = _handleCardLikeRemove;
  }
  getId() {
    return this._id;
  }
  _setEventListeners() {
    // ---- card like button -----------------------------------------------------------------

    this._cardElement
      .querySelector(".card-heart")
      .addEventListener("click", () => {
        if (this._isLiked) {
          this._handleCardLikeRemove(this);
        } else {
          this._handleCardLike(this);
        }
      });

    // ---- card delete button ---------------------------------------------------------------

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleCardDeleteClick(this);
      });
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  remove() {
    this._cardElement.remove();
  }

  handleLikeIcon() {
    this._cardElement
      .querySelector(".card-heart")
      .classList.toggle("card-heart_active");
    this._isLiked = !this._isLiked;
  }

  _loadLikes() {
    this._cardElement
      .querySelector(".card-heart")
      .classList.add("card-heart_active");
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

    if (this._isLiked) {
      this._loadLikes();
    }
    // ---- set event listener ---------------------------------------------------------------

    this._setEventListeners();
    // ---- return the card ------------------------------------------------------------------

    return this._cardElement;
  }
}
