<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :banners="banners"/>
    <details-basic :goodsInfo="goodsInfo"></details-basic>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailsNavBar/DetailsNavBar";
import detailSwiper from "./childComps/detailsSwiper/DetailSwiper";
import DetailsBasic from "./childComps/detailsBasic/DetailsBasic";
import {getDetails,Goods} from "network/details"
export default {
  name: 'SupermallDetails',

  data() {
    return {
      iid:this.$route.params.iid,
      banners:[], //轮播图list
      goodsInfo:{} //商品基本信息
    };
  },
  components: { DetailNavBar,detailSwiper,DetailsBasic },
  mounted() {
    this.getDetail();
  },

  methods: {
    getDetail(){
      getDetails(this.iid).then(res=>{
        const data=res.result;
        this.banners = data.itemInfo.topImages;
        // 商品基本信息
        this.goodsInfo= new Goods(data.itemInfo,data.columns,data.services);

      });
    }
  },
};
</script>