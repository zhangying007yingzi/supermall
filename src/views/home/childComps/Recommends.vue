<template>
  <div class="recommends-wrapper">
    <a :href="item.link" v-for="(item, index) in recommendList" :key="index">
      <img :src="item.image" alt="" srcset="">
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SupermallRecommends',

  data() {
    return {
      
    };
  },
  props: {
    recommendList: {
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
  div.recommends-wrapper{
    font-size: 12px;
    text-align: center;
    display: flex;
    margin-bottom: 10px;
    a{
      flex: 1;
      display: block;
      img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }
      span{
        display: block;
      }
    }
  }
</style>