import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reading from '@/views/mine/reading.vue'
import History from '@/views/mine/history.vue'
import Ticai from '@/views/classify/ticai.vue'
import Classify from '@/views/classify/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine/index.vue'),
    children: [
      {
        path: '/mine',
        redirect: 'reading'
      },
      {
        path: 'reading',
        name: 'reading',
        component: Reading
      },
      {
        path: 'history',
        name: 'history',
        component: History
      }
    ]
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify,
    children: [
      {
        // 这里有个疑问？为什么无效了？
        path: '/classify',
        redirect: 'ticai'
      },
      {
        path: 'ticai',
        name: 'ticai',
        component: Ticai
      },
      {
        path: 'jindu',
        name: 'jindu',
        component: () => import('@/views/classify/jindu.vue')
      },
      {
        name: 'meiti',
        path: 'meiti',
        component: () => import('@/views/classify/meiti.vue')
      },
      {
        name: 'shouzhong',
        path: 'shouzhong',
        component: () => import('@/views/classify/shouzhong.vue')
      }
    ]
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('@/views/update/index.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import('@/views/sort/index.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail/index.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
