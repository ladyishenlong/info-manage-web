<template>
  <div>

    <el-card class="login-card" shadow="hover">

      <h1>信息管理系统</h1>

      <el-form :model="loginDTO">
        <el-form-item>
          <el-input placeholder="请输入用户名"
                    v-model.trim="loginDTO.account"
                    prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码"
                    v-model.trim="loginDTO.password"
                    prefix-icon="el-icon-key"
                    @keyup.enter="login"
                    show-password>
          </el-input>
        </el-form-item>
      </el-form>

      <div>
        <el-button @click="login">登录</el-button>
      </div>
    </el-card>


  </div>
</template>

<script>


export default {
  name: "login",
  methods: {
    login() {
      this.$router.push({path: "/home"})
    },
  },

  data() {

    return {
      loginDTO: {
        account: "",
        password: ""
      }

    }

  }
}
</script>

<style lang="scss" scoped>

@import "../style/color.scss";

.login-card {
  background-color: $background-color;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10%;
}


</style>