export default [
  {
    id: 38,
    name: '系统总览',
    type: 1,
    url: '/main/analysis',
    icon: 'el-icon-monitor',
    sort: 1,
    children: [
      {
        id: 39,
        url: '/main/analysis/overview',
        name: '核心技术',
        sort: 106,
        type: 2,
        children: null,
        parentId: 38
      },
      {
        id: 40,
        url: '/main/analysis/dashboard',
        name: '商品统计',
        sort: 107,
        type: 2,
        children: null,
        parentId: 38
      }
    ]
  },
  {
    id: 1,
    name: '系统管理',
    type: 1,
    url: '/main/system',
    icon: 'el-icon-setting',
    sort: 2,
    children: [
      {
        id: 2,
        url: '/main/system/user',
        name: '用户管理',
        sort: 100,
        type: 2,
        parentId: 1,
        children: [
          {
            id: 21,
            url: '/main/system/user/create',
            name: '创建用户',
            sort: 1,
            type: 3,
            parentId: 2
          },
          {
            id: 22,
            url: '/main/system/user/update',
            name: '修改用户',
            sort: 2,
            type: 3,
            parentId: 2
          }
        ]
      },
      {
        id: 3,
        url: '/main/system/department',
        name: '部门管理',
        sort: 101,
        type: 2,
        parentId: 1
      },
      {
        id: 4,
        url: '/main/system/menu',
        name: '菜单管理',
        sort: 103,
        type: 2,
        parentId: 1
      },
      {
        id: 25,
        url: '/main/system/role',
        name: '角色管理',
        sort: 102,
        type: 2,
        parentId: 1
      }
    ]
  },
  {
    id: 9,
    name: '商品中心',
    type: 1,
    url: '/main/product',
    icon: 'el-icon-goods',
    sort: 3,
    children: [
      {
        id: 15,
        url: '/main/product/category',
        name: '商品类别',
        sort: 104,
        type: 2,

        parentId: 9
      },
      {
        id: 16,
        url: '/main/product/goods',
        name: '商品信息',
        sort: 105,
        type: 2,
        parentId: 9
      }
    ]
  },
  {
    id: 41,
    name: '随便聊聊',
    type: 1,
    url: '/main/story',
    icon: 'el-icon-chat-line-round',
    sort: 4,
    children: [
      {
        id: 42,
        url: '/main/story/chat',
        name: '你的故事',
        sort: 108,
        type: 2,
        children: null,
        parentId: 41
      },
      {
        id: 43,
        url: '/main/story/list',
        name: '故事列表',
        sort: 109,
        type: 2,
        children: [],
        parentId: 41
      }
    ]
  }
]
