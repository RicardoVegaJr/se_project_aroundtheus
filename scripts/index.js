const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
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

const editProfile = document.querySelector("#profile__edit-button-action");
const profileEditModal = document.querySelector("#profileModal");
const profileEditModalClose = document.querySelector("#modalClose");

const profileFormElement = document.querySelector("#modalform");
let nameInput = profileFormElement.querySelector("#name");
let jobInput = profileFormElement.querySelector("#title");
let profileName = document.querySelector("#profilename");
let profileJob = document.querySelector("#profilejob");
const modalSubmit = document.querySelector("#modalsubmit");
const cardListEl = document.querySelector(".content__cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function openModal() {
  profileEditModal.classList.add("modal_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = (cardElement.querySelector(".content__card-image").src =
    cardData.link);
  const cardTitleEl = cardElement.querySelector(".content__card-title");
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

editProfile.addEventListener("click", openModal);
profileEditModalClose.addEventListener("click", closeModal);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
