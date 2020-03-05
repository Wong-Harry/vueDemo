<template>
  <div class="loginBox">
    <el-form>
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      console.log(this.loginForm);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../styles/mixin.scss";
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .loginBox{
    @include relative;
    height: 100vh;
    background-color: $bg;
  }
</style>
