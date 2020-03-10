import { constantRouterMap, asyncRouterMap } from '@/router'

const user = {
  state: {
    routers: constantRouterMap, // 本用户所有的路由,包括了固定的路由和下面的addRouters
    addRouters: [] // 本用户的角色赋予的新增的动态路由
  },
  mutations: {},
  actions: {
    getUserRouter({ commit, state }, userPermission) {
      return new Promise(resolve => {
        console.log(asyncRouterMap)
      })
    }
  }
}

export default user
