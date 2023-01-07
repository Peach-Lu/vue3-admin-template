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
          {{ breakpoints }}
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
// import { useBreakpoints } from '@vueuse/core'

import {
  useWindowSize,
  useBreakpoints,
  breakpointsTailwind
} from '@vueuse/core'

const { width, height } = useWindowSize()
// const breakpoints = useBreakpoints({
//   tablet: 640,
//   sm: 750,
//   laptop: 1024,
//   desktop: 1280
// })
const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndLarger = breakpoints.greaterOrEqual('sm') // sm and larger
const largerThanSm = breakpoints.greater('sm') // only larger than sm
const lgAndSmaller = breakpoints.smallerOrEqual('lg') // lg and smaller
const smallerThanLg = breakpoints.smaller('lg') // only smaller than lg
console.log(smAndLarger)
console.log(largerThanSm)
console.log(lgAndSmaller)
console.log(largerThanSm)
console.log(smallerThanLg)
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
