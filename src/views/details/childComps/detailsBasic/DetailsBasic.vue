<template>
  <div class="basic-info-wrapper">
   <h1>{{ goodsInfo.title }}</h1>
   <p><span class="price">{{ goodsInfo.newPrice }}</span><span class="old-price">{{ goodsInfo.oldPrice }}</span></p>
   <div>
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SupermallDetailsBasic',

  data() {
    return {
      
    };
  },
  props:{
     goodsInfo: {
       type: Object,
       default() {
         return {};
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
  div.basic-info-wrapper{
    
  }
</style>