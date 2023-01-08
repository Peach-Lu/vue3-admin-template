<template>
  <el-container>
    <el-container>
      <el-aside :width="width > 900 ? '200px' : '60px'" class="aside">
        <navMenu></navMenu>
      </el-aside>
      <el-main>
        {{ width }}
        {{ height }}
        <el-header style="padding: 0" height="auto">
          {{ windowbranck }}
          <navHeader></navHeader>
        </el-header>
        <router-view v-slot="{ Component }">
          <transition name="fade-slide">
            <!-- fade-slide -->
            <!-- slide-fade -->
            <!-- include 代表路由name -->
            <keep-alive :include="['dashboard', 'list']" :max="15">
              <component :is="Component" class="view" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import navMenu from '@/components/nav-menu.vue'
import navHeader from '@/components/nav-header.vue'
import windowbranck from '@/utils/branckOption'
// import { useBreakpoints } from '@vueuse/core'

import {
  useWindowSize,
  useBreakpoints
  // breakpointsTailwind
} from '@vueuse/core'

const { width, height } = useWindowSize()
// const breakpoints = useBreakpoints({
//   tablet: 640,
//   sm: 750,
//   laptop: 1024,
//   desktop: 1280
// })

const breakpoints = useBreakpoints({
  phone: 720,
  tablet: 940,
  laptop: 1280,
  desktop: 1500
})
// const breakpoints: any = useBreakpoints(breakpointsTailwind)
/** 电脑设备 */
const isPC = breakpoints.greater('laptop')
console.log('isPC', isPC.value)
/** 平板设备 */
const isTablet = breakpoints.between('tablet', 'laptop')
console.log('isTablet', isTablet.value)

/** 大尺寸手机设备 */
const isMobile = breakpoints.smaller('tablet')
console.log('isMobile', isMobile.value)

/** 中小尺寸手机设备 */
const isPhone = breakpoints.smaller('phone')
console.log('phone', isPhone.value)
</script>

<style scoped>
.aside {
  transition: all 0.4s;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(30vh);
}

/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.view {
  background: #d0d0d0;
  height: calc(100% - 69px);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.72);
}
</style>
