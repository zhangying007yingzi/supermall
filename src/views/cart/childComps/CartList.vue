<template>
  <div class="cart-list">
   
      <!-- <cart-list-item v-for="(item,index) in cartList"
                      :item-info="item"
                      :key="index">
      </cart-list-item> -->
      {{ cartList }}
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  import { mapGetters } from "vuex";
  export default {
    name: "SuperMallCartList",
    components: {
      CartListItem
    },
   computed: {
     ...mapGetters(['cartList'])
   },
   
  }
</script>

<style lang="scss" scoped>
  div.cart-list {
    position: relative;
  }
</style>
