<template>
  <div class="item-container">
    <div class="header">全屏模式</div>
    <div class="content-image">
      <img src="../assets/登录页面.jpg" alt="" />
    </div>
    <div class="footer">
      <div class="footer-action clearfix">
        <div class="footer-common footer-like">点赞</div>
        <div class="footer-common footer-comment">评论</div>
        <div class="footer-common footer-share">分享</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.item-container {
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba($color: #222428, $alpha: 0.6);
  transition: box-shadow 300ms ease;
  &:hover {
    box-shadow: 0 0 10px rgba($color: #222428, $alpha: 0.6);
  }
  .content-image {
    font-size: 0;
  }
  .footer {
    padding-top: 10px;
    // height: 50px;
    // line-height: 50px;
    &-common {
      min-width: 100px;
      float: left;
    }
  }
}
</style>
