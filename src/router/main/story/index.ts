export default [
  {
    path: '/story/chat',
    name: 'chat',
    component: () => import('@/views/story/chat.vue')
  },
  {
    path: '/story/list',
    name: 'list',
    component: () => import('@/views/story/list.vue')
  }
]
