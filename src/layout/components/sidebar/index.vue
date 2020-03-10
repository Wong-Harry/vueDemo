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
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location" />
            <span>导航一</span>
          </template>

          <!-- <el-menu-item-group> -->
          <!-- <template slot="title">分组一</template> -->
          <router-link to="/">
            <el-menu-item index="1-2">首页</el-menu-item>
          </router-link>
          <router-link to="/article-list">
            <el-menu-item index="1-1">文章</el-menu-item>
          </router-link>
          <!-- </el-menu-item-group> -->
        </el-submenu>

        <router-link to="/user">
          <el-menu-item index="2">
            <i class="el-icon-menu" />
            <span slot="title">导航二</span>
          </el-menu-item>
        </router-link>

        <el-menu-item index="3" disabled>
          <i class="el-icon-document" />
          <span slot="title">导航三</span>
        </el-menu-item>

        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
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
