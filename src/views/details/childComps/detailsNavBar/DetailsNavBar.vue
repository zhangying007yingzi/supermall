<template>
  <div>
    <nav-bar>
      <div slot="left" class="left">
        <img src="~assets/img/common/back.svg" alt="" srcset="">
      </div>
      <div slot="center" class="center">
        <span :class="{'active':index===currentIndex}" v-for="(item, index) in titles" :key="index" @click="clickTitle(index)">{{ item }}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
export default {
  name: 'SupermallDetailsNavBar',

  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex:0
    };
  },
   components: { NavBar },
  mounted() {
    
  },

  methods: {
    clickTitle(index){
      this.currentIndex=index;
    }
  },
};
</script>
<style lang="scss" scoped>
 div.left{
   img{
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
 }
 div.center{
  display: flex;
  justify-content: space-around;
  span.active{
    color: var(--color-high-text);
  }
 }
</style>