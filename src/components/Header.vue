<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header"><span class="header-text">Varma Web アプリ</span>
        <div >
        <el-dropdown class="nav-link">
          <span class="el-dropdown-link">
            Varma
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><RouterLink to="/">Home</RouterLink></el-dropdown-item>
              <el-dropdown-item><RouterLink to="/about">About</RouterLink></el-dropdown-item>
              <el-dropdown-item><RouterLink to="/signin">SignIn</RouterLink></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      </el-header>
    </el-container>
  </div>
</template>

<style scoped>
.header {
  height: 72px;
  background-color: #B9A273;
  font-family: Arial;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15000000596046448px;
 
  display: flex;
align-items: center;
letter-spacing: 0.15px;


}
.header-text{
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFF;
  text-align: left;
}

.nav-link {
  text-align: right;
  color: #FFFFFF;
}



</style>