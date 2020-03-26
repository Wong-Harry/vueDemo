<template>
  <div class="navbar">
    <Hamburger
      :is-active="sidebar.isOpen"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <Breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单
          <i class="el-icon-arrow-down el-icon--right" />
        </span>

        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>回到主页</el-dropdown-item>
          </router-link>
          <el-dropdown-item>这是下拉菜单</el-dropdown-item>
          <el-dropdown-item>这是下拉菜单</el-dropdown-item>
          <el-dropdown-item divided>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    display: flex;
    align-items: center;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
