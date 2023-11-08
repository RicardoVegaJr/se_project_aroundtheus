export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this.nameEl = document.querySelector(nameSelector);
    this.aboutEl = document.querySelector(aboutSelector);
  }
  getUserInfo() {
    //returns an object containing information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
    // return this.profileContent;
    // console.log(this.jobInput);
    // this.nameEl = this.nameEl.textcontent;
    // console.log(this.aboutSelector);
    // console.log(this.profileName);
    // console.log(this.profileJob);
    return [this.nameEl.textContent, this.aboutEl.textContent];
  }

  setUserInfo(data) {
    //which takes new user data and adds it to the page. This method should be used after successful submission of the profile form.
    this.nameEl.textContent = data.name;
    this.aboutEl.textContent = data.about;
  }
}
