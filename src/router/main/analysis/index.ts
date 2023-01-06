export default [
  {
    path: '/analysis/overview',
    name: 'overview',
    component: () => import('@/views/analysis/overview.vue')
  },
  {
    path: '/analysis/dashboard',
    name: 'dashboard',
    component: () => import('@/views/analysis/dashboard.vue')
  }
]
