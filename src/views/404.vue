<template>
  <div class="not-found">
    <h2>not-found 404 找不到该路径</h2>
    <el-button @click="handleBack">返回上一页</el-button>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
const handleBack = () => {
  // router.go(-1);
  router.push({
    path: "/main",
  });
};
</script>

<style scoped></style>
