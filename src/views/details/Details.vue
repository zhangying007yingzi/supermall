<template>
  <div>
    <detail-nav-bar :currentIndex="currentIndex" @tabTitle="tabTitle" />
    <scroll
      class="wrapper"
      ref="scroll"
      :pullup="true"
      :listenScroll="true"
      :goodsData="goodsData"
      @scroll="scrollPosition"
    >
      <div class="content">
        <detail-swiper :banners="banners" @swiperImageLoad="imageLoad" />
        <details-basic :goods="goods"></details-basic>
        <details-shop-info :shop="shop"></details-shop-info>
        <details-goods-info :detailInfo="detailInfo"></details-goods-info>
        <details-params-info
          ref="goodsParams"
          :paramInfo="paramInfo"
        ></details-params-info>
        <detail-comment-info
          ref="comments"
          :commentInfo="commentInfo"
        ></detail-comment-info>
        <goods-list ref="recomments" :goods-list="recommends" />
      </div>
    </scroll>
    <details-bottom-bar @addToCart="addToCart"></details-bottom-bar>
    <back-top v-show="isShowBackTop" @click.native="clickBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailsNavBar";
import detailSwiper from "./childComps/DetailSwiper";
import DetailsBasic from "./childComps/DetailsBasic";
import DetailsShopInfo from "./childComps/DetailsShopInfo";
import DetailsGoodsInfo from "./childComps/DetailsGoodsInfo";
import DetailsParamsInfo from "./childComps/DetailsParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailsBottomBar from "./childComps/DetailsBottomBar";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import {
  getDetails,
  Goods,
  Shop,
  GoodsParam,
  getRecomments,
  AddToCart,
} from "network/details";
import { ImgLoad } from "common/utils";
import { backTopMinxin } from "common/mixin";
export default {
  name: "SupermallDetails",

  data() {
    return {
      iid: this.$route.params.iid,
      goodsData: {},
      banners: [], //轮播图list
      goods: {}, //商品基本信息
      shop: {}, //店铺信息
      detailInfo: {}, //商品详细信息
      paramInfo: {}, //商品参数信息
      commentInfo: {}, //评论信息
      recommends: [],
      currentIndex: 0,
      offsetY: [0],
      goodsImgUrls: [],
      loadGoodsImage: null, //预加载商品信息图片
      recommendsImgUrls: [],
      loadRecommentsImage: null, //预加载推荐商品信息图片
    };
  },
  mixins: [backTopMinxin],
  components: {
    DetailNavBar,
    detailSwiper,
    DetailsBasic,
    DetailsShopInfo,
    DetailsGoodsInfo,
    DetailsParamsInfo,
    DetailCommentInfo,
    DetailsBottomBar,
    GoodsList,
    Scroll,
  },
  async mounted() {
    await this.getDetail();
    // console.log(this.loadGoodsImage);
    await this.getRecomment();
    // console.log(this.loadRecommentsImage);
    Promise.all([
      this.loadGoodsImage.preloadImages(),
      this.loadRecommentsImage.preloadImages(),
    ])
      .then((res) => {
        // console.log(res);
        this.$refs.scroll.refresh();
        this.offsetY.length = 4;
        this.offsetY[1] = this.$refs.goodsParams.$el.offsetTop;
        this.offsetY[2] = this.$refs.comments.$el.offsetTop;
        this.offsetY[3] = this.$refs.recomments.$el.offsetTop;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    async getDetail() {
      await getDetails(this.iid).then((res) => {
        const data = res.result;
        this.goodsData = { ...data };

        this.banners = data.itemInfo.topImages;
        // 商品基本信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //店铺信息
        this.shop = new Shop(data.shopInfo);
        // 商品信息
        this.detailInfo = data.detailInfo;
        this.goodsImgUrls = [...data.detailInfo.detailImage[0].list];
        this.loadGoodsImage = new ImgLoad(this.goodsImgUrls); //调用图片预加载类

        // this.loadGoodsImage.preloadImages().then((res)=>{
        //   goods=res
        // });
        //保存参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        //取出评论信息
        if (data.rate.CRate !== 0 && data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
        // this.$refs.scroll.finishPullUp();
      });
    },
    async getRecomment() {
      await getRecomments().then((res) => {
        this.$set(this.goodsData, "recomments", res.list);
        this.recommends = res.list;
        this.recommends.forEach((element) => {
          this.recommendsImgUrls.push(element.image);
        });
        this.loadRecommentsImage = new ImgLoad(this.recommendsImgUrls); //调用图片预加载类
        // this.$refs.scroll.finishPullUp();
      });
    },
    tabTitle(index) {
      this.currentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.offsetY[index] - 5, 2000); //-5是为了与下面的scrollPosition滚动方法执行保持一致，不然tab显示会有错误
    },
    scrollPosition(pos) {
      const y = pos.y;
      if (-y > 500) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
      for (let index = 0; index < this.offsetY.length; index++) {
        let hei1 = this.offsetY[index];
        let hei2 = this.offsetY[index + 1];
        if (-y > hei1 && -y < hei2) {
          this.currentIndex = index;
        } else if (-y > hei2) {
          this.currentIndex = index + 1;
        }
      }
    },
    // swiper单独执行图片预加载
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    addToCart() {
      const product = new AddToCart(
        this.banners[0],
        this.goods.title,
        this.goods.desc,
        this.goods.newPrice,
        this.iid,
        this.goods.realPrice
      );
      // this.$store.commit(ADD_TO_CART,product);
      this.$store.dispatch("addCart", product).then(res=>{
        console.log(res);
        this.$toast.show(res)
        
      });
    },
  },
};
</script>
