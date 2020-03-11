<template>
  <div v-if="!routes.hidden">
    <!-- v-for="item in routes" -->
    <template>
      <router-link
        v-if="routes.children.length === 1 && !routes.children[0].children"
        :key="routes.children[0].name"
        :to="`${routes.path}/${routes.children[0].path}`"
      >
        <el-menu-item>{{ routes }}</el-menu-item>
      </router-link>

      <el-submenu v-else>
        <template slot="title">
          <i class="el-icon-location" />
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Object,
      required: true
    }
  },
  created() {
    console.log(this.routes)
  }
}
</script>

<style lang="scss" scoped>
</style>
