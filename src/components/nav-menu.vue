<template>
  <div class="nav-menu">
    <el-menu :collapse="width < 900" :default-active="activeId" class="el-menu-vertical-demo" @open="handleOpen"
      @close="handleClose" text-color="#b7bdc3" active-text-color="#0a60bd" background-color="#001529">
      <!-- 一级菜单 -->
      <template v-for="item in menu" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <Menu />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <!-- 二级菜单 -->
          <template v-if="item.children && item.children.length">
            <!-- 三级菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <template v-if="subItem.children && subItem.children.length">
                <el-sub-menu :index="subItem.id + ''">
                  <template #title>{{ subItem.name }}</template>
                  <template v-for="subItem2 in subItem.children" :key="subItem2.id">
                    <el-menu-item @click="handleClickRouter(subItem2)" :index="subItem2.id + ''">{{
                      subItem2.name
                    }}</el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
              <!-- 没有children的话，显示二级菜单 -->
              <template v-else>
                <el-menu-item :index="subItem.id + ''" @click="handleClickRouter(subItem)">{{
                  subItem.name
                }}</el-menu-item>
              </template>
            </template>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
import { computed, watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const route = useRoute()
const store = useStore()
const activeId = ref('40')
const menu = computed(() => store.state.menu)
watch(
  () => route.path,
  () => {
    console.log('menu', menu.value)
    const result = getFlatArr(menu.value).find(
      (item) => item.url === route.path
    )
    if (result && result.id) {
      activeId.value = result.id + ''
    }
  },
  {
    deep: true
  }
)
const getFlatArr = (arr) => {
  return arr.reduce((a, item) => {
    let flatArr = [...a, item]
    // 可以在此处限制各种需要的条件，在展示字段前加空格，——之类的，以及其它情况
    if (item.children && item.children.length > 0) {
      flatArr = [...flatArr, ...getFlatArr(item.children)]
    }
    return flatArr
  }, [])
}
const handleOpen = () => null
const handleClose = () => null
const handleClickRouter = (item: any) => {
  router.push({
    path: item.url
  })
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100vh;
  background-color: #001529;
}

.el-menu {
  border-right: 0;
}
</style>
