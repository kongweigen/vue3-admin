<template>
  <div class="bg">
    <el-form label-width="60px">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userLogin } from '@/api/user'
import { useRouter } from 'vue-router'
const router = useRouter()
type User = {
  name: string
  password: string
}

const loginForm = ref({} as User)

const login = async () => {
  await userLogin(loginForm.value.name, loginForm.value.password)
  router.push('/home')
}
</script>

<style lang="scss" scope>
.bg {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: palegoldenrod;
  background-image: url('../../assets/images/bg.png');
  background-size: 100% 100%;
  .el-form {
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    width: 400px;
  }
}
</style>
