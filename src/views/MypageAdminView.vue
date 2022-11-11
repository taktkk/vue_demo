<script lang="ts" setup >
  import { ref , reactive } from 'vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'

</script>

<template>
  <Header></Header>
  <el-alert closable=true title="adminログイン完了" type="success" show-icon />
  <p>Admin MyPage</p>
  
  <Footer></Footer>
</template>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>