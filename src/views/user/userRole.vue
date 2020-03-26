<template>
  <div class="userRole">
    <h1>This is an userRole page</h1>
    <el-alert :closable="false" title="child" type="success">
      <router-view />
    </el-alert>
  </div>
</template>

<script>
export default {
  name: 'UserRole',
  components: {
    // HelloWorld,
  }
}
</script>

<style lang="scss" scoped></style>
