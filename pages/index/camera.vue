<template>
  <div style="height: 100%;">
    页面功能待完善
  </div>
</template>

<script>
export default {
  mounted() {
    this.$Message.warning({
      content: '该功能正在开发中...',
    })
    setTimeout(() => {
      this.$router.push('/')
    }, 1800)
  },
}
</script>

<style lang="scss" scoped></style>
