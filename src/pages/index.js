import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/API.js";
import "../pages/index.css";
import { config } from "../utils/constants.js";

const profileEditModal = document.querySelector("#profileModal");
const profilePhotoEditModal = document.querySelector("#profilePhotoModal");
const profilePhoto = document.querySelector("#profileImage");
const contentAddButton = document.querySelector("#content__add-button-action");
const profileFormElement = document.querySelector("#modalprofileform");
const contentFormElement = document.querySelector("#modalcontentform");
const nameInput = profileFormElement.querySelector("#name");
const jobInput = profileFormElement.querySelector("#title");
const profileName = document.querySelector("#profilename");
const profileJob = document.querySelector("#profilejob");
const editProfileButton = document.querySelector(
  "#profile__edit-button-action"
);

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "23172f33-55e2-4e0e-a695-0bae3ab40106",
    "Content-Type": "application/json",
  },
});

function createCard(data) {
  const card = new Card(
    data,
    "#card-template",
    handleImageClick,
    handleCardDeleteClick,
    handleCardLike,
    handleCardLikeRemove
  );
  return card.getView();
}

let cardSection;

api
  .getInitialCards()
  .then((cards) => {
    cardSection = new Section({ items: cards }, renderCard, "#section");

    function renderCard(cards) {
      const cardElement = createCard(cards);
      cardSection.addItem(cardElement);
    }

    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const newCardPopup = new PopupWithForm({
  popupSelector: "#contentModal",
  handleFormSubmit: handleCardFormSubmit,
});

contentAddButton.addEventListener("click", () => {
  cardFormValidator.toggleButtonState();
  newCardPopup.openModal();
});

function handleCardFormSubmit(cardValues) {
  const submitButton = document.getElementById("modalContentSubmit");
  const originalButtonText = submitButton.textContent;
  // Change button text to "Saving..."
  submitButton.textContent = "Saving...";

  api
    .addNewCard(cardValues)
    .then((cardData) => {
      const newCard = createCard(cardData);
      cardSection.prependItems(newCard);
      newCardPopup.closeModal();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitButton.textContent = originalButtonText;
    });
}

const newUserInfo = new UserInfo(
  "#profilename",
  "#profilejob",
  "#profileImage"
);

api
  .loadUserInfo()
  .then((userData) => {
    newUserInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
    });
  })
  .catch((err) => {
    console.log(err);
  });

editProfileButton.addEventListener("click", () => {
  const data = newUserInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  profileCardPopup.openModal();
});

profilePhoto.addEventListener("click", () => {
  profilePhotoEditValidator.toggleButtonState();
  profilePhotoEdit.openModal();
});

const profileCardPopup = new PopupWithForm({
  popupSelector: "#profileModal",
  handleFormSubmit: handleProfileFormSubmit,
});

const profilePhotoEdit = new PopupWithForm({
  popupSelector: "#profilePhotoModal",
  handleFormSubmit: handleProfilePhotoSubmit,
});

const deleteConfirmation = new PopupWithForm({
  popupSelector: "#deleteContent",
});

const contentCardPreview = new PopupWithImage({
  popupSelector: "#jsPopupSelector",
});

function handleCardDeleteClick(card) {
  const submitButton = document.querySelector("#confirmDeletion");
  deleteConfirmation.openModal();
  let submitButtonPressed = false;
  submitButton.addEventListener("click", () => {
    submitButtonPressed = true;
  });
  deleteConfirmation.setSubmitAction(() => {
    if (submitButtonPressed) {
      api
        .deleteCard(card.getId())
        .then(() => {
          card.remove();
          deleteConfirmation.closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("delete canceled");
    }
    submitButtonPressed = false;
  });
}

function handleImageClick(card) {
  contentCardPreview.openModal(card);
}

function handleProfilePhotoSubmit(inputValues) {
  const submitButtonm = document.getElementById("modalPhotoSubmit");
  const originalButtonText = submitButtonm.textContent;
  // Change button text to "Saving..."
  submitButtonm.textContent = "Saving...";

  api
    .updateProfilePhoto(inputValues)
    .then((res) => {
      newUserInfo.setUserInfo(res);
      profilePhotoEdit.closeModal();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitButtonm.textContent = originalButtonText;
    });
}

function handleProfileFormSubmit(inputValues) {
  profileFormValidator.toggleButtonState();
  profileCardPopup.openModal();
  const name = inputValues.name;
  const about = inputValues.about;
  const submitButton = document.getElementById("modalProfileSubmit");
  const originalButtonText = submitButton.textContent;
  // Change button text to "Saving..."
  submitButton.textContent = "Saving...";
  api
    .editProfileInfo({
      name: name,
      about: about,
    })
    .then((res) => {
      newUserInfo.setUserInfo(res);
      profileCardPopup.closeModal();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitButton.textContent = originalButtonText;
    });
}

function handleCardLike(card) {
  api
    .addCardLike(card.getId())
    .then(() => {
      card.handleLikeIcon();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleCardLikeRemove(card) {
  api
    .removeCardLike(card.getId())
    .then(() => {
      card.handleLikeIcon();
    })
    .catch((err) => {
      console.log(err);
    });
}

const profileFormValidator = new FormValidator(config, profileEditModal);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, contentFormElement);
cardFormValidator.enableValidation();

const profilePhotoEditValidator = new FormValidator(
  config,
  profilePhotoEditModal
);
profilePhotoEditValidator.enableValidation();
