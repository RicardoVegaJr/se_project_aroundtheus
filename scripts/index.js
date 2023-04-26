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
const cardTitleInput = contentFormElement.querySelector(".modal__input_title");
const cardUrlInput = contentFormElement.querySelector(".modal__input_url");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card-image");
  const likeButton = cardElement.querySelector(".card-heart");
  //Find trash can icon (select it)

  // add the event listener to the delete button
  //cardElement.remove(); when button is clicked.

  //add click listener to cardimage element
  //open modal with preview image modal.

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card-heart_active");
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = `Photo of ${cardData.name}`;
  const cardTitleEl = cardElement.querySelector(".card-title");
  cardTitleEl.textContent = cardData.name;
  return cardElement;
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(profileEditModal);
}

function handleContentFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closeModal(contentModal);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
contentFormElement.addEventListener("submit", handleContentFormSubmit);

//initialCards.forEach((cardData) => {
//const cardElement = getCardElement(cardData);
// cardListEl.prepend(cardElement);
//});

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

// const likeButtons = document.querySelectorAll(".card-heart");
// likeButtons.forEach((likeButton) => {
//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card-heart_active");
//   });
// });
