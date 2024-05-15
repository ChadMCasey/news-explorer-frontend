export default class BackendAPI {
  constructor() {
    this.dev = "http://localhost:3001";
    this.prod = "http://localhost:3001";
    this._baseUrl =
      process.env.NODE_ENV === "production" ? this.prod : this.dev;
    this._headers = { "Content-Type": "application/json" };
  }

  signUp({ name, email, password }) {
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
  }

  signIn({ email, password }) {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
  }

  getUserData(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    });
  }

  unsaveClothingItem(articleId, token) {
    return this._request(`${this._baseUrl}/articles/${articleId}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    });
  }

  saveClothingItem(article, token) {
    const { keyword, title, text, date, source, link, image, owner } = article;
    return this._request(`${this._baseUrl}/articles`, {
      method: "POST",
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
        owner,
      }),
    });
  }

  _request(url, options) {
    return fetch(url, options).then(this._validateResult);
  }

  _validateResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }
}
