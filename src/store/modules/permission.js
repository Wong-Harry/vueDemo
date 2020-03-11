import { constantRouterMap, asyncRouterMap } from '@/router'

/**
 *判断用户是否拥有此菜单
 *
 * @param {*} route
 * @param {*} menus
 * @returns
 */
function hasPermission(route, menus) {
  if (route.menu) {
    return menus.indexOf(route.menu) > -1
  } else {
    return true
  }
}

/**
 *过滤路由,返回用户能看的到路由权限
 *
 * @param {*} asyncRouterMap
 * @param {*} menus
 * @returns
 */
function filterAsyncRouter(asyncRouterMap, menus) {
  const accessedRouters = asyncRouterMap.filter(route => {
    // 判断用户有没有这个菜单
    if (hasPermission(route, menus)) {
      if (route.children && route.children.length) {
        // 如果这个菜单下的子项目,进行一个递归判断
        route.children = filterAsyncRouter(route.children, menus)
        return route.children && route.children.length
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const user = {
  state: {
    routers: constantRouterMap, // 本用户所有的路由,包括了固定的路由和下面的addRouters
    addRouters: [] // 本用户的角色赋予的新增的动态路由
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers) // 将固定路由和新增路由进行合并
    }
  },
  actions: {
    generateRoutes({ commit, state }, userPermission) {
      return new Promise((resolve, reject) => {
        const role = userPermission.roleName
        const menus = userPermission.menuList
        // 开始过滤路由权限
        let accessedRouters
        if (role === '管理员') {
          accessedRouters = asyncRouterMap || []
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, menus)
        }
        // 执行设置路由的方法
        commit('SET_ROUTERS', accessedRouters)
        // 将筛选好的路由返回到上层,进行动态添加路由
        resolve(accessedRouters)
      })
    }
  }
}

export default user
