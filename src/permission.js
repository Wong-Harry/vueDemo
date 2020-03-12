import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import router from './router'
import store from './store'
import { getToken } from './utils/auth'

const whiteList = ['/login', '/404'] // 白名单，不需要权限就可以看到的路由

router.beforeEach((to, from, next) => {
  console.log(`from:${from.path} ,to ${to.path}`)
  console.log(to)
  console.log('store.getters.role: ', store.getters.role)
  console.log(12, !store.getters.role)

  NProgress.start()

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else if (!store.getters.role) {
      store.dispatch('getInfo').then(() => {
        next({
          ...to
        })
      })
    } else {
      next()
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    // 如果路径不是白名单内的,而且又没有登录,就跳转登录页面
    store.commit('RESET_USER')
    next('/login')
    NProgress.done() // 结束Progress
  }
})

router.afterEach(() => {
  NProgress.done()
})
