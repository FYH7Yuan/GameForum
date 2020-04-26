<!--  -->
<template>
  <el-row>
    <el-col :span="5">
      <!-- <img src="@/assets/img/logo.png" alt="logo" style="height:100px;width:100px" /> -->
      <router-link to="/" tag="div" class="logo">
        <img class="logo-img" src="@/assets/img/logo-white.png" alt />
      </router-link>
    </el-col>
    <el-col :span="12">
      <ul class="menulist">
        <!-- <router-link
          @mouseenter.native="enter"
          @mouseleave.native="leave"
          :class="{'active':active == 0 ? true:false}"
          data-index="0"
          tag="li"
          to="/"
        >首页</router-link> -->
        <router-link
          @mouseenter.native="enter"
          @mouseleave.native="leave"
          :class="{'active':active == 1 ? true:false}"
          data-index="1"
          tag="li"
          to="/overwatch"
        >守望先锋</router-link>
        <router-link
          @mouseenter.native="enter"
          @mouseleave.native="leave"
          :class="{'active':active == 2 ? true:false}"
          data-index="2"
          tag="li"
          to="/apex"
        >Apex英雄</router-link>
        <router-link
          @mouseenter.native="enter"
          @mouseleave.native="leave"
          :class="{'active':active == 3 ? true:false}"
          data-index="3"
          tag="li"
          to="/pubg"
        >绝地求生</router-link>
        <router-link
          @mouseenter.native="enter"
          @mouseleave.native="leave"
          :class="{'active':active == 4 ? true:false}"
          data-index="4"
          tag="li"
          to="/mine"
        >个人中心</router-link>
      </ul>
    </el-col>
    <el-col :span="7">
      <div class="info">
        <el-button class="register">注册</el-button>
        <el-button class="login" type="danger">登陆</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: -1,
      show: null
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
    }
  },
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
<style lang='scss' scoped>
</style>