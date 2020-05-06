<template>
  <div>
    <Scroll>
      <div class="bakmod">
        <div class="_homeTop">
          <run-hourse />
        </div>
        <div class="home " style="margin: 0 auto;">
          <div class="_homeMiddle">
            <div class="_middleLeft">
              <forum-file />
            </div>
            <div class="_middleRight">
              <other-file />
            </div>
          </div>
        </div>
      </div>
    </Scroll>
    <div class="footer">
      <div class="footer-q">
        <div class="footer-qone">
          <p>
            <a href="">网页简介</a>
            <span>|</span>
            <a href="">公司背景</a>
            <span>|</span>
            <a href="">网站导航</a>
            <span>|</span>
            <a href="">客服电话</a>
            <span>|</span>
            <a href="">帮助中心</a>
            <span>|</span>
            <a href="">作者求助</a>
          </p>
        </div>
        <div class="footer-qtwo">
          <p>
            个人版权所有©2020-<span id="j-year">2020</span>
            &nbsp;&nbsp;网络出版服务许可证（总）网出证（粤）字第xxx号
            &nbsp;&nbsp;信息网络传播视听节目许可证号00000000
            &nbsp;&nbsp;增值电信业务经营许可证 00-00000000
          </p>
        </div>
        <div class="footer-qthree"></div>
        <div class="footer-qfour">违法和不良信息举报电话：010-82558163</div>
      </div>
    </div>
  </div>
</template>
<script>
import RunHourse from "../components/HomeCop/RunHourse";
import Scroll from "../components/Scroll";
import ForumFile from "../components/HomeCop/ForumFile";

import OtherFile from "../components/HomeCop/OtherFile";
export default {
  components: {
    RunHourse,
    ForumFile,
    Scroll,
    OtherFile
  },
  data() {
    return {
      active: -1,
      show: null
    };
  }
};
</script>

<style lang="scss">
.bakmod {
  background-color: #fbfbfb;
  height: 100%;
  width: 100%;
}
.home {
  width: 1260px;
  margin: 0 auto;
}
._homeMiddle {
  margin-top: 40px !important;
  zoom: 1;
  &:after {
    display: block;
    content: "";
    clear: both;
    height: 0;
    overflow: hidden;
  }
  ._middleLeft {
    float: left;
    width: 800px;
  }
  ._middleRight {
    position: relative;
    float: right;
    width: 440px;
  }
  margin-top: 40px !important;
  zoom: 1;
}
</style>
