import cookie from 'js-cookie'

const token = 'token'

export default {
  getToken() {
    return cookie.get(token);
  },
  setToken(token) {
    cookie.set(token, token);
  },
  removeToken() {
    cookie.remove(token);
  },
  setId(id) {
    cookie.set("userId", id);
  },
  getId() {
    return cookie.get("userId");
  }
}