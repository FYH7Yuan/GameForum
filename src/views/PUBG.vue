<template>
  <div>
    <div class="_homeTop">
      <run-hourse />
    </div>
    <div class="home " style="margin: 0 auto;">
      <div class="_homeMiddle">
        <div class="_middleLeft">
            <ul>
                <li><a href="">标签</a></li>
                <li><a href="">社区</a></li>
                <div class="sendText" >
                    <a href="" class="_Text">＋发帖 </a>
                    <div class="TextDetail">
                        <a href="">帖子类型1</a>
                        <a href="">帖子类型2</a>
                        <a href="">帖子类型3</a>
                        <a href="">帖子类型4</a>
                        <router-link tag="a" to="/contribute" href="">帖子类型5</router-link>
                    </div>
                </div>
            </ul>
          <forum-file />
        </div>
        <div class="_middleRight">
          <other-file />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RunHourse from "../components/HomeCop/RunHourse";
import ForumFile from "../components/HomeCop/ForumFile";
// import contribute from "./contribute";
import OtherFile from "../components/HomeCop/OtherFile";
export default {
  components: {
    RunHourse,
    ForumFile,
    OtherFile,
    // contribute,
  },
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
    ._middleLeft{
        ul{
            position: relative;
            margin-top: 20px;
            border-bottom: 1px solid #d8d8d8;
            padding-bottom: 10px;
            li{
                cursor: pointer;
                display: inline-block;
                margin-right: 20px;
                color: #000;
                font-size: 14px;
                color: #787878;
                a{
                    color: inherit;
                }
            }
            .sendText{
                position: absolute;
                top: 0px;
                right: 2px;
                ._Text{
                    //position: absolute;
                    display: block;
                    right: 2px;
                    background: #37f;
                    box-shadow: 0 8px 12px 2px rgba(0,0,0,.04);
                    border-radius: 16px;
                    color: #fff;
                    font-size: 14px;
                    width: 64px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    &:hover +.TextDetail{
                        opacity: 1;
                    }
                }
                .TextDetail{
                    position: absolute;
                    top: 25px;
                    right: -35px;
                    width: 150px;
                    text-align: center;
                    background: #fff;
                    box-shadow: 0 0 10px 0 rgba(0,0,0,.14);
                    border-radius: 5px;
                    opacity: 0;
                    z-index: 1;
                    transition: .3s all;
                    &:hover{
                        opacity: 1;
                    }
                    a{
                        display: block;
                        padding: 10px 30px;
                        font-size: 16px;
                        color: #7ea8fb;
                        &:hover{
                            background-color: cornflowerblue;
                        }

                    }
                }
            }
        }
    }
</style>
