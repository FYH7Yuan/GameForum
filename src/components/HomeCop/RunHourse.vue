<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in runImg" :key="item.id">
      <img :src="item.imgUrl" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__container {
  position: relative;
  height: 380px !important;
}
.el-carousel__item img {
  width: 100%;
min-height: 380px;
  min-width: 1400px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  name: "RunHourse",
  data: function() {
    return {
      runImg: [
        {
          id: `001`,
          imgUrl:"https://static.iyingdi.cn/common/2020/04/24/b4547812-03c9-41ac-8891-4391e31c0cf2.jpg"
        },
        {
          id: `002`,
          imgUrl: `https://wspic.iyingdi.cn/common/2020/04/26/fd00a540-3596-45c2-b40a-b0407925bae1.jpg`
        },
        {
          id: `003`,
          imgUrl: `https://static.iyingdi.cn/common/2020/04/24/b4547812-03c9-41ac-8891-4391e31c0cf2.jpg`
        }
      ]
    };
  }
};
</script>
