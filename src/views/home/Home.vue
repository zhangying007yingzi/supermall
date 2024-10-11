<template>
  <div>
    <div class="nav-bar">
      <nav-bar>
        <div slot="center">购物街</div>
      </nav-bar>
    </div>
    <tab-control v-if="isSticky" ref="tabControl" :isSticky="isSticky" :tabList="tabList" @tabClick="tabClick"/>
    <scroll
      class="wrapper"
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
        <tab-control v-if="!isSticky" ref="tabControl" :tabList="tabList" @tabClick="tabClick"/>
        <goods-list :goods-list="goods[currentType].list" />
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/goods/GoodsList";
import HomeSwiper from "./childComps/HomeSwiper";
import Recommends from "./childComps/Recommends";
import FeatureView from "./childComps/FeatureView";
import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",

  data() {
    return {
      pullup: true,
      banners: [], //swiper img list
      tabControlOffset:0,
      isSticky:false,
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
    };
  },
  components: {
    NavBar,
    Scroll,
    TabControl,
    HomeSwiper,
    Recommends,
    FeatureView,
    GoodsList,
  },
  computed: {
    tabList() {
      return ["流行", "新款", "精选"];
    },
  },

  created() {
    console.log("created!");
  },

  mounted() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.$nextTick(()=>{
       
    })
  },
 
  methods: {
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
    tabClick(index) {
      const goodsKeys = Object.keys(this.goods);
      this.currentType = goodsKeys[index];
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(page, type).then(
        (res) => {
          this.goods[type].list.push(...res.list);
          this.goods[type].page += 1;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    loadMoreData() {
      this.getHomeGoods(this.currentType);
    },
    scrollPosition(pos){
      if (-pos.y>this.tabControlOffset) {
        console.log(this.isSticky);
        
        this.isSticky=true;
      }else{
        this.Sticky=false;
      }
    },
    swiperImageLoad(){
      this.tabControlOffset=this.$refs.tabControl.$el.offsetTop
    }
  }
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
