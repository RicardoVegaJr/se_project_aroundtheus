const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
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

function openModal() {
  profileEditModal.classList.add("modal_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
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
