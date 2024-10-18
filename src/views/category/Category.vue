<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="c-wrapper">
      <div class="left">
        <left-category
          :currentIndex="currentIndex"
          :categoryList="categoryList"
          @clickCategoryList="clickCategoryList"
        ></left-category>
      </div>
      <div class="right">
        <tab-control
            v-if="isSticky"
            ref="tabControl"
            :isSticky="isSticky"
            :currentIndex="subCurrentIndex"
            :tabList="['综合', '新品', '销量']"
            @tabClick="subTabClick"
          ></tab-control>
      <scroll class="wrapper" ref="scroll"  :listenScroll="true" :goodsData="{}" @scroll="scrollPosition">
        <div class="content">
          <category-detail :subCategoryList="subCategoryList"></category-detail>
          <tab-control
          v-if="!isSticky"
          ref="tabControl"
            :currentIndex="subCurrentIndex"
            :tabList="['综合', '新品', '销量']"
            @tabClick="subTabClick"
          ></tab-control>
          <goods-list :goodsList="goodsList"></goods-list>
        </div>
      </scroll>
      </div>
    </div>
    <back-top v-show="isShowBackTop" @click.native="clickBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import LeftCategory from "./childComps/LeftCategory";
import CategoryDetail from "./childComps/CategoryDetail";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import {ImgLoad} from "common/utils";
import {backTopMinxin} from "common/mixin";
import {
  getCategoryList,
  getSubcategoryList,
  getCategoryDetail,
} from "network/category";
export default {
  name: "Category",

  data() {
    return {
      currentIndex: 0,
      categoryList: [],
      currentMainKey: "0",
      currentMiniWallkey: "0",
      subCurrentIndex: 0,
      tabTitleKey: ["pop", "new", "sell"],
      tabControlOffset: 0, //tabControl的offset值
      isSticky: false, //tabControl是否吸顶判断
      subCategoryList: [],
      goodsList: [],
    };
  },
  mixins: [backTopMinxin],
  components: { NavBar,Scroll, LeftCategory, CategoryDetail, TabControl, GoodsList },
  mounted() {
    this.getCategoryList();
  },

  methods: {
    getCategoryList() {
      getCategoryList().then((res) => {
        this.categoryList = res.category.list;
        this.currentMainKey = res.category.list.length
          ? res.category.list[0].maitKey
          : "0";
        this.currentMiniWallkey = res.category.list.length
          ? res.category.list[0].miniWallkey
          : "0";
        this.getSubcategoryList(this.currentMainKey);
        this.getCategoryDetail(this.currentMiniWallkey, "pop");
      });
    },
    getSubcategoryList(mainKey) {
      getSubcategoryList(mainKey).then((res) => {
        this.subCategoryList = res.list;
        const imgUrl=this.subCategoryList.map(item=>item.image);      
        new ImgLoad(imgUrl).preloadImages().then(res=>{
          console.log(res);
          this.tabControlOffset = this.$refs.tabControl.$el.offsetTop;
        })
      });
    },
    clickCategoryList({ index, maitKey, miniWallkey }) {
      this.currentIndex = index;
      this.currentMainKey = maitKey;
      this.currentMiniWallkey = miniWallkey;

      this.getSubcategoryList(maitKey);
      this.getCategoryDetail(
        this.currentMiniWallkey,
        this.tabTitleKey[this.subCurrentIndex]
      );
    },
    subTabClick(index) {
      this.subCurrentIndex = index;
      this.getCategoryDetail(this.currentMiniWallkey, this.tabTitleKey[index]);
    },
    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.goodsList = res;
      });
    },
     /* 获取滚动对象的offset值与tabControlOffset比较，对tabcontrol作出是否吸顶的操作 */
    scrollPosition({y}) {
      if (-y > this.tabControlOffset) {
        this.isSticky = true;
        this.isShowBackTop = true;
        return;
      }
      this.isSticky = false;
      this.isShowBackTop = false;
    },
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
div.c-wrapper {
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  div {
    &.left {
      width: 30%;
      height: calc(100% - 44px);
      background-color: #efefef;
      position: fixed;
      left: 0;
      top: 44px;
    }
    &.right {
      width: 69%;
      margin-left: 31%;
      padding-top: 10px;
      position: relative;
      div.sticky{
        left: 31%;
        width: 69%;
      }
      div.wrapper{
        height: calc(100vh - 93px);
      }
    }
  }
}
</style>
