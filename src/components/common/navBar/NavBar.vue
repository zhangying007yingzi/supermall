<template>
  <div class="nav-container">
     <div class="left">
      <slot name="left"></slot>
     </div>
     <div class="center">
      <slot name="center"></slot>
     </div>
     <div class="right">
      <slot name="right"></slot>
     </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
div.nav-container{
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba($color: #000000, $alpha: 0.1) ;
  div.left,div.right{
    width: 50px;

  }
  div.center{
    flex: 1;
  }
}
</style>