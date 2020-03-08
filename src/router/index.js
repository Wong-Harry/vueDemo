import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import User from '@/views/User.vue'
import dashboard from '@/views/dashboard/index.vue'
import login from '@/views/login/login.vue'

Vue.use(VueRouter)

const routes = [
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
        component: dashboard
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    label: '登录',
    component: login
  },
  {
    path: '/user',
    name: 'User',
    label: '用户',
    component: User
  }
  // {
  //   path: '/about',
  //   label: '关于',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

export const asyncRouterMap = [
  {
    path: '/user',
    name: 'user',
    label: '用户',
    component: User,
    meta: {
      title: '用户模块',
      icon: 'user'
    }
  },
  {
    path: '/about',
    name: 'About',
    label: '关于',
    component: import('../views/About.vue'),
    meta: {
      title: '关于模块',
      icon: 'user'
    },
    child: [
      {
        path: '/about',
        name: 'About',
        label: '关于',
        component: import('../views/About.vue'),
        meta: {
          title: '关于模块',
          icon: 'user'
        }
      }
    ]
  }
]
