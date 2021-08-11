<template>
  <div>

    <el-menu
              :default-active="activeIndex" class="el-menu-demo"
             mode="horizontal" @select="handleSelect">

      <el-menu-item index="1">用户中心</el-menu-item>

    </el-menu>


  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>