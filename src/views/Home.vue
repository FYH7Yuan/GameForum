<!--  -->
<template>
  <div class="home">
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel height="400px">
        <el-carousel-item class="banner-item" v-for="(item,index) in bannerArr" :key="index">
          <img class="banner-img" :src="item.imgUrl" alt />
          <img class="banner-logo" :src="item.logoImg" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="welcome">
      <p class="welcome-title">WELCOME！</p>欢迎来到FPS资料站，在这里你可以了解到几款热门FPS游戏相关的新闻，故事，观看玩家集锦以及攻略。Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas optio illum quaerat aut dicta, magni aliquam, dolor et nihil labore porro quas voluptatum architecto possimus iste sunt ducimus laudantium suscipit voluptatem corrupti reiciendis? Unde quae doloribus eaque quos temporibus animi consequatur, explicabo soluta ex amet commodi odio quod expedita cumque quia officia voluptatem tempore fugit nobis quam minima ea quo.
    </div>
    <division></division>
    <div class="game-cards">
      <el-row :gutter="100">
        <el-col :span="8" v-for="(item,index) in cardArr" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.imgUrl" class="image size" />
            <div class="card-title">
              <span>{{item.title}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="introduce">
      <el-row>
        <h1></h1>
      </el-row>
    </div>
    <m-news :news="news"></m-news>
  </div>
</template>

<script>
import Division from "@/components/Division";
import MNews from "@/components/News.vue";
export default {
  components: {
    Division,
    MNews
  },
  data() {
    return {
      bannerArr: [
        {
          imgUrl:
            "https://overwatch.nosdn.127.net/2/media/screenshots/Genji04.jpg",
          title: "守望先锋",
          logoImg:
            "https://overwatch.nosdn.127.net/1/assets/img/pages/home/logo_new_0321.png"
        },
        {
          imgUrl:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-media-team-br-16x9.jpg.adapt.crop16x9.1455w.jpg",
          title: "Apex英雄",
          logoImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/tw/apex-hero-large-light-logo-cn.svg"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584464436983&di=56b266bfbbf33646c7f9ba26fce8e63b&imgtype=0&src=http%3A%2F%2Fkanfaimage.oss-cn-beijing.aliyuncs.com%2F20180419%2Feditor_152414513568441.jpg",
          title: "绝地求生",
          logoImg:
            "https://game.gtimg.cn/images/pubg/act/a20171114feature/logo_b.png"
        }
      ],
      cardArr: [
        {
          imgUrl:
            "https://overwatch.nosdn.127.net/2/media/screenshots/wrecking-ball-screenshot-04-big.jpg",
          title: "守望先锋"
        },
        {
          imgUrl:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-grid-tile-about-explore-more-legends.jpg.adapt.crop16x9.652w.jpg",
          title: "Apex英雄"
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584464520140&di=07c343e2deab080347be52cd5de9afa4&imgtype=0&src=http%3A%2F%2Fclubimg.club.vmall.com%2Fdata%2Fattachment%2Fforum%2F201904%2F04%2F2010377wekclwt96lex82g.jpg",
          title: "绝地求生"
        }
      ],
      news: {
        title: "今晚老八请东少吃大餐",
        cover:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587469224217&di=20b058733c8975dc4e47eac5ebde08e7&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-c9e49f40deac2a2958ac2a2786e293a1_b.jpg",
        author: "老八",
        content:
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, nesciunt optio neque hic culpa vel amet reiciendis repellat tempora doloremque repellendus. Iusto dignissimos laudantium rerum, quia assumenda doloribus quasi. Commodi soluta dolorum vitae neque et eveniet quisquam id numquam nihil! Tenetur nostrum nulla repudiandae sapiente at, optio fuga reprehenderit veniam non earum dolores ullam dolore asperiores illum, provident magni ea error commodi, ut facilis laboriosam? Eum molestiae voluptates aut officiis, eaque quae molestias quasi sunt iure excepturi impedit consectetur veritatis ad, maiores illum nemo accusantium illo, asperiores earum quibusdam id esse! Iste recusandae sit mollitia quos, necessitatibus neque commodi labore?"
      }
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
<style lang='scss' scoped>
$strangeRed: #da292a;
.home {
  position: relative;
  width: 80%;
  margin: 0 10%;
  .block {
    padding-top: 30px;
    width: 800px;
    .banner-item {
      .banner-img {
        width: 100%;
        height: 100%;
        background-size: 100%;
      }
      .banner-logo {
        position: absolute;
        width: 400px;
        height: 180px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
  .welcome {
    font-family: "microsoft yahei", Arial, sans-serif;
    position: absolute;
    top: 30px;
    right: 0;
    width: 450px;
    height: 400px;
    font-size: 18px;
    .welcome-title {
      font-size: 64px;
      color: $strangeRed;
    }
  }
  .game-cards {
    img {
      &.size {
        width: 100%;
        height: auto;
      }
    }
    .card-title {
      padding: 10px 0;
      text-align: center;
    }
  }
}
</style>