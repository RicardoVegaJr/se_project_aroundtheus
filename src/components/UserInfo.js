export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this.nameEl = document.querySelector(nameSelector);
    this.aboutEl = document.querySelector(aboutSelector);
    this.userAvatar = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return { name: this.nameEl.textContent, job: this.aboutEl.textContent };
  }

  setUserInfo({ name, about, avatar }) {
    //which takes new user data and adds it to the page. This method should be used after successful submission of the profile form.
    this.nameEl.textContent = name;
    this.aboutEl.textContent = about;
    this.userAvatar.src = avatar;
  }
}
