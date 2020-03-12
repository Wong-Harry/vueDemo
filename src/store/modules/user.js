import { getToken, setToken } from '@/utils/auth.js'
import store from '..'
import router from '../../router'

const user = {
  state: {
    token: getToken(),
    name: '',
    role: '',
    menus: [],
    permissions: []
  },
  mutations: {
    SET_USER(state, userInfo) {
      state.name = userInfo.nickName
      state.role = userInfo.roleName
      state.menus = userInfo.menuList
      state.permissions = userInfo.permissionList
    },
    RESET_USER: state => {
      state.name = ''
      state.role = ''
      state.menus = []
      state.permissions = []
    }
  },
  actions: {
    login({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        console.log(data)
        const resData = {
          result: 'false'
        }
        if (data.loginForm.userName === 'admin' || data.loginForm.userName === 'user') {
          resData.result = 'success'
          setToken(data.loginForm.userName)
        }
        resolve(resData)
      })
    },
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // 调用api获取用户信息，现在是mock数据出来
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
        // 设置用户权限和信息
        commit('SET_USER', mockData)
        // cookie保存登录状态,仅靠vuex保存的话,页面刷新就会丢失登录状态
        setToken(mockData.roleName === '管理员' ? 'admin' : 'user')
        // 动态添加路由
        store
          .dispatch('generateRoutes', mockData)
          .then(addRouter => {
            router.addRoutes(store.getters.addRouters)
          })
          .catch(() => {})
        //  返回信息去路由守卫
        resolve()
      })
    }
  }
}

export default user
