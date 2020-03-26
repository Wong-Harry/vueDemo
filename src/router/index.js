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
    hidden: true,
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    label: '首页',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        // name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  }
]

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/user',
    name: 'User',
    label: '用户',
    redirect: '/user/index',
    component: Layout,
    meta: {
      title: '用户',
      icon: 'user'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index.vue'),
        // name: 'User',
        meta: { title: '用户列表', icon: 'dashboard' },
        menu: 'user'
      },
      {
        path: 'role',
        component: () => import('@/views/user/userRole.vue'),
        name: 'UserRole',
        meta: { title: '用户权限管理', icon: 'dashboard' },
        menu: 'role',
        children: [
          {
            path: 'roleuser',
            component: () => import('@/views/user/index.vue'),
            // name: 'User',
            meta: { title: '用户权限管理1', icon: 'dashboard' },
            menu: 'user'
          }, {
            path: 'roleuser1',
            component: () => import('@/views/user/index.vue'),
            // name: 'User',
            meta: { title: '用户权限管理2', icon: 'dashboard' },
            menu: 'user'
          }
        ]
      }
    ]
  },
  {
    path: '/article',
    name: 'Article',
    label: '文章',
    redirect: '/article/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/articleList/index.vue'),
        // name: 'Article',
        meta: { title: '文章', icon: 'dashboard' },
        menu: 'article'
      }
    ]
  },
  {
    path: '/about',
    label: '关于',
    name: 'About',
    redirect: '/about/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/About.vue'),
        // name: 'About',
        meta: { title: '关于', icon: 'dashboard' },
        menu: 'about'
      }
    ]
  }
]
