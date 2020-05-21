<template>
  <div>
    <div class="_kt">块状填充物</div>
    <div class="_kt">
      <p>Copyright 2020</p>
      <a href="http://www.beian.miit.gov.cn/">京ICP备20009530号</a>
      <p>免责声明</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  text-decoration: none;
}
._kt {
  height: 400px;
  background-color: #3086f2;
  margin-top: 20px;
  text-align: center;
  a,
  p {
    height: 20px;
    line-height: 20px;
    color: #fff;
    margin-top: 20px;
  }
  a{
      display: block;
      &:hover{
          color:#000;
      }
  }
}
</style>
