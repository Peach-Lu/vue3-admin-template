export default [
  {
    id: 9,
    name: "商品中心",
    type: 1,
    url: "/main/product",
    icon: "el-icon-goods",
    sort: 3,
    children: [
      {
        id: 15,
        url: "/main/product/category",
        name: "商品类别",
        sort: 104,
        type: 2,

        parentId: 9,
      },
      {
        id: 16,
        url: "/main/product/goods",
        name: "商品信息",
        sort: 105,
        type: 2,
        parentId: 9,
      },
    ],
  },
  {
    id: 41,
    name: "随便聊聊",
    type: 1,
    url: "/main/story",
    icon: "el-icon-chat-line-round",
    sort: 4,
    children: [
      {
        id: 42,
        url: "/main/story/chat",
        name: "你的故事",
        sort: 108,
        type: 2,
        children: null,
        parentId: 41,
      },
      {
        id: 43,
        url: "/main/story/list",
        name: "故事列表",
        sort: 109,
        type: 2,
        children: [],
        parentId: 41,
      },
    ],
  },
];
