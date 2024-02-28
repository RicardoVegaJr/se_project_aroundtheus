const previewImageModalWindow = document.querySelector(".js-preview-popup");
const previewImageElement = document.querySelector(".modal__preview-image");
const modalPreviewCloseButton = document.querySelector("#modalPreviewClose");
const modalPreviewTitle = document.querySelector(".modal__preview-title");

// Esc Button Modal Close
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

export {
  previewImageModalWindow,
  previewImageElement,
  modalPreviewCloseButton,
  modalPreviewTitle,
};
