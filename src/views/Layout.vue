<template>
  <AppTopnav/>
  <header>头部组件</header>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
export default {
  components: { AppTopnav },
  setup() {
    
  },
}
</script>