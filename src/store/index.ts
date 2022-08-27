import { createStore } from 'vuex'
import router from '@/router'
import { IRootState } from '@/store/type'
import Localcache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
export default createStore({
  state: <IRootState>{
    menu: [],
    userMenu: []
  },
  mutations: {
    // 保存菜单至vuex
    setMenu(state, menu: any[]) {
      state.menu = menu
    },
    changeUserMenus(state, userMenu) {
      Localcache.setCache('userMenu', userMenu)
      const routes = mapMenusToRoutes(userMenu)
      if (routes && routes.length) {
        for (const item of routes) {
          router.addRoute('main', item) // 循环遍历加入到 main children里面
        }
      }
      state.userMenu = routes
      console.log('userMenu', routes)
    },
    // 退出登录 清空数据
    logout(state) {
      state.menu = []
      state.userMenu = []
      Localcache.clearCache()
      router.push({
        path: '/login'
      })
    }
  },
  actions: {
    login({ commit }, paylad) {
      commit('setMenu', paylad)
      commit('changeUserMenus', paylad)
      Localcache.setCache('menu', paylad)
    },
    logout({ commit }) {
      commit('logout')
    },
    getMenu({ commit }) {
      const menu = Localcache.getCache('menu')
      if (menu) commit('setMenu', menu)
      const userMenu = Localcache.getCache('userMenu')
      if (userMenu) commit('changeUserMenus', userMenu)
    }
  },
  modules: {}
})
