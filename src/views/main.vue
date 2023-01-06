<template>
  <el-container>
    <el-container>
      <el-aside width="200px">
        <navMenu></navMenu>
      </el-aside>
      <el-main>
        <el-header style="padding: 0" height="auto">
          <navHeader></navHeader>
        </el-header>
        <router-view v-slot="{ Component }">
          <transition>
            <!-- include 代表路由name -->
            <keep-alive :include="['dashboard', 'list']" :max="15">
              <component :is="Component" />
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
</script>

<style scoped>

</style>
