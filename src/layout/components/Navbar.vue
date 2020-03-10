<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" />
    <Breadcrumb class="breadcrumb-container" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0 10px;
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
    margin-left: 20px;
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
