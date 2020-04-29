
  <style>
    /* .v-enter-active,.v-leave-active{
        transition:all 2s;
    }
    .v-enter,.v-leave-to{
        margin-left: 100px;
    }
    .v-enter-to,.v-leave{
        margin-left:0px;
    } */
    .v-enter-active,.v-leave-active{
      transition:all 2s;
    }
    .v-enter,.v-leave-to{
      margin-left: 550px;
    }
    .v-enter-to,.v-leave{
      margin-left:0px;
    }
  </style>



<template>

<div id="app">
  <button @click="toggle">显示/隐藏</button><br>
  <!-- <transition > -->
  <transition >
    <span class="show" v-show="isshow">it 传说</span>
  </transition>
</div>

</template>



  <script>
    export default {
      data(){
        return{
          isshow:false
        }


      },
      methods:{
        toggle:function(){
          this.isshow = !this.isshow;
        }
      }
    }
  </script>

