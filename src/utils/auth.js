export function getToken() {
  return window.localStorage.getItem('token');
}

export function setToken() {
  return window.localStorage.setItem('token', 1);
}

export function removeToken() {
  return window.localStorage.removeItem('token');
}
