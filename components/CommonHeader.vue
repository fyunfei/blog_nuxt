<template>
  <nav class="common-nav">
    <div class="common-nav-container">
      <div class="logo">我的博客</div>
      <div class="nav-list">
        <nuxt-link class="item-common" to="/">
          <i
            class="iconfont"
            :class="{
              'icon-home-select': selectedList.home,
              'icon-home': !selectedList.home,
            }"
          ></i>
        </nuxt-link>
        <nuxt-link class="item-common" to="/camera">
          <i
            class="iconfont"
            :class="{
              'icon-camera-select': selectedList.camera,
              'icon-camera': !selectedList.camera,
            }"
          ></i>
        </nuxt-link>
        <div class="profile">
          <img
            src="//mirror-gold-cdn.xitu.io/16ba2bc5a24bf1fc0a3?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
            alt=""
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      selectedList: {
        home: false,
        camera: false,
      },
    }
  },
  watch: {
    $route(val) {
      this.judgeRoute(val)
    },
  },
  created() {
    this.judgeRoute(this.$route)
  },
  methods: {
    judgeRoute($route) {
      switch ($route.path) {
        case '/':
          this.selectedList.home = true
          this.selectedList.camera = false
          break
        case '/camera':
          this.selectedList.camera = true
          this.selectedList.home = false
          break
      }
    },
    // @todo 增加顶部导航栏滚动效果
    judgeScrollTop() {
      /* const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop */
    },
  },
}
</script>

<style lang="scss" scoped>
.common-nav {
  height: 54px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  // @todo
  /* &-shadow {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  } */
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 975px;
    width: 100%;
    padding: 0 20px;
    .logo {
      font-size: 25px;
    }
    .nav-list {
      display: flex;
      align-items: center;
      .profile {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
      }
      .item-common {
        margin-right: 10px;
        color: #333;
      }
    }
  }
  .iconfont {
    font-size: 35px;
  }
}
</style>
