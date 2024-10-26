<template>
  <el-header class="header w-100">
    <div
      class="d-flex justify-content-end align-items-center w-100 h-100 m-auto"
    >
      <div class="d-flex align-items-center mx-4">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Dashboard"
          placement="left"
        >
          <el-icon
            class="mx-2 fs-3 p-1 text-white"
            style="cursor: pointer; background: #40454a"
          >
            <HomeFilled />
          </el-icon>
        </el-tooltip>

        <el-tooltip
          class="box-item"
          effect="dark"
          content="Settings"
          placement="left"
        >
          <el-icon
            class="mx-2 fs-3 p-1 text-white"
            style="cursor: pointer; background: #40454a"
          >
            <Setting />
          </el-icon>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Notifications"
          placement="left"
        >
          <el-icon
            class="mx-2 fs-3 p-1 text-white"
            style="cursor: pointer; background: #40454a"
          >
            <InfoFilled />
          </el-icon>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Alerts"
          placement="left"
        >
          <el-icon
            class="mx-2 fs-3 p-1 bg-warning text-white"
            style="cursor: pointer"
          >
            <WarnTriangleFilled />
          </el-icon>
        </el-tooltip>

        <div
          class="d-flex align-items-center text-white"
          style="
            background-color: #28a745;
            padding: 2px;
            cursor: pointer;
          "
        >
          <el-tooltip
            class="box-item"
            effect="dark"
            content="POS"
            placement="left"
          >
            <el-icon class="fs-5 mx-1">
              <Menu />
            </el-icon>
          </el-tooltip>
          <span class="fs-6">POS</span>
        </div>

        <el-tooltip
          class="box-item"
          effect="dark"
          content="Today's Profit"
          placement="left"
        >
          <el-icon
            class="mx-2 fs-3 p-1 bg-success text-white"
            style="cursor: pointer"
          >
            <Money />
          </el-icon>
        </el-tooltip>
        
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Open Registers"
          placement="left"
        >
          <el-icon
            class="mx-2 fs-3 p-1 bg-primary text-white"
            style="cursor: pointer"
          >
            <Grid />
          </el-icon>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Clear Local Data"
          placement="bottom"
        >
          <el-icon
            class="mx-2 fs-3 p-1 bg-danger text-white"
            style="cursor: pointer"
          >
            <CollectionTag />
          </el-icon>
        </el-tooltip>
      </div>

      <el-dropdown trigger="click">
        <div class="d-flex align-items-center fs-6" style="cursor: pointer">
          <span>Welcome Pos Admin</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="fs-6 fw-bold">
              <el-icon><User /></el-icon>
              Profile
            </el-dropdown-item>
            <el-dropdown-item class="fs-6 fw-bold">
              <el-icon><Key /></el-icon>
              Change Password
            </el-dropdown-item>
            <el-dropdown-item class="text-danger fs-6 fw-bold">
              <el-icon><Right /></el-icon>
              Logout
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import {
  Setting,
  User,
  Key,
  Right,
  HomeFilled,
  InfoFilled,
  Money,
  WarnTriangleFilled,
  Menu,
  Grid,
  CollectionTag
} from "@element-plus/icons-vue";
</script>

<style scoped>
.header {
  color: var(--el-text-color-primary);
  box-sizing: border-box;
}
</style>
