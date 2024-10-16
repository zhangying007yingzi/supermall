<template>
  <div class="goods-info-wrapper" v-if="Object.keys(detailInfo).length > 0">
    <p>
      <span class="p-before"></span>
      {{ detailInfo.desc }}
      <span class="p-after"></span>
    </p>
    <img
      v-for="(item, index) in detailInfo.detailImage[0].list"
      :key="index"
      :src="item"
    />
  </div>
</template>

<script>
export default {
  name: "SupermallDetailsGoodsInfo",
  data() {
    return {
      isLoad:false,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  }
};
</script>
<style lang="scss" scoped>
div.goods-info-wrapper {
  padding: 0 10px;
  p {
    margin-bottom: 10px;

    span.p-before {
      display: block;
      position: relative;
      height: 15px;
      &::before {
        width: 5px;
        height: 5px;
        background-color: #333;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
      }
      &::after {
        width: 90px;
        border-bottom: 1px solid #333;
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
      }
    }

    span.p-after {
      height: 15px;
      display: block;
      position: relative;
      &::before {
        width: 5px;
        height: 5px;
        background-color: #333;
        content: "";
        position: absolute;
        right: 0;
        top: 0;
      }
      &::after {
        width: 90px;
        border-bottom: 1px solid #333;
        content: "";
        position: absolute;
        right: 0;
        top: 5px;
      }
    }
  }
  img {
    margin-bottom: 10px;
  }
}
</style>
