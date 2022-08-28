<template>
  <div class="nav-menu">
    <el-menu
      default-active="40"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#b7bdc3"
      unique-opened
      active-text-color="#0a60bd"
      background-color="#001529"
    >
      <!-- 一级菜单 -->
      <template v-for="item in menu" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon><Menu /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <!-- 二级菜单 -->
          <template v-if="item.children && item.children.length">
            <!-- 三级菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <template v-if="subItem.children && subItem.children.length">
                <el-sub-menu :index="subItem.id + ''">
                  <template #title>{{ subItem.name }}</template>
                  <template
                    v-for="subItem2 in subItem.children"
                    :key="subItem2.id"
                  >
                    <el-menu-item
                      @click="handleClickRouter(subItem2)"
                      :index="subItem2.id + ''"
                      >{{ subItem2.name }}</el-menu-item
                    >
                  </template>
                </el-sub-menu>
              </template>
              <!-- 没有children的话，显示二级菜单 -->
              <template v-else>
                <el-menu-item
                  :index="subItem.id + ''"
                  @click="handleClickRouter(subItem)"
                  >{{ subItem.name }}</el-menu-item
                >
              </template>
            </template>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const menu = computed(() => store.state.menu)
const handleOpen = () => null
const handleClose = () => null
const handleClickRouter = (item: any) => {
  console.log(item.url)
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
