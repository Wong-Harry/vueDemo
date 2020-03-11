import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import router from './router'
import store from './store'

import { getToken } from './utils/auth'

const whiteList = ['/login', '/404'] // 白名单，不需要权限就可以看到的路由
router.beforeEach((to, from, next) => {
  // console.log(`from:${from.path} ,to ${to.path}`)
  console.log(to)

  NProgress.start()

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else if (!store.getters.role) {
      next()
      store.dispatch('getInfo')
      // console.log(to)

      // console.log({
      //   ...to
      // })
      NProgress.done()
    } else {
      next()
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    next('/login')
  }
  // NProgress.done();
})

router.afterEach(() => {
  NProgress.done()
})
