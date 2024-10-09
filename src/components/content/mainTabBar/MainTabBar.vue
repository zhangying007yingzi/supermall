<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg">
        <span slot="item-text" class="item-text">首页</span>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
        <img slot="item-active-icon" src="~assets/img/tabbar/category_active.svg" />
        <span slot="item-text" class="item-text">分类</span>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="deepPink">
         <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" />
         <img slot="item-active-icon" src="~assets/img/tabbar/shopcart_active.svg" />
        <span slot="item-text" class="item-text">购物车</span>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="item-active-icon" src="~assets/img/tabbar/profile_active.svg" />
        <span slot="item-text" class="item-text">我的</span>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  name: "MainTabBar",

  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  },
  mounted() {},

  methods: {}
};
</script>
