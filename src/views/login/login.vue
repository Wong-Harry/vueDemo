<template>
  <div class="loginBox">
    <el-form
      status-icon
      :rules="loginFormFules"
      :model="loginForm"
      class="formBox"
      inline-message
      ref="loginForm"
    >
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="userName" icon="el-icon-search">
        <el-input type="text" placeholder="请输入用户名" v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="login()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from '../../utils/auth';

export default {
  data() {
    return {
      loading: false,
      loginForm: {
        userName: '',
        passWord: ''
      },
      loginFormFules: {
        userName: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入用户名'
            // validator: (rule, value, callback) => {
            //   console.log('value: ', value);
            //   if (!value) {
            //     return callback(new Error('请输入用户名'));
            //   }
            //   if (!Number(value)) {
            //     callback(new Error('请输入用户名'));
            //   } else if (value < 0 || value > 1) {
            //     callback(new Error('请输入用户名'));
            //   } else {
            //     callback();
            //   }
            // }
          }
        ],
        passWord: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      }
    };
  },
  methods: {
    login() {
      console.log(this.$refs.loginForm);
      // this.loading = true;
      this.$refs.loginForm.validate((result) => {
        console.log(result);
        if (result) {
          this.loading = true;
          setToken();
          this.$router.push({ path: '/' });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      console.log(' this.$refs: ', this.$refs);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/mixin.scss';
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.loginBox {
  @include relative;
  height: 100vh;
  background-color: $bg;
  .formBox {
    margin: 120px auto;
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    button {
      width: 100%;
    }
  }
}
</style>
