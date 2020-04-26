<!--  -->
<template>
  <el-container class="m-home">
    <el-header class="el-reset header" style="height:100px">
      <m-header />
    </el-header>
    <el-main class="el-reset main">
      <router-view />
    </el-main>
    <el-footer class="el-reset">
      <m-footer></m-footer>
    </el-footer>
  </el-container>
</template>

<script>
import MHeader from "@/views/Header.vue";
import MFooter from "@/views/Footer.vue";
export default {
  components: {
    MHeader,
    MFooter,
  },
  data() {
    return {
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss'>
$blue: #0084ff;
$blue-darker: darken($blue, 5);
$bg-gray: #343b41;

.m-home {
  .header {
    height: 100px !important;
    width: 100%;
    background-color: #000;
    position: relative;
    .logo {
      height: 100px;
      width: 100px;
      color: #fff;
      cursor: pointer;
      margin-left: 160px;
      .logo-img {
        width: 100%;
        height: 100%;
      }
    }
    .menulist {
      line-height: 100px;
      li {
        display: inline-block;
        padding: 0 10px;
        margin: 0 20px;
        color: #fff;
        cursor: pointer;
        position: relative;
        &::after {
          position: absolute;
          content: "";
          display: block;
          transition: all 0.8s;
          height: 3px;
          width: 0px;
          bottom: 10px;
          left: -5px;
          border-bottom: 3px solid #f7931e;
          border-radius: 3px;
        }
        &.active::after {
          width: 100px;
        }
      }
    }
    .info {
      line-height: 100px;
      height: 100px;
      .register {
        margin-left: 150px;
        margin-right: 20px;
      }
      .login{
        background-color: #DA292A;
        border-color: #DA292A;
      }
    }
  }
  .main {
    background-color: #e6e2d9;
  }
  .el-reset {
    padding: 0;
  }
  .footer {
    height: 100px;
    position: relative;
    background-color: #000;
    text-align: center;
    .copyright {
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}
</style>