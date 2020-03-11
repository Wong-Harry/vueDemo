import { getToken } from '@/utils/auth.js'
import store from '..'
import router from '../../router'

const user = {
  state: {
    token: getToken(),
    name: ''
  },
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
          menuList: [],
          nickName: '',
          roleName: '',
          permissionList: []
        }
        if (getToken() === 'admin') {
          mockData.nickName = '超级管理员'
          mockData.roleName = '管理员'
          mockData.permissionList = ['dashboard:add', 'dashboard:modify']
          mockData.menuList = ['user', 'role', 'article', 'about']
        } else {
          mockData.nickName = '用户123'
          mockData.roleName = '用户'
          mockData.permissionList = ['dashboard:add']
          mockData.menuList = ['user', 'article', 'about']
        }
        // 动态添加路由
        store
          .dispatch('generateRoutes', mockData)
          .then(addRouter => {
            console.log(addRouter)
            console.log(store.getters.permission_routers)
            router.addRoutes(store.getters.addRouters)
          })
          .catch(() => {})
      })
    }
  }
}

export default user
