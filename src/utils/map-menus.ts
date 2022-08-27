import allRoute from '@/router/allRoute'
export const mapMenusToRoutes = (userMenu: any) => {
  // 先定义一个空数组
  const routes: any = []
  const _recurseGetRoute = (userMenu: any) => {
    for (const menu of userMenu) {
      const route = allRoute.find(item => item.path === menu.url)
      if (route) routes.push(route)
    }
  }
  _recurseGetRoute(userMenu)
  return routes
}
