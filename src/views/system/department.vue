<template>
  <div>
    <div>我没有缓存</div>
    <el-input v-model="value"></el-input>s
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<style scoped>

</style>
