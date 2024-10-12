<template>
  <div class="tab-wrapper" :class="{ sticky: isSticky }">
    <div
      v-for="(item, index) in tabList"
      :key="index"
      @click="itemClick(index)"
    >
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupermallTabControl",

  data() {
    return {};
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },

    tabList: {
      type: Array,
      default() {
        return [];
      },
    },
    isSticky: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {},

  methods: {
    itemClick(index) {
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style lang="scss" scoped>
div.tab-wrapper {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  &.sticky {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 999;
  }
  div {
    text-align: center;
    flex: 1;
    span {
      display: inline-block;
      line-height: 1.5;
      &.active {
        color: var(--color-tint);
        position: relative;
        &::after {
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--color-tint);
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          content: "";
        }
      }
    }
  }
}
</style>
