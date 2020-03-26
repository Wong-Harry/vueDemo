<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="index == levelList.length - 1">
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.gerBreadcrund()
    }
  },
  created() {
    this.gerBreadcrund()
  },
  methods: {
    gerBreadcrund() {
      console.log(this.$route)
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      console.log(matched)
      this.levelList = matched
    },
    handleLink(item) {
      console.log(item)
      const { redirect } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
