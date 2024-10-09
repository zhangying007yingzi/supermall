<template>
  <div class="nav-bar">
    <navBar>
      <div slot="center">购物街</div>
    </navBar>
  </div>
</template>

<script>
import navBar from "components/common/navBar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",

  data() {
    return {
      result:null
    };
  },
  components: {
    navBar,
  },
  created() {
    this.getHomeMultidata();
  },

  mounted() { },

  methods: {
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          this.result=res
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  div.nav-bar {
    text-align: center;
    color: var(--color-background);
    background-color: var(--color-tint);
  }
</style>
