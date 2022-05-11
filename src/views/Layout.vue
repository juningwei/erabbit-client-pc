<template>
  <AppTopnav/>
  <AppHeaderSticky></AppHeaderSticky>
  <AppHeader/>
   <div class="main">
    <router-view></router-view>
  </div>
  <AppFooter/>
 
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
export default {
 components: { AppTopnav, AppHeader, AppFooter, AppHeaderSticky },
  setup() {
  const store = useStore()
  store.dispatch('category/getList')
  },
}
</script>

<style lang="less" scoped>
  .main {
    min-height: 1000px;
  }
</style>