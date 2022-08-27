import { createStore } from 'vuex'
import { IRootState } from './type'
import Localcache from '@/utils/cache'
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
      state.userMenu = userMenu
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
    }
  },
  modules: {}
})
