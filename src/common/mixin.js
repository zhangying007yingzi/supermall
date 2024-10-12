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
  }
   
   }
};