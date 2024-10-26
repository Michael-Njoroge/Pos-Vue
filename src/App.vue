<template>
  <el-container class="layout-container-demo">
    <Sidebar />
    <el-container>
      <Header />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
// import MainContent from './MainContent.vue'
</script>

<style scoped>
.layout-container-demo {
  width: 100%;
  height: 100vh; /* Full viewport height */
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
</style>
