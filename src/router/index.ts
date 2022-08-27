import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    redirect: '/login'
    // component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(to => {
  if (to.path !== '/login') {
    const menu: any = window.localStorage.getItem('menu')
    const flag = JSON.parse(menu)
    if (!flag) return '/login'
  }
})
export default router
