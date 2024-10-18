<template>
    <ul class="c-detail">
      <li v-for="(item, index) in subCategoryList" :key="index">
        <a :href="item.link">
          <img v="item.image" alt="">
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'SupermallCategoryDetail',

  data() {
    return {
      
    };
  },
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
    
  },
  
  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
ul.c-detail{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li{
    width: 80px;
    margin-bottom: 10px;
    img{
      width: 80px;
      height: 100px;
      margin-bottom: 10px;
    }
    p{
      text-align: center;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>