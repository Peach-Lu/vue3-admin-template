export default [
  {
    path: '/product/category',
    name: 'category',
    component: () => import('@/views/product/category.vue')
  },
  {
    path: '/product/goods',
    name: 'goods',
    component: () => import('@/views/product/goods.vue')
  }
]
