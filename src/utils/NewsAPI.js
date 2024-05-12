export default class NewsAPI {
  constructor() {
    this.apiKey = "1c1afd6c571848f1b495da9cdcd7f399";
    this.baseUrl = `https://newsapi.org/v2/everything?pageSize=100&apiKey=1c1afd6c571848f1b495da9cdcd7f399&`;
  }

  getNewsData({ q, from, to }) {
    return this._request(`${this.baseUrl}q=${q}&from=${from}&to=${to}`, {});
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
