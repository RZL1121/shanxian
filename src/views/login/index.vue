<template>

  <div class="login-container" :style="note" >
    <div class="titles">
       <div class="logobx">
            <img src="../../assets/lg.png">
       </div>
       <div class="wd">单县公安执法管理平台</div>

    </div>
    <div class="box">
      <div class="back" :style="formleft">
      </div>
    <el-form ref="loginForm" :model="loginForm"  class="login-form" auto-complete="on" label-position="left"  style="width:40%">
      <div class="title-container">
        <h3 class="title"></h3>
      </div>
             <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入账号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
            placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-button :loading="loading" type="primary"  @click.native.prevent="handleLogin" class="sub">登录</el-button>
    </el-form>
 
  </div>
</div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('请输入您的帐号'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 0) {
    //     callback(new Error('请输入您的密码'))
    //   } else {
    //     callback()
    //   }
    // }
    return {

        note: {
        backgroundImage: "url(" + require("../../assets/bac.png") + ")",
        backgroundRepeat: "no-repeat",
        },
        formleft: {
        backgroundImage: "url(" + require("../../assets/from.png") + ")",
        backgroundRepeat: "no-repeat",
        },
        notes: {
        backgroundImage: "url(" + require("../../assets/from.png") + ")",
        backgroundRepeat: "no-repeat",
        },

      loginForm: {
        username: '',
        password: ''
      },
      // loginRules: {
      //   username: [{ required: true, trigger: 'blur', validator: validateUsername }],
      //   password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      // },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container .login-form{
  height:100%;
  float: left;
  padding-top:10%;
}

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    border:none;
    input {
      background: #fff;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    border-radius: 5px;
    color: #fff;
  }
}

</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    // padding: 160px 35px 0;
    // margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.titles{
  width:630px;
  min-width:630px;
  height:80px;
  margin:0 auto;
  margin-top:80px;
}
.logobx{
  width:80px;
  height:100%;
  float: left;
  img{
    width:100%;
    height:100%
  }
}
.wd{

  height:100%;
  font-size:50px;
  color:#fff;
  float:left;
  line-height: 80px;
  margin-left: 50px;

}
.box{
  width:1080px;
  min-width:1080px;
  height:560px;
  margin:0 auto;
  margin-top:100px;
  background:#ffff;
  border-radius:30px;
}
.sub{
  width:80%;
  border-radius:20px;
  height:60px;
  margin:0 auto;
  margin-left:10%;
  margin-top:10%;
  background:rgb(69,97,207)
}
.el-button{
      font-weight: 600;
      font-size: 20px;
}
.back{
  width:55%;
  height:68%;
  margin-left:2%;
  float: left;
  margin-top:10%;
}
/deep/ .el-input__inner{
  border:none;
  border-bottom:1px solid #DCDFE6;
}
</style>
