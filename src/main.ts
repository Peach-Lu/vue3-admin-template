import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
// css 样式重置
import 'normalize.css'
import './assets/css/glocal.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
store.dispatch('getMenu') // vuex刷新数据丢失 重新从localStoreage获取
app.use(store)
app.use(router)
app.mount('#app')
