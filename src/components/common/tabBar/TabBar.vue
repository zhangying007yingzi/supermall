<template>
    <div id="tab-bar">
     <slot></slot>
   </div>
</template>

<script>
// import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",

  data() {
    return {};
  },
  components: {
    // TabBarItem
  },
  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
div#tab-bar {
  font-size: 16px;
  text-align: center;
  width: 100%;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -3px rgba(100, 100, 100, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

</style>
