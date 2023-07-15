const previewImageModalWindow = document.querySelector(".js-preview-popup");
const previewImageElement = document.querySelector(".modal__preview-image");
const modalPreviewCloseButton = document.querySelector("#modalPreviewClose");
const modalPreviewTitle = document.querySelector(".modal__preview-title");
const cardImageEl = document.querySelector(".card-image");

cardImageEl.addEventListener("click", () => {
  previewImageElement.src = cardData.link;
  previewImageElement.alt = `Photo of ${cardData.name}`;
  modalPreviewTitle.textContent = cardData.name;
  openModal(previewImageModalWindow);
});

modalPreviewCloseButton.addEventListener("click", () => {
  closeModal(previewImageModalWindow);
});

export {
  previewImageModalWindow,
  previewImageElement,
  modalPreviewCloseButton,
  modalPreviewTitle,
};
