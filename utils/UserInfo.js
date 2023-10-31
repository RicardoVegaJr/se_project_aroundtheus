export default class UserInfo {
  constructor(nameInput, jobInput) {
    this.nameInput = nameInput;
    this.jobInput = jobInput;
    this.nameInput = document.querySelector("#name");
    this.jobInput = document.querySelector("#title");
    this.profileName = document.querySelector("#profilename");
    this.profileJob = document.querySelector("#profilejob");
  }
  getUserInfo() {
    //returns an object containing information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
    // return this.profileContent;
    this.nameInput = this.profileName.textContent;
    this.jobInput = this.profileJob.textContent;
    // console.log(this.jobInput);
    // console.log(this.nameInput);
    // console.log(this.profileName);
    // console.log(this.profileJob);
  }

  setUserInfo() {
    //which takes new user data and adds it to the page. This method should be used after successful submission of the profile form.
  }
}
