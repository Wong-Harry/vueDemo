export function getToken() {
  return window.localStorage.getItem('token')
}

export function setToken(loginType) {
  return new Promise((resolve, reject) => {
    if (loginType === 'admin') {
      window.localStorage.setItem('token', 1)
    } else if (loginType === 'user') {
      console.log(123)
    }
  })
}

export function removeToken() {
  return window.localStorage.removeItem('token')
}
