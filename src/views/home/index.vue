<template>
  <div class="container">
    <div class="home-entry">
      <HomeCategory></HomeCategory>
       <HomeBanner />

    </div>
  </div>
</template>


<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
export default {
  components: {
    HomeCategory,
    HomeBanner
  },
  setup() {
    
  },
}
</script>

<style lang="less" scoped>

</style>