<template>
  <div>
    <div class="nav-bar">
      <nav-bar>
        <div slot="center">购物街</div>
      </nav-bar>
    </div>
    <tab-control
      v-if="isSticky"
      ref="tabControl"
      :isSticky="isSticky"
      :currentIndex="currentIndex"
      :tabList="tabList"
      @tabClick="tabClick"
    />
    <scroll
      class="wrapper"
      ref="scroll"
      :pullup="pullup"
      :listenScroll="true"
      :goodsData="goods[currentType].list"
      @scroll="scrollPosition"
      @scrollToEnd="loadMoreData"
    >
      <div class="content">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
        <recommends :recommendList="recommendList" />
        <feature-view />
        <tab-control
          v-if="!isSticky"
          ref="tabControl"
          :currentIndex="currentIndex"
          :tabList="tabList"
          @tabClick="tabClick"
        />
        <goods-list :goods-list="goods[currentType].list" />
      </div>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="clickBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import Recommends from "./childComps/Recommends";
import FeatureView from "./childComps/FeatureView";
import { getHomeMultidata, getHomeGoods } from "network/home";
import { backTopMinxin } from "common/mixin";
export default {
  name: "Home",

  data() {
    return {
      pullup: true,
      banners: [], //swiper img list
      currentIndex: 0,
      tabControlOffset: 0, //tabControl的offset值
      isSticky: false, //tabControl是否吸顶判断
      recommendList: [],
      currentType: "pop",
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      scrollY:0, //记录滚动条当前位置
    };
  },
  mixins: [backTopMinxin],
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    HomeSwiper,
    Recommends,
    FeatureView,
  },
  computed: {
    tabList() {
      return ["流行", "新款", "精选"];
    },
  },

  created() {console.log('created');
  },

  mounted() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    console.log('activated');  
    this.$refs.scroll.scrollTo(0,this.scrollY);
  },
  deactivated() {
    console.log('deactivated');  
    this.scrollY=this.$refs.scroll.getScrollY();
  },
  methods: {
    /* 获取轮播图，评论list数据 */
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          this.banners = res.banner.list;
          this.recommendList = res.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    /* 切换tabcontrol */
    tabClick(index) {
      const goodsKeys = Object.keys(this.goods);
      this.currentIndex = index;
      this.currentType = goodsKeys[index];
    },

    /**
     * 获取商品list数据
     * @param type 商品的类型
     */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(page, type).then(
        (res) => {
          this.goods[type].list.push(...res.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        },
        (err) => {
          console.log(err);
        }
      );
    },
    /* 下拉加载更多数据 */
    loadMoreData() {
      this.getHomeGoods(this.currentType);
    },
    /* 获取滚动对象的offset值与tabControlOffset比较，对tabcontrol作出是否吸顶的操作 */
    scrollPosition(pos) {
      if (-pos.y > this.tabControlOffset) {
        this.isSticky = true;
        this.isShowBackTop = true;
        return;
      }
      this.isSticky = false;
      this.isShowBackTop = false;
    },
    /* 图片加载完成后获取tabcontrol的offset值 */
    swiperImageLoad() {
      this.tabControlOffset = this.$refs.tabControl.$el.offsetTop;
    }
  },
};
</script>

<style lang="scss" scoped>
div.nav-bar {
  text-align: center;
  color: var(--color-background);
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}
</style>
