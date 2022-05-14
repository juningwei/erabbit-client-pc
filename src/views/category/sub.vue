<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <SubFilter />
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort />
        <!-- 列表 -->
      </div>
      
    </div>
  </div>
</template>

<script>
import SubBread from './components/sub-bread'
import SubFilter from './components/sub-filter'
import SubSort from './components/sub-sort'
export default {
  components: { SubBread, SubFilter, SubSort},
  setup() {
    
  },
}
</script>
