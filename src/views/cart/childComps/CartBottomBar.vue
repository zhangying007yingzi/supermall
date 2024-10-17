<template>
  <div id="bottom-bar">
    <div class="check-content">
      <check-button
        :checkState="checkState"
        :IsReadly="cartListLength === 0"
        @change.native="checkAllClick"
        >全选</check-button
      >
    </div>
    <div class="price">
      合计：<span>￥{{ totalPrice }}</span>
    </div>
    <!-- <div class="price price-cancel">
      <span>取消</span>
    </div> -->
    <div class="calculate">
      <span>去结算({{ checkedLen }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SuperMallCartBottomBar",
  data() {
    return {};
  },

  props: {},
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList", "cartListLength"]),
    checkedLen() {
      return this.cartList.filter((item) => item.checked == true).length;
    },
    totalPrice() {
      return this.cartList.filter(item=>item.checked==true)
        .reduce((prevValue, item) => {
          return prevValue + item.realPrice * item.count;
        }, 0)
        .toFixed(2);
    },
    checkState() {
      if (this.cartListLength === 0) {
        return false;
      }
      return this.cartList.every((item) => item.checked === true);
    },
  },
  methods: {
    ...mapMutations(["updateAllChecked"]),
    checkAllClick(el) {
      let isChecked = el.target.checked;
      this.updateAllChecked(isChecked);
    },
  },
};
</script>

<style lang="scss" scoped>
#bottom-bar {
  height: 40px;
  position: fixed;
  display: flex;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  div.check-content {
    width: auto;
    display: flex;
    flex: 1;
    line-height: 40px;
    padding-left: 4px;
    align-items: center;
  }
  div.price {
    text-align: center;
    flex: 2;
    /*height: 40px;*/
    line-height: 40px;
    span {
      color: var(--color-tint);
      &.price-cancel {
        color: white;
        background-color: var(--color-tint);
      }
    }
  }

  div.calculate {
    height: 40px;
    line-height: 40px;
    background-color: var(--color-high-text);
    color: #fff;
    text-align: center;
    flex: 1;
  }
}
</style>
