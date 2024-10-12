<template>
    <div class="swiper-wrapper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
          <img :src="item" @load="imageLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper,SwiperItem} from "components/common/swiper";
export default {
  name: 'SupermallDetailSwiper',

  data() {
    return {
      isLoad:false
    };
  },
  props:{
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
    
  },
  components: {Swiper, SwiperItem },
  mounted() {
    
  },

  methods: {
    imageLoad(){
      if (!this.isLoad) {
        this.$emit('swiperImageLoad');
        this.isLoad=true;
      }
    }
  },
};
</script>
<style lang="scss" scoped>
div.swiper-wrapper{
  img{
    height: 250px;
  }
}
</style>