import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'Post',
    component: () => import('../views/Post.vue'),
    props: true
  },
  {
    path: '/promotion/:id',
    name: 'PromotionDetail',
    component: () => import('../views/PromotionDetail.vue'),
    props: true
  },
  {
    path: '/promotions',
    name: 'Promotion',
    component: () => import('../views/Promotions.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
