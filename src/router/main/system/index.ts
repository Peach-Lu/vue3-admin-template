export default [
  {
    path: '/system/user',
    name: 'user',
    component: () => import('@/views/system/user.vue')
  },
  {
    path: '/system/department',
    name: 'department',
    component: () => import('@/views/system/department.vue')
  },
  {
    path: '/system/menu',
    name: 'menu',
    component: () => import('@/views/system/menu.vue')
  },
  {
    path: '/system/user/create',
    name: 'createUser',
    component: () => import('@/views/system/userChildren/createUser.vue')
  },
  {
    path: '/system/user/update',
    name: 'updateUser',
    component: () => import('@/views/system/userChildren/updateUser.vue')
  },
  {
    path: '/system/role',
    name: 'role',
    component: () => import('@/views/system/role.vue')
  }
]
