import Vue from 'vue'
import VueRouter from 'vue-router'
import books from '@/components/books'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    // books画面
    path: '/',
    name: 'books',
    component: books
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
