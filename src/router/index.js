import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* layout */
import Layout from '@/layout'

export const constantRouterMap = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    label: '登录',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'Home',
    label: '首页',
    hidden: true,
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: 'article-list',
        component: () => import('@/views/articleList/index.vue'),
        name: 'Dashboard',
        meta: { title: 'ArticleList', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    hidden: true,
    label: '用户',
    redirect: '/user/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/User.vue'),
        name: 'user',
        meta: { title: 'User', icon: 'dashboard', affix: true }
      }
    ]
  },
  // {
  //   path: '/about',
  //   label: '关于',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/About.vue')
  // }

  { path: '*', redirect: '/404', hidden: true }
]

export default new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// export default router

export const asyncRouterMap = [
  {
    path: '/user',
    name: 'user',
    label: '用户',
    component: () => import('@/views/User.vue'),
    meta: {
      title: '用户模块',
      icon: 'user'
    }
  },
  {
    path: '/about',
    name: 'About',
    label: '关于',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于模块',
      icon: 'user'
    },
    child: [
      {
        path: '/about',
        name: 'About',
        label: '关于',
        component: () => import('../views/About.vue'),
        meta: {
          title: '关于模块',
          icon: 'user'
        }
      }
    ]
  }
]
