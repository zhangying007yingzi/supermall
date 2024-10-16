import BackTop from "components/content/backTop/BackTop";
export const backTopMinxin = {
  data() {
    return {
      isShowBackTop: false,
    };
  },
  components: { BackTop },
  methods: {
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};
export const imageLoad = {
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("imageLoad");
        this.isLoad = true;
      }
    },
  },
};
