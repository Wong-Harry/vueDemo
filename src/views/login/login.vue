<template>
  <div class="loginBox">
    <el-form
      ref="loginForm"
      status-icon
      :rules="loginFormFules"
      :model="loginForm"
      class="formBox"
      inline-message
    >
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="userName" icon="el-icon-search">
        <el-input v-model="loginForm.userName" type="text" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input v-model="loginForm.passWord" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="login()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(result => {
        console.log(result)
        if (result) {
          this.loading = true
          this.$store
            .dispatch('login', {
              loginForm: this.loginForm
            })
            .then(data => {
              console.log('data: ', data)
              this.loading = false
              if (data.result === 'success') {
                this.$router.push({ path: '/' })
              } else {
                this.$message.error('账号/密码错误')
              }
            })
            .catch(e => {
              this.loading = false
            })
          // this.loading = true
          // setToken(this.loginForm.userName).then(res => {
          //   console.log(res)
          // })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      console.log(' this.$refs: ', this.$refs)
    }
  }
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

.loginBox {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
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
