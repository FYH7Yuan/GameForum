<!--  -->
<template>
  <div class="wrapper" v-if="isShow">
    <div class="mask" @click="closeLogin"></div>
    <div class="pop">
      <division style="margin-top:40px"></division>
      <p v-if="nameErr.flag" class="toast" style="top:150px">{{nameErr.data}}</p>
      <el-input class="userInput input" placeholder="请输入用户名4-15位" v-model="username" clearable></el-input>
      <p v-if="pwdErr.flag" class="toast" style="top:240px">{{pwdErr.data}}</p>
      <el-input
        class="pwdInput input"
        placeholder="请输入密码 字母+数字组合"
        v-model="password"
        clearable
        show-password
      ></el-input>
      <button class="submit" @click="submitData">登陆</button>
    </div>
  </div>
</template>

<script>
import Division from "@/components/Division";
import axios from "axios";
export default {
  components: {
    Division
  },
  data() {
    return {
      username: "",
      password: "",
      nameErr: { flag: false },
      pwdErr: { flag: false }
    };
  },
  computed: {
    isShow: {
      get() {
        return this.$store.state.isShowLogin;
      },
      set() {}
    }
  },
  //监控data中的数据变化
  watch: {},
  methods: {
    closeLogin() {
      this.$store.state.isShowLogin = false;
    },
    submitData() {
      const { username, password } = this;
      axios
        .post("http://localhost:2020/api/login", {
          username,
          password
        })
        .then(res => {
          const data = res.data.msg;
          console.log(data)
          if (data === "用户名不存在") {
            this.reset();
            this.nameErr = {
              flag: true,
              data
            };
          } else if (data === "用户名或密码错误") {
            this.reset();
            this.pwdErr = {
              flag: true,
              data
            };
          } else {
            this.reset();
            this.$store.state.isShowLogin = false;
            alert('登陆成功')
            this.$router.push({
              path: "/"
            });
          }
        });
    },
    reset() {
      this.nameErr = {};
      this.pwdErr = {};
    }
  }
};
</script>
<style lang='scss' scoped>
$strangeRed: #da292a;
$seaBlue: #3086f2;
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 997;
  height: 100%;
  width: 100%;
  // background-color: rgba(0, 0, 0, 0.5);
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 998;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .pop /deep/ {
    z-index: 999;
    height: 500px;
    width: 500px;
    position: fixed;
    left: calc(50% - 250px);
    top: calc(50% - 250px);
    background-color: #fff;
    border-radius: 20px;
    text-align: center;
    .toast {
      position: absolute;
      color: $strangeRed;
      font-size: 12px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    .input {
      width: 300px;
      margin-top: 50px;
      .el-input__inner {
        border-color: #000;
      }
      .el-input__inner:focus {
        border: 1px solid $seaBlue;
        outline: 0;
      }
    }
    .submit {
      margin-top: 50px;
      height: 40px;
      width: 300px;
      border: none;
      border-radius: 4px;
      background-color: $seaBlue;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>