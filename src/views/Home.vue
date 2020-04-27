<template>
  <div class="bakmod">
    <div class="_homeTop">
      <run-hourse/>
    </div>
    <div class="home ">

      <div class="_homeMiddle">
        <div class="_middleLeft">

        </div>
        <div class="_middleRight"></div>
      </div>

    </div>
  </div>

</template>
<script>
  import RunHourse from "../components/HomeCop/RunHourse";
  export default {
    components: {
      RunHourse,
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
  ._homeMiddle{
    margin-top: 40px !important;
    zoom: 1;
    ._middleLeft{
      float: left;
      width: 700px;
    }
    ._middleRight{
      position: relative;
      float: right;
      width: 260px;
    }
    margin-top: 40px !important;
    zoom: 1;
  }


</style>
