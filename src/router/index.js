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
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  // {
  //   path: '/user',
  //   name: 'user',
  //   hidden: true,
  //   label: '用户',
  //   redirect: '/user/index',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/user/index.vue'),
  //       name: 'user',
  //       meta: { title: 'User', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/article',
  //   name: 'article',
  //   hidden: true,
  //   label: '文章',
  //   redirect: '/article/index',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/articleList/index.vue'),
  //       name: 'article',
  //       meta: { title: 'Article', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/about',
  //   label: '关于',
  //   hidden: true,
  //   name: 'about',
  //   redirect: '/about/index',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/About.vue'),
  //       name: 'about',
  //       meta: { title: 'about', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },

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
    name: 'User',
    label: '用户',
    redirect: '/user/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index.vue'),
        // name: 'User',
        meta: { title: '用户列表', icon: 'dashboard', affix: true },
        menu: 'user'
      },
      {
        path: 'role',
        component: () => import('@/views/user/userRole.vue'),
        name: 'UserRole',
        meta: { title: '用户权限管理', icon: 'dashboard', affix: true },
        menu: 'role'
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
        meta: { title: 'Article', icon: 'dashboard', affix: true },
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
        meta: { title: 'about', icon: 'dashboard', affix: true },
        menu: 'about'
      }
    ]
  }
]
