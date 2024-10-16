<template>
  <div class="goods-list-wrapper">
    <goods-item
      v-for="(item, index) in goodsList"
      :key="(item.iid||item.shop_id)+index"
      :goods-item="item"
      
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "SupermallGoodsList",

  data() {
    return {};
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { GoodsItem },
  mounted() {},

  methods: {
  },
};
</script>
<style lang="scss" scoped>
 div.goods-list-wrapper{
   padding: 0 2px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
 }
</style>
