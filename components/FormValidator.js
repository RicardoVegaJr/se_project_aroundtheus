class FormValidator {
  constructor(config, formEl) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formEl = formEl;
  }
  _showInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  // _toggleButtonState() {
  //   let foundInvalid = false;

  //   this._inputEls.forEach((inputEl) => {
  //     if (!inputEl.validity.valid) {
  //       foundInvalid = true;
  //     }
  //   });

  //   if (foundInvalid) {
  //     this._submitButton.classList.add(inactiveButtonClass);
  //     this._submitButton.disabled = true;
  //   } else {
  //     this._submitButton.classList.remove(inactiveButtonClass);
  //     this._submitButton.disabled = false;
  //   }
  // }
  _foundInvalid() {
    return !this._inputEls.every((inputEl) => inputEl.validity.valid);
  }
  _toggleButtonState() {
    // let foundInvalid = false;

    if (this._foundInvalid()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return this._showInputError(inputEl);
    }
    this._hideInputError(inputEl);
  }

  // _checkInputValidity(formEl, inputEl, options) {
  //   if (!inputEl.validity.valid) {
  //     this._showInputError(formEl, inputEl, options);
  //   } else {
  //     this._hideInputError(formEl, inputEl, options);
  //   }
  // }
  _hideInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _setEventListeners() {
    this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);

    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitButton.classList.toggle("modal__button_disabled");
      this._submitButton.setAttribute("disabled", "true");
    });
    this._setEventListeners(this._formEl);
  }
}

// const editFormValidator = new FormValidator();
// editFormValidator.enableValidation();

// const profileFormValidator = new FormValidator(config, profileEditModal);
// profileFormValidator.enableValidation();

// const cardFormValidator = new FormValidator(config, contentFormElement);
// cardFormValidator.enableValidation();

// const config = {
//   //   formSelector: ".popup__form",
//   //   inputSelector: ".popup__input",
//   //   submitButtonSelector: ".popup__button",
//   //   inactiveButtonClass: "popup__button_disabled",
//   //   inputErrorClass: "popup__input_type_error",
//   //   errorClass: "popup__error_visible",
//   formSelector: ".modal__form",
//   inputSelector: ".modal__edit",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: ".modal__error",
//   errorClass: ".modal__error_visible",
// };

export default FormValidator;
