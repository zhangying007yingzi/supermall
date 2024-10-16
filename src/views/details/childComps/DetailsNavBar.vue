<template>
  <div class="details-nav-bar">
    <nav-bar>
      <div slot="left" class="left" @click="goBack">
        <img src="~assets/img/common/back.svg" alt="" srcset="" />
      </div>
      <div slot="center" class="center">
        <span
          :class="{ active: index === currentIndex }"
          v-for="(item, index) in titles"
          :key="index"
          @click="clickTitle(index)"
          >{{ item }}</span
        >
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
export default {
  name: "SupermallDetailsNavBar",

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"]
    };
  },
  props: {
    currentIndex:{
      type: Number,
      default:0
    }
  },
  components: { NavBar },
  mounted() {},

  methods: {
    clickTitle(index) {
      this.$emit('tabTitle',index)
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
div.details-nav-bar {
  left: 0;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 9;
  background-color: #fff;
  div.left {
    img {
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
  }
  div.center {
    display: flex;
    justify-content: space-around;
    span.active {
      color: var(--color-high-text);
    }
  }
}
</style>
