<template>
  <div class="cart">
    <!--    导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车(1)</div>
    </nav-bar>
    <!--    商品列表-->
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import CartList from "./childComps/CartList";
export default {
  name: "SuperMallCart",

  data() {
    return {};
  },
  components: { NavBar, CartList },
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
