<!--  -->
<template>
  <div class="division">
    <div class="line line-left"></div>
    <div class="line line-right"></div>
    <img class="divisionLogo" src="@/assets/img/logo-black-big.png" />
  </div>
</template>

<script>
export default {
  name: "Division",
  components: {},
  data() {
    return {};
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
<style lang="scss" scoped>
.division {
  height: 80px;
  width: 100%;
  position: relative;
  line-height: center;
  text-align: center;
  box-sizing: border-box;
  .line {
    position: absolute;
    top: 40px;
    width: 40%;
    border: 1px solid black;
    background-color: #000;
    border-radius: 50%;
    &-left {
      left: 0;
    }
    &-right {
      right: 0;
    }
  }
  .divisionLogo {
    // height: 80px;
    width: 120px;
    padding: 0 20px;
  }
}
</style>
