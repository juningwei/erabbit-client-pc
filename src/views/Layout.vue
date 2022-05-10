<template>
  <AppTopnav/>
  <AppHeader/>
  <AppFooter/>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
export default {
 components: { AppTopnav, AppHeader, AppFooter },
  setup() {
    
  },
}
</script>