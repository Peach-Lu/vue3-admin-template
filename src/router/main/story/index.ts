export default [
  {
    path: '/main/story/chat',
    name: 'chat',
    component: () => import('@/views/story/chat.vue')
  },
  {
    path: '/main/story/list',
    name: 'list',
    component: () => import('@/views/story/list.vue')
  }
]
