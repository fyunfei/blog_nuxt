<template>
  <div class="container">
    <common-header></common-header>
    <div class="main">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  .main {
    padding-top: 54px;
    max-width: 935px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
