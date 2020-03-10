import { getToken } from '@/utils/auth.js'
import store from '..'

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
        // 根据登陆类型判断权限范围
        const mockData = {
          roleName: [],
          menuList: []
        }
        // if (getToken() === 'admin') {
        //   mockData.roleName = ['dashboard:add', 'dashboard:modify']
        // } else {
        // }

        // 动态添加路由
        store
          .dispatch('generateRoutes', mockData)
          .then(() => {})
          .catch(() => {})
      })
    }
  }
}

export default user
