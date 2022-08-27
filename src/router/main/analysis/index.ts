export default [
  {
    path: '/main/analysis/overview',
    name: 'overview',
    component: () => import('@/views/analysis/overview.vue')
  },
  {
    path: '/main/analysis/dashboard',
    name: 'dashboard',
    component: () => import('@/views/analysis/dashboard.vue')
  }
]
