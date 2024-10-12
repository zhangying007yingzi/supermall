<template>
  <div class="goods-item" @click="GoDetails(goodsItem.iid)">
    <div
      ><img :src="goodsItem.show.img" alt="" />
      <p>{{ goodsItem.title }}</p>
      <div>
        <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupermallGoodsItem",

  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},

  methods: {
    GoDetails(iid){
      this.$router.push(`/detail/${iid}`);
    }
  },
};
</script>
<style lang="scss" scoped>
  div.goods-item{
    width: 48%;
    margin-bottom: 10px;
    div{
      display: flex;
      flex-direction: column;
       img{
      border-radius: 5px;
      margin-bottom: 5px;
    }
    p{
      height: 16px;
      white-space: nowrap;      
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 5px;

    }
    div{
      display: flex;
      justify-content: space-between;
      span.price{
        color: var(--color-high-text);
      }
      span.collect{
        position: relative;
        display: inline-block;
        padding-left: 16px;
        &::before{
          content: '';
          display: block;
          width: 14px;
          height: 14px;
          position: absolute;
          left: 0;
          background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
        }
      }
    }
    }
  }
</style>