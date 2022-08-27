<template>
  <div class="login">
    <el-card class="login-form">
      <el-form :model="form">
        <el-form-item label="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="form.password" />
        </el-form-item>
      </el-form>
      <el-button type="primary" class="login-btn" @click="handleClick"
        >登录</el-button
      >
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const form = reactive({
  username: "Peach",
  password: "123456",
});
function handleClick() {
  router.push({
    path: "/home",
  });
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .login-form {
    width: 330px;
    padding: 20px 50px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
