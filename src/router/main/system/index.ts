export default [
  {
    path: '/main/system/user',
    name: 'user',
    component: () => import('@/views/system/user.vue')
  },
  {
    path: '/main/system/department',
    name: 'department',
    component: () => import('@/views/system/department.vue')
  },
  {
    path: '/main/system/menu',
    name: 'menu',
    component: () => import('@/views/system/menu.vue')
  },
  {
    path: '/main/system/role',
    name: 'role',
    component: () => import('@/views/system/role.vue')
  }
]
