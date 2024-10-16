<template>
  <div class="cart">
    <!--    导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>
    <!--    商品列表-->
    <cart-list></cart-list>
    <!-- 商品结算 -->
     <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import { mapGetters } from "vuex";
export default {
  name: "SuperMallCart",

  data() {
    return {};
  },
  components: { NavBar, CartList,CartBottomBar },
  computed: {
   ...mapGetters(['cartListLength'])
  },
  
  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
div.nav-bar {
  text-align: center;
  color: var(--color-background);
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}
</style>
