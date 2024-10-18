<template>
  <div class="swiper-wrapper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <img v-lazy="item" @load="imageLoad" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
import { imageLoad } from "common/mixin";
export default {
  name: "SupermallDetailSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mixins: [imageLoad],
  components: { Swiper, SwiperItem },
};
</script>
<style lang="scss" scoped>
div.swiper-wrapper {
  padding-top: 44px;
  img {
    height: 250px;
  }
}
</style>
