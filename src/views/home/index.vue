<template>
  <div class="container">
    <div class="home-entry">
      <HomeCategory></HomeCategory>
       <HomeBanner />
       <HomeNew></HomeNew>

    </div>
  </div>
</template>


<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new'
export default {
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew
  },
  setup() {
    
  },
}
</script>

<style lang="less" scoped>

</style>