import Card from "../components/Card.js";

// const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
//   },
// ];

const cardData = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const card = new Card(cardData, "#card-template");
card.getView();

const editProfileButton = document.querySelector(
  "#profile__edit-button-action"
);
const profileEditModal = document.querySelector("#profileModal");
const profileEditModalClose = document.querySelector("#modalProfileClose");
const contentModal = document.querySelector("#contentModal");
const contentAddButton = document.querySelector("#content__add-button-action");
const contentAddModalClose = document.querySelector("#modalContentClose");

const profileFormElement = document.querySelector("#modalprofileform");
const contentFormElement = document.querySelector("#modalcontentform");
const nameInput = profileFormElement.querySelector("#name");
const jobInput = profileFormElement.querySelector("#title");
const profileName = document.querySelector("#profilename");
const profileJob = document.querySelector("#profilejob");
const modalSubmit = document.querySelector("#modalsubmit");
const cardListEl = document.querySelector(".cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = contentFormElement.querySelector(".modal__edit_title");
const cardUrlInput = contentFormElement.querySelector(".modal__edit_url");
const previewImageModalWindow = document.querySelector(".js-preview-popup");
const previewImageElement = document.querySelector(".modal__preview-image");
const modalPreviewCloseButton = document.querySelector("#modalPreviewClose");
const modalPreviewTitle = document.querySelector(".modal__preview-title");

cardData.forEach((card) => {
  renderCard(card);
});

modalPreviewCloseButton.addEventListener("click", () => {
  closeModal(previewImageModalWindow);
});

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscButton);
  document.addEventListener("click", handleOverlayClose);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscButton);
  document.removeEventListener("click", handleOverlayClose);
}

function renderCard(cardData) {
  const cardElement = new Card(cardData);
  cardListEl.prepend(cardElement);
}

function getCardElement(cardData) {
  // const cardElement = cardTemplate.cloneNode(true);
  // const cardImageEl = cardElement.querySelector(".card-image");
  // const likeButton = cardElement.querySelector(".card-heart");
  // const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  // cardDeleteButton.addEventListener("click", () => {
  //   cardElement.remove();
  // });

  cardImageEl.addEventListener("click", () => {
    previewImageElement.src = cardData.link;
    previewImageElement.alt = `Photo of ${cardData.name}`;
    modalPreviewTitle.textContent = cardData.name;
    openModal(previewImageModalWindow);
  });

  // likeButton.addEventListener("click", () => {
  //   likeButton.classList.toggle("card-heart_active");
  // });

  // cardImageEl.src = cardData.link;
  // cardImageEl.alt = `Photo of ${cardData.name}`;
  // const cardTitleEl = cardElement.querySelector(".card-title");
  // cardTitleEl.textContent = cardData.name;
  // return cardElement;
}

//Profile Modal open and close event listeners
editProfileButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openModal(profileEditModal);
});
profileEditModalClose.addEventListener("click", () =>
  closeModal(profileEditModal)
);

//Content Modal open and close event listeners
contentAddButton.addEventListener("click", () => openModal(contentModal));
contentAddModalClose.addEventListener("click", () => closeModal(contentModal));

//Esc Button Modal Close

function handleEscButton(event) {
  const key = event.key;
  if (key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closeModal(openedPopup);
  }
}
//Overlay Modal Close
function handleOverlayClose(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(evt.target);
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(profileEditModal);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  contentFormElement.reset();
  const submitButton = document.querySelector("#modalContentSubmit");
  submitButton.classList.toggle("modal__button_disabled");
  submitButton.setAttribute("disabled", "true");
  closeModal(contentModal);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
contentFormElement.addEventListener("submit", handleCardFormSubmit);

// initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
