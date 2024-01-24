export default class Api {
  constructor({ baseUrl, authToken }) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authToken,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  loadUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "23172f33-55e2-4e0e-a695-0bae3ab40106",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  editProfileInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "23172f33-55e2-4e0e-a695-0bae3ab40106",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.userInput.name,
        about: this.userInput.about,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  addNewCard() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        authorization: "23172f33-55e2-4e0e-a695-0bae3ab40106",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Miami",
        link: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      }),
    });
  }
  deleteCard() {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/cards/65a6c57ce1454c001ad77af1",
      {
        method: "DELETE",
        headers: {
          authorization: "23172f33-55e2-4e0e-a695-0bae3ab40106",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Miami",
          link: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
        }),
      }
    );
  }
  likeCard() {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/cards/65a6c9e9e1454c001ad77b1b/likes",
      {
        method: "PUT",
        headers: {
          authorization: "23172f33-55e2-4e0e-a695-0bae3ab40106",
          "Content-Type": "application/json",
        },
      }
    );
  }
  removeCardLike() {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/cards/65a6c9e9e1454c001ad77b1b/likes",
      {
        method: "DELETE",
        headers: {
          authorization: "23172f33-55e2-4e0e-a695-0bae3ab40106",
          "Content-Type": "application/json",
        },
      }
    );
  }
  updateProfilePhoto() {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "23172f33-55e2-4e0e-a695-0bae3ab40106",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar:
            "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
        }),
      }
    );
  }
}
