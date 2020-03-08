<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/layout/components'

export default {
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
