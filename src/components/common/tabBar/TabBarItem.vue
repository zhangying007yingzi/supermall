<template>
  <!-- <div> -->
  <div class="tab-bar-item" @click="itemClick">
    <template v-if="isActive">
      <slot name="item-active-icon"></slot>
    </template>
    <template v-else>
      <slot name="item-icon"></slot>
    </template>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
  <!-- <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/category.svg" />
        <span class="item-text">分类</span>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/shopcart.svg" />
        <span class="item-text">购物车</span>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/profile.svg" />
        <span class="item-text">我的</span>
      </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "TabBarItem",

  data() {
    return {
      // isActive: true
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'pink'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? {'color':this.activeColor}:{};
    }
  },

  mounted() {},

  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style lang="scss" scoped>
div.tab-bar-item {
  flex: 1;
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  div.isActive {
    color: pink;
  }
  span.item-text {
    display: block;
  }
}
</style>
