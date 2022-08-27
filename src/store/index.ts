import { createStore } from 'vuex'
import router from '@/router'
import { IRootState } from './type'
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
      console.log('routers', routes)
      if (routes && routes.length) {
        for (const item of routes) {
          router.addRoute('main', item)
        }
      }
      state.userMenu = routes
    }
  },
  actions: {
    login({ commit }, paylad) {
      commit('setMenu', paylad)
      commit('changeUserMenus', paylad)
      Localcache.setCache('menu', paylad)
    },
    getMenu({ commit }) {
      const menu = Localcache.getCache('menu')
      if (menu) commit('setMenu', menu)
      const userMenu = Localcache.getCache('userMenu')
      console.log('usermenu', userMenu)
      if (userMenu) commit('changeUserMenus', userMenu)
    }
  },
  modules: {}
})
