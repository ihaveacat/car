import Cookies from 'js-cookie'

const TokenKey = 'token'

export default {
  getToken() {
    return Cookies.get(TokenKey);
  },
  setToken(token) {
    Cookies.set(TokenKey, token);
  },
  removeToken() {
    Cookies.remove(TokenKey);
  }
}