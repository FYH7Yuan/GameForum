<template>
  <transition>
    <div class="_headerC" v-show="this.$store.state.TitleVisible">
      <div class="_headerCo">
        <p>
          <a href>1</a>
          <a href>2</a>
          <a href>3</a>
          <a href>4</a>
          <a href>5</a>
          <a href>6</a>
          <a href>7</a>
          <a href>8</a>
          <a href>9</a>
          <a href>10</a>
        </p>
      </div>
      <div class="_headerCo">
        <p>
          <a href>1</a>
          <a href>2</a>
          <a href>3</a>
          <a href>4</a>
          <a href>5</a>
          <a href>6</a>
          <a href>7</a>
          <a href>8</a>
          <a href>9</a>
          <a href>10</a>
        </p>
      </div>
      <div class="_headerCo">
        <p>
          <a href>1</a>
          <a href>2</a>
          <a href>3</a>
          <a href>4</a>
          <a href>5</a>
          <a href>6</a>
          <a href>7</a>
          <a href>8</a>
          <a href>9</a>
          <a href>10</a>
        </p>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1.3s;
}
.v-enter,
.v-leave-to {
  height: 0px;
}
.v-enter-to,
.v-leave {
  height: 114px;
}

._headerCo p {
  box-sizing: border-box;
  text-align: center;
  a {
    text-decoration: none;
    color: #333;
    outline: none;
    display: inline-block;
    width: 98px;
    height: 38px;
    line-height: 38px;
    margin: auto;
    &:hover {
      color: #248aff;
      background-color: #999999;
    }
  }
}
</style>
