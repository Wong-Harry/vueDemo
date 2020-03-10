import { getToken } from '@/utils/auth.js'

const user = {
  state: {},
  mutations: {},
  actions: {
    login({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        console.log(data)
        const resData = {
          result: 'false'
        }
        if (data.loginForm.userName === 'admin' || data.loginForm.userName === 'user') {
          resData.result = 'success'
        }
        resolve(resData)
      })
    },
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // 调用api获取用户信息，现在是mock数据出来
        console.log(getToken())
      })
    }
  }
}

export default user
