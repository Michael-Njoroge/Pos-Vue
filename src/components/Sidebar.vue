<template>
  <el-aside width="200px" class="sidebar">
    <!-- Company Name at the top -->
    <div class="company-name">POS HUB</div>

    <el-scrollbar>
      <el-menu router>
        <el-menu-item :index="'/'">
          <el-icon><HomeFilled /></el-icon>
          <span>Dashboard</span>
        </el-menu-item>

        <el-sub-menu index="products">
          <template #title>
            <el-icon><Notebook /></el-icon>Products
          </template>
            <el-menu-item :index="'/products/list'">List Products</el-menu-item>
            <el-menu-item :index="'/products/deals'">Deals of the Week</el-menu-item>
            <el-menu-item :index="'/products/quantity'">Quantity Adjustments</el-menu-item>
            <el-menu-item :index="'/products/archived'">Archived Products</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="sales">
          <template #title>
            <el-icon><Sell /></el-icon>Sales
          </template>
            <el-menu-item :index="'/sales/list'">List Sales</el-menu-item>
            <el-menu-item :index="'/sales/gifts'">Gift Cards</el-menu-item>
        </el-sub-menu>

        <el-menu-item :index="'quotation'">
          <el-icon><Goods /></el-icon>
          <span>Quotation</span>
        </el-menu-item>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><SoldOut /></el-icon>Purchases
          </template>
            <el-menu-item :index="'/purchases/list'">List Purchases</el-menu-item>
            <el-menu-item :index="'/purchases/returns'">Returns</el-menu-item>
            <el-menu-item :index="'/purchases/expenses'">Expenses</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><TopRight /></el-icon>Transfers
          </template>
            <el-menu-item :index="'/transfers/list'">List Transfers</el-menu-item>
        </el-sub-menu>

        <el-menu-item :index="'/people'">
          <el-icon><User /></el-icon>
          <span>People</span>
        </el-menu-item>

        <el-menu-item :index="'/notification'">
          <el-icon><Bell /></el-icon>
          <span>Notifications</span>
        </el-menu-item>

        <el-sub-menu index="5">
          <template #title>
            <el-icon><Setting /></el-icon>Settings
          </template>
            <el-menu-item :index="'/settings/system'">System Settings</el-menu-item>
            <el-menu-item :index="'/settings/isbn'">ISBN Checker</el-menu-item>
            <el-menu-item :index="'/settings/pos'">POS Settings</el-menu-item>
            <el-menu-item :index="'/settings/discount-groups'">Discount Groups</el-menu-item>
            <el-menu-item :index="'/settings/customer-groups'">Customer Groups</el-menu-item>
            <el-menu-item :index="'/settings/categories'">Categories</el-menu-item>
            <el-menu-item :index="'/settings/book-status'">Book Status</el-menu-item>
            <el-menu-item :index="'/settings/variations'">Variations</el-menu-item>
            <el-menu-item :index="'/settings/warehouses'">Warehouses</el-menu-item>
            <el-menu-item :index="'/settings/group-permissions'">Group Permissions</el-menu-item>
        </el-sub-menu>
        
        <el-menu-item :index="'/reports'">
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
