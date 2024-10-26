<template>
  <el-aside width="200px" class="sidebar">
    <!-- Company Name at the top -->
    <div class="company-name">POS HUB</div>

    <el-scrollbar>
      <el-menu>
        <el-menu-item index="dashboard">
          <el-icon><HomeFilled /></el-icon>
          <span>Dashboard</span>
        </el-menu-item>

        <el-sub-menu index="1">
          <template #title>
            <el-icon><Notebook /></el-icon>Products
          </template>
            <el-menu-item index="1-1">List Products</el-menu-item>
            <el-menu-item index="1-2">Deals of the Week</el-menu-item>
            <el-menu-item index="1-3">Quantity Adjustments</el-menu-item>
            <el-menu-item index="1-4">Archived Products</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><Sell /></el-icon>Sales
          </template>
            <el-menu-item index="2-1">List Sales</el-menu-item>
            <el-menu-item index="2-2">Gift Cards</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="quotation">
          <el-icon><Goods /></el-icon>
          <span>Quotation</span>
        </el-menu-item>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><SoldOut /></el-icon>Purchases
          </template>
            <el-menu-item index="3-1">List Purchases</el-menu-item>
            <el-menu-item index="3-2">Returns</el-menu-item>
            <el-menu-item index="3-3">Expenses</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><TopRight /></el-icon>Transfers
          </template>
            <el-menu-item index="4-1">List Transfers</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="people">
          <el-icon><User /></el-icon>
          <span>People</span>
        </el-menu-item>

        <el-menu-item index="notification">
          <el-icon><Bell /></el-icon>
          <span>Notifications</span>
        </el-menu-item>

        <el-sub-menu index="5">
          <template #title>
            <el-icon><Setting /></el-icon>Settings
          </template>
            <el-menu-item index="5-1">System Settings</el-menu-item>
            <el-menu-item index="5-2">ISBN Checker</el-menu-item>
            <el-menu-item index="5-3">POS Settings</el-menu-item>
            <el-menu-item index="5-4">Discount Groups</el-menu-item>
            <el-menu-item index="5-5">Customer Groups</el-menu-item>
            <el-menu-item index="5-6">Categories</el-menu-item>
            <el-menu-item index="5-7">Book Status</el-menu-item>
            <el-menu-item index="5-8">Variations</el-menu-item>
            <el-menu-item index="5-9">Warehouses</el-menu-item>
            <el-menu-item index="5-0">Group Permissions</el-menu-item>
        </el-sub-menu>
        
        <el-menu-item index="reports">
          <el-icon><Goods /></el-icon>
          <span>Reports</span>
        </el-menu-item>

      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts" setup>
import { Message, Setting, HomeFilled, Notebook,List, Sell, SoldOut, Goods,TopRight,User, Bell } from "@element-plus/icons-vue";
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--el-color-primary-light-8);
}

.company-name {
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  text-align: center;
  background: var(--el-color-primary-light-7);
}
</style>
