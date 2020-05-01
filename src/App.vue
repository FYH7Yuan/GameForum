<template>
  <div id="app">
    <div class="header">
      <ul class="nav">
        <div class="header-left">
          <router-link tag="li" to="/">
            <img class="logo-img" src="@/assets/img/logo-white.png" alt="logo" />
          </router-link>
        </div>
        <div class="header-middle">
          <router-link
            tag="li"
            to="/overwatch"
            @mouseenter.native="enter"
            @mouseleave.native="leave"
            :class="{ active: active == 1 ? true : false }"
            data-index="1"
          >守望先锋</router-link>

          <router-link
            tag="li"
            to="/Communication"
            @mouseenter.native="enter"
            @mouseleave.native="leave"
            :class="{ active: active == 2 ? true : false }"
            data-index="2"
          >Apex英雄</router-link>
          <router-link
            tag="li"
            to="/Personalcenter"
            @mouseenter.native="enter"
            @mouseleave.native="leave"
            :class="{ active: active == 3 ? true : false }"
            data-index="3"
          >绝地求生</router-link>
          <router-link
            tag="li"
            to="/list"
            @mouseenter.native="enter"
            @mouseleave.native="leave"
            :class="{ active: active == 4 ? true : false }"
            data-index="4"
          >个人中心</router-link>
        </div>
        <div class="header-right">
          <router-link tag="li" to="/Register">注册</router-link>

          <li @click="showLogin">登陆</li>
        </div>
        <!--        <div class="header-right" v-show="userNamee">-->
        <!--          <li>欢迎</li>-->
        <!--        </div>-->
      </ul>
    </div>

    <div class="home">
      <div class="header-navi">
        <SecondHeader />
      </div>
    </div>

    <router-view></router-view>

    <div class="footer">
      <div class="footer-q">
        <div class="footer-qone">
          <p>
            <a href>网页简介</a>
            <span>|</span>
            <a href>公司背景</a>
            <span>|</span>
            <a href>网站导航</a>
            <span>|</span>
            <a href>客服电话</a>
            <span>|</span>
            <a href>帮助中心</a>
            <span>|</span>
            <a href>作者求助</a>
          </p>
        </div>
        <div class="footer-qtwo">
          <p>
            个人版权所有©2020-
            <span id="j-year">2020</span>
            &nbsp;&nbsp;网络出版服务许可证（总）网出证（粤）字第xxx号
            &nbsp;&nbsp;信息网络传播视听节目许可证号00000000
            &nbsp;&nbsp;增值电信业务经营许可证 00-00000000
          </p>
        </div>
        <div class="footer-qthree"></div>
        <div class="footer-qfour">违法和不良信息举报电话：010-82558163</div>
      </div>
    </div>
    <m-login />
  </div>
</template>
<script>
import SecondHeader from "@/components/SecondHeader";
import MLogin from "@/components/Login";
export default {
  name: "Personalcenter",
  components: {
    SecondHeader,
    MLogin
  },
  data() {
    return {
      active: -1,
      show: null,
      isShowLogin:false
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    enter(e) {
      const index = e.target.dataset.index;
      this.active = index;
    },
    leave() {
      this.active = -1;
    },
    showLogin(){
      this.$store.state.isShowLogin = true;
    }
  }
};
// document.addEventListener('DOMContentLoaded', () => {
//   let fontSize = window.innerWidth / 10
//   fontSize = fontSize > 50 ? 50 : fontSize
//   const html = document.querySelector('html')
//   html.style.fontSize = fontSize + 'px'
// })
</script>
<style lang="scss">
@import "./assets/styles/global.scss";
$seaBlue: #3086f2;
* {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  width: 100%;
}

#app {
  min-width: 950px;
}
.home {
  width: 980px;
  margin: 0 auto;
  margin-bottom: 12px;
}
.logo-img {
  width: 120px;
  position: relative;
  top: -20px;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #0a060a;
  line-height: 80px;

  padding-bottom: 2px;
  color: #fff;
}

.nav {
  width: 1200px;
  height: 80px;

  margin: 0 auto;
  div {
    display: flex;
    float: left;
  }
  .header-left {
    margin: 0px 73px 0px 17px;
    cursor: pointer;
    li {
      display: flex;
      float: left;
    }
  }
  .header-right {
    display: flex;
    float: right;
    /*border: 1px solid #3086f2;*/

    margin: 20px 0px 15px 0px;
    line-height: 40px;
    font-size: 14px;
    width: 150px;

    box-sizing: border-box;
    li {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      -webkit-transition: 0.1s;
      transition: 0.1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    li:first-child {
      color: #aaa;
      background-color: #fff;
      border-color: #fff;
      margin-right: 20px;
    }
    li:last-child {
      color: #fff;
      background-color: $seaBlue;
      border-color: $seaBlue;
    }
  }
}

.logo {
  color: black;
  // font-size: 25px;
  // padding: 0 0 0 20px;
  cursor: pointer;
}

.header-right li {
  /*display: inline-block;*/
  /*text-align: center;*/
  /*width: 92px;*/
  /*height: 40px;*/
  /*color: #248aff;*/
}

.header-middle {
  li {
    margin: 0 38px;
    cursor: pointer;

    &::after {
      position: relative;
      top: -10px;
      content: "";
      display: block;
      transition: all 0.8s;
      height: 3px;
      width: 0px;
      left: -15px;
      border-bottom: 3px solid #f7931e;
      border-radius: 3px;
    }
    &.active::after {
      width: 100px;
    }
  }
}

.header-middle li.router-link-active {
  /*color: #3086f2;*/
  /*border-bottom: 2px #3086f2 solid;*/
}

.view {
  padding: 50px 200px;
}

.router-link-exact-active {
  color: #3086f2;
  font-weight: bold;
}

.footer {
  z-index: 300;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  /* margin-top: 40px; */
  width: 100%;
}

.footer-q {
  width: 980px;
  margin: 0 auto;
  padding: 40px 0 50px;
}

.footer-qone {
  white-space: nowrap;
  text-align: center;
}

.footer-qone p {
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
}

.footer-qone span {
  margin: 0 6px;
  color: #ccc;
}

.footer-qtwo {
  clear: both;
  padding: 18px 0 0;
  font-size: 12px;
}

.footer-qtwo p {
  text-align: center;
  color: #888;
}

.footer-qthree {
  width: 980px;
  height: 0px;
  border-bottom: 1.5px solid rgb(27, 23, 23);
  opacity: 0.1;
  padding-top: 32px;
}

.footer-qfour {
  text-align: center;
  font-size: 14px;
  height: 20px;
  padding-top: 32px;
  opacity: 0.6;
  margin: 0 auto;
}
</style>
