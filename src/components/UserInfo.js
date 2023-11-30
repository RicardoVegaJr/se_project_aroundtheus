export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this.nameEl = document.querySelector(nameSelector);
    this.aboutEl = document.querySelector(aboutSelector);
  }
  getUserInfo() {
    this.nameEl.textContent.reset(), this.aboutEl.textContent.reset();
    return { name, job };
  }

  setUserInfo(data) {
    //which takes new user data and adds it to the page. This method should be used after successful submission of the profile form.
    this.nameEl.textContent = data.name;
    this.aboutEl.textContent = data.about;
  }
}
