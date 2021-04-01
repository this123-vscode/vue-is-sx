
import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '购物街-首页'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物街-分类'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '购物街-购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '购物街-我的'
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// 全局旅游守卫
router.beforeEach((to, from, next) => {
  // 将title的值从零传入
  document.title = to.matched[0].meta.title
  next()
})
export default router
