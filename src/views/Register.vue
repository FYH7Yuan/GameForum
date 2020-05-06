<!--  -->
<template>
  <div class="container" :style="{ height: clientHeight - 200 + 'px' }">
    <div class="wrapper">
      <division></division>
      <p v-if="nameErr.flag" class="toast" style="top:100px">
        {{ nameErr.data }}
      </p>
      <el-input
        class="userInput input"
        placeholder="请输入用户名4-15位"
        v-model="username"
        clearable
      ></el-input>
      <el-input
        class="pwdInput input"
        placeholder="请输入密码 字母+数字组合"
        v-model="password"
        clearable
        show-password
      ></el-input>
      <p v-if="pwdErr.flag" class="toast" style="top:260px">
        {{ pwdErr.data }}
      </p>
      <el-input
        class="cfmInput input"
        placeholder="请确认密码"
        v-model="confirmPwd"
        clearable
        show-password
      ></el-input>
      <button class="submit" @click="submitData">完 成 注 册</button>
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
      confirmPwd: "",
      clientHeight: null,
      nameErr: { flag: false },
      pwdErr: { flag: false }
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    selfAdaption() {
      const _this = this;
      setTimeout(function() {
        window.onresize = function() {
          _this.useChildCarrierPunctualityDetailTable(); //onresize时要触发的函数
        };
      }, 200);
    },
    useChildCarrierPunctualityDetailTable() {
      const h =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      this.clientHeight = h;
    },
    submitData() {
      const { username, password, confirmPwd } = this;
      axios
        .post("http://localhost:2020/api/register", {
          username,
          password,
          confirmPwd
        })
        .then(res => {
          const data = res.data.msg;
          if (data === "用户名已经存在") {
            this.reset();
            this.nameErr = {
              flag: true,
              data
            };
          } else if (data === "两次输入密码不一致") {
            this.reset();
            this.pwdErr = {
              flag: true,
              data
            };
          } else {
            this.reset();
            alert("注册成功");
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
  },
  mounted() {
    this.selfAdaption();
    const h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    this.clientHeight = h;
  }
};
</script>
<style lang="scss" scoped>
$strangeRed: #da292a;
$seaBlue: #3086f2;
.container {
  width: 100%;
  .wrapper /deep/ {
    width: 500px;
    position: relative;
    left: calc(50% - 250px);
    text-align: center;
    .input {
      width: 300px;
      margin-top: 40px;
      .el-input__inner {
        border-color: #000;
      }
      .el-input__inner:focus {
        border: 1px solid $seaBlue;
        outline: 0;
      }
    }
    .submit {
      height: 40px;
      width: 300px;
      background-color: $seaBlue;
      outline: none;
      border: 0;
      border-radius: 4px;
      color: #fff;
      margin-top: 40px;
      font-size: 16px;
      cursor: pointer;
    }
    .toast {
      position: absolute;
      color: $strangeRed;
      font-size: 12px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}
</style>
