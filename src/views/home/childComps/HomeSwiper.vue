<template>
  <div class="swiper-wrapper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
         <a :href="item.link">
          <img :src="item.image" @load="imageLoad">
         </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper,SwiperItem} from "@/common/swiper/index";
export default {
  name: 'SupermallHomeSwiper',

  data() {
    return {
      isLoad:false
    };
  },
  props: {
    banners: {
        type: Array,
        default() {
          return [];
        },  
    }
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
  padding-top: 44px;
}
</style>