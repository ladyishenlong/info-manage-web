<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
@import "../src/style/color.scss";

body,#app {
  background-color: $background-color;
}
</style>
