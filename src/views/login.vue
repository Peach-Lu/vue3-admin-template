<template>
  <div class="login">
    <el-card class="login-form">
      username : admin / demo
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
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { login } from '@/mock/api/login'
const router = useRouter()
const store = useStore()
const form = reactive({
  username: 'admin',
  password: '123456'
})

const handleClick = async () => {
  const res = await login(form.username, form.password)
  if (res) store.dispatch('login', res)
  router.push({
    path: '/main/analysis/overview'
  })
}

// function handleClick() {
//   router.push({
//     path: '/main'
//   })
// }
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
