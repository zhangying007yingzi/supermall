<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupermallDetailsBottomBar",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    addToCart() {
      this.$emit('addToCart');
    },
  },
};
</script>
<style lang="scss" scoped>
div.bottom-bar {
  text-align: center;
  width: 100%;
  height: 58px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  div.bar-item {
    display: flex;
    justify-content: center;
    flex: 1;
    &.bar-left {
      >div{
        flex: 1;
        .icon {
          display: block;
          width: 22px;
          height: 22px;
          margin: 6px auto 3px;
          background: url("~assets/img/detail/detail_bottom.png");
          background-size: 100%;
          &.service {
            background-position: 0 -52px;
          }
          &.shop {
            background-position: 0 -98px;
          }
        }
      }
    }
    &.bar-right {
      font-size: 15px;
      color: #fff;
      line-height: 58px;
      >div{
        flex: 1;
        &.cart {
          background-color: #ffe817;
        }
        &.buy {
          background-color: #f69;
        }

      }
    }
  }
}
</style>
