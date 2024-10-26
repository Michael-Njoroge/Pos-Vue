<template>
  <el-container class="layout-container-demo">
    <Sidebar /> 

    <el-container>
      <HeaderPage /> 
      <el-main class="p-4">
        <router-view></router-view> 
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Sidebar from '@/components/Sidebar.vue';
import HeaderPage from '@/components/Header.vue';
</script>

<style scoped>
.layout-container-demo {
  width: 100%;
  height: 100vh;
  display: flex;
}
.layout-container-demo > .el-container {
  flex: 1; /* Make the inner container fill the remaining space */
  display: flex;
  flex-direction: column; /* Stack Header and Main vertically */
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  width: 200px; 
  overflow: auto;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
  background-color: var(--el-color-primary-light-9); 
  overflow: auto;
}
</style>
