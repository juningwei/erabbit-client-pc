<template>
  <AppTopnav/>
  <AppHeader/>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
export default {
 components: { AppTopnav, AppHeader },
  setup() {
    
  },
}
</script>