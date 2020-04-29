<template>
  <Scroll >
  <div class="bakmod">

    <div class="_homeTop">
      <run-hourse/>
    </div>
    <div class="home " style="margin: 0 auto;">

      <div class="_homeMiddle">
        <div class="_middleLeft">
            <forum-file/>
        </div>
        <div class="_middleRight">
            <other-file/>
        </div>
      </div>

    </div>

  </div>
  </Scroll>
</template>
<script>
  import RunHourse from "../components/HomeCop/RunHourse";
  import ForumFile from "../components/HomeCop/ForumFile"
  import Scroll from "../components/Scroll";
  import OtherFile from "../components/HomeCop/OtherFile";
  export default {
    components: {
      RunHourse,
      ForumFile,
      Scroll,
        OtherFile,
    },
    data() {
      return {
        active: -1,
        show: null
      };
    },
  }
</script>


<style lang="scss" >
  .bakmod{
    background-color: #fbfbfb;
    height: 100%;
    width: 100%;
  }
  .home{
    width: 1260px;
    margin: 0 auto;
    margin-bottom: 12px;
  }
  ._homeMiddle{
    margin-top: 40px !important;
    zoom: 1;
    &:after {
      display: block;
      content: '';
      clear: both;
      height: 0;
      overflow: hidden
    }
    ._middleLeft{
      float: left;
      width: 800px;

      }
    ._middleRight{
      position: relative;
      float: right;
      width: 440px;

      }
    margin-top: 40px !important;
    zoom: 1;
  }


</style>
