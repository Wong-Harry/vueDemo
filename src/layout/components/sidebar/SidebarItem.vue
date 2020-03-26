<template>
  <div v-if="!routes.hidden">
    <template
      v-if="
        hasOneShowingChild(routes.children, routes) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
    >
      <router-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">{{
          onlyOneChild.meta.title
        }}</el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else ref="subMenu" popper-append-to-body :index="resolvePath(routes.path)">
      <template slot="title">
        <i class="el-icon-location" />
        <span slot="title">{{ routes.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in routes.children"
        :key="child.path"
        class="nest-menu"
        :base-path="resolvePath(child.path)"
        :routes="child"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss" scoped></style>
