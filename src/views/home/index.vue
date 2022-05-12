<template>
  <div class="container">
    <div class="home-entry">
      <HomeCategory></HomeCategory>
       <HomeBanner />
       <HomeNew></HomeNew>
       <HomeHot></HomeHot>
       <HomeBrand />
       <HomeProduct />

    </div>
  </div>
</template>


<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new'
import HomeHot from './components/home-hot'
import HomeBrand from './components/home-brand'
import HomeProduct from './components/home-product'
export default {
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct
  },
  setup() {
    
  },
}
</script>

<style lang="less" scoped>

</style>