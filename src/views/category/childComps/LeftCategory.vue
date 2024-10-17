<template>
    <ul class="leftC">
      <li v-for="(item, index) in categoryList" :key="index" :class="{'active':currentIndex===index}" @click="clickCategoryList(index,item.maitKey,item.miniWallkey)">{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  name: 'SupermallLeftCategory',

  data() {
    return {
      
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
    
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
    
  },
  
  mounted() {
    
  },

  methods: {
    clickCategoryList(index,maitKey,miniWallkey){
      this.$emit('clickCategoryList',{index,maitKey,miniWallkey});
    }
  },
};
</script>
<style lang="scss" scoped>
 ul.leftC{
  font-size: 16px;
  li{
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    border-left:  3px solid transparent;
    &.active{
      font-weight: bold;
      border-left: 3px solid var(--color-tint);
    }
  }
 }
</style>