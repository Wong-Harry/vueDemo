<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        :default-active="$route.path"
        mode="vertical"
      >
        <sidebar-item
          v-for="item in permission_routers"
          :key="item.id"
          :routes="item"
          :base-path="item.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters(['permission_routers']),
    variables() {
      return variables
    }
  }
}
</script>
<style lang="scss" scoped>
.bgBox {
  background-color: red;
}
</style>
