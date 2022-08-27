import allRoute from '../router/allRoute'
export const mapMenusToRoutes = (userMenu: any) => {
  // 先定义一个空数组
  const routes: any = []
  const _recurseGetRoute = (userMenu: any) => {
    console.log(allRoute)
    console.log(userMenu)
    for (const menu of userMenu) {
      const route = allRoute.find(item => item.path == menu.url)
      if (route) routes.push(route)
      if (menu.children && menu.children.length) _recurseGetRoute(menu.children)
      // if (menu.type === 2) {
      //   const route = allRoute.find(item => item.path == menu.url)
      //   if (route) routes.push(route)
      // } else {
      //   _recurseGetRoute(menu.children)
      // }
    }
  }
  _recurseGetRoute(userMenu)
  console.log('最终路由表', routes)
  return routes
}
