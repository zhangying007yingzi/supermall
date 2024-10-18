<template>
  <div class="toast" v-show="isShow">
    <div>{{ this.message }}</div>
  </div>
</template>

<script>
export default {
  name: "SupermallToast",

  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  methods: {
    show(message = "默认文字", duration = 2000) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>
<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  z-index: 9999;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
}
</style>
