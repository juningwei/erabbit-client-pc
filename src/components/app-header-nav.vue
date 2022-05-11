<template>
  <ul class="navs">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li v-for="(item, index) in list" :key="item.id" @mousemove="showLayer(tag+index)" @mouseout="hideLayer(tag+index)">
      <RouterLink :to="`/category/${item.id}`" @click="hideLayer(index)">{{ item.name }}</RouterLink>
      <div class="layer" :id="`${tag+index}_id`">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <RouterLink :to="`/category/sub/${sub.id}`" @click="hideLayer(tag+index)">
              <img :src="sub.picture" alt="" />
              <p>{{ sub.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props:{
    tag:{
      default: 0,
      type: Number
    }
  },
  // props:[tag],
  setup() {
    const store = useStore();
    const list = computed(() => {
      return store.state.category.list;
    });


    const hideLayer = (index) => {
      // console.log(index)

     let layer =  document.getElementById(`${index}_id`);
      layer.className = "layer hideLayer";
    };
    const showLayer = (index) => {
      // console.log(index)
     let layer =  document.getElementById(`${index}_id`);
      layer.className = "layer showLayer";
    };
    return { list, hideLayer, showLayer};
  },
};
</script>

<style lang="less" scoped>
.navs {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
}


.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  z-index: 999;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  &.showLayer{
    height: 132px ;
    opacity: 1 ;
  }
  &.hideLayer{
    height: 0 ;
    opacity: 0 ;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
