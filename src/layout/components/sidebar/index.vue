<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- :default-active="activeMenu"
      :collapse="isCollapse"-->
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <router-link to="/">
          <el-menu-item index="1">
            <i class="el-icon-location" />
            <span>首页</span>
          </el-menu-item>
        </router-link>

        <router-link to="/user">
          <el-menu-item index="2">
            <i class="el-icon-menu" />
            <span slot="title">用户</span>
          </el-menu-item>
        </router-link>

        <router-link to="/article">
          <el-menu-item index="3">
            <i class="el-icon-document" />
            <span slot="title">文章</span>
          </el-menu-item>
        </router-link>

        <router-link to="/about">
          <el-menu-item index="4">
            <i class="el-icon-setting" />
            <span slot="title">关于</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  name: 'Sidebar',
  data: function() {
    return {}
  },
  computed: {
    variables() {
      return variables
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.bgBox {
  background-color: red;
}
</style>
