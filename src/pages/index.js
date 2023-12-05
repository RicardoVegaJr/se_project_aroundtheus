import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
// import { openModal, closeModal } from "../utils/utils.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/section.js";
import UserInfo from "../components/UserInfo.js";

import "../pages/index.css";

// setTimeout(() => {
//   profileCardPopup.closeModal();
// }, 3000);

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

// const card = new Card(cardData, "#card-template");
// card.getView();

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
// const previewImageModalWindow = document.querySelector(".js-preview-popup");
// const previewImageElement = document.querySelector(".modal__preview-image");
const modalPreviewCloseButton = document.querySelector("#modalPreviewClose");
// const modalPreviewTitle = document.querySelector(".modal__preview-title");

// cardData.forEach((card) => {
//   renderCard(card);
// });

// modalPreviewCloseButton.addEventListener("click", () => {
//   closeModal(previewImageModalWindow);
// });

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keyup", handleEscButton);
//   document.addEventListener("click", handleOverlayClose);
// }

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keyup", handleEscButton);
//   document.removeEventListener("click", handleOverlayClose);
// }

const newCardPopup = new PopupWithForm({
  popupSelector: "#contentModal",
  handleFormSubmit: handleCardFormSubmit,
});

const profileCardPopup = new PopupWithForm({
  popupSelector: "#profileModal",
  handleFormSubmit: handleProfileFormSubmit,
});

const contentCardPreview = new PopupWithImage({
  popupSelector: ".js-preview-popup",
});

const cardSection = new Section({ items: cardData }, renderCard, "#section");
cardSection.renderItems(cardData);

const newUserInfo = new UserInfo("#profilename", "#profilejob");

function renderCard(cardData) {
  const cardElement = new Card(cardData, "#card-template", handleImageClick);
  // cardListEl.prepend(cardElement.getView());
  cardSection.addItem(cardElement.getView());
}

function handleImageClick(cardData) {
  console.log(cardData);
  contentCardPreview.openModal(cardData);
}

// ---- Profile Modal open and close event listeners -------------------------------------

const editProfileButton = document.querySelector(
  "#profile__edit-button-action"
);

editProfileButton.addEventListener("click", () => {
  // nameInput.value = profileName.textContent;
  // jobInput.value = profileJob.textContent;
  cardFormValidator.toggleButtonState();
  profileCardPopup.openModal();
});

// profileEditModalClose.addEventListener("click", () =>
//   profileCardPopup.closeModal()
// );

// modalPreviewCloseButton.addEventListener("click", () =>
//   contentCardPreview.closeModal()
// );

// ---- //Content Modal open and close event listeners -----------------------------------

contentAddButton.addEventListener("click", () => {
  cardFormValidator.toggleButtonState();
  newCardPopup.openModal();
});
// contentAddModalClose.addEventListener("click", () => newCardPopup.closeModal());

// ---- //Esc Button Modal Close ---------------------------------------------------------

// function handleEscButton(event) {
//   const key = event.key;
//   if (key === "Escape") {
//     const openedPopup = document.querySelector(".modal_opened");
//     closeModal(openedPopup);
//   }
// }
// //Overlay Modal Close
// function handleOverlayClose(evt) {
//   if (evt.target.classList.contains("modal_opened")) {
//     closeModal(evt.target);
//   }
// }

// const submitButtonEvent = document.querySelector(".modal__form");

// submitButtonEvent.addEventListener("submit", () =>
//   newUserInfo.setUserInfo({
//     name: nameInput.value,
//     about: jobInput.value,
//   })
// );

function handleProfileFormSubmit(inputValues) {
  // profileName.textContent = nameInput.value;
  // profileJob.textContent = jobInput.value;
  // newUserInfo.setUserInfo({
  //   name: inputValues.name,
  //   about: inputValues.job,
  // });
  newUserInfo.setUserInfo(inputValues);
  profileCardPopup.closeModal();
}

function handleCardFormSubmit(cardValues) {
  const name = cardValues.title;
  const link = cardValues.url;
  renderCard({ name, link }, cardListEl);
  // contentFormElement.reset();
  // const submitButton = document.querySelector("#modalContentSubmit");
  // submitButton.classList.toggle("modal__button_disabled");
  // submitButton.setAttribute("disabled", "true");
  newCardPopup.closeModal();
}

const config = {
  //   formSelector: ".popup__form",
  //   inputSelector: ".popup__input",
  //   submitButtonSelector: ".popup__button",
  //   inactiveButtonClass: "popup__button_disabled",
  //   inputErrorClass: "popup__input_type_error",
  //   errorClass: "popup__error_visible",
  formSelector: ".modal__form",
  inputSelector: ".modal__edit",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: ".modal__error",
  errorClass: ".modal__error_visible",
};

// profileFormElement.addEventListener("submit", handleProfileFormSubmit);
// contentFormElement.addEventListener("submit", handleCardFormSubmit);

// initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

const profileFormValidator = new FormValidator(config, profileEditModal);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, contentFormElement);
cardFormValidator.enableValidation();
