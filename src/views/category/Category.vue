<template>
  <div class="category">
    <nav-bar  class="nav-bar">
      <div  slot="center">商品分类</div>
    </nav-bar>
    <div class="c-wrapper">
      <div class="left"><left-category :currentIndex="currentIndex" :categoryList="categoryList" @clickCategoryList="clickCategoryList"></left-category></div>
      <div class="right">
        <category-detail :subCategoryList="subCategoryList"></category-detail>
        <tab-control :currentIndex="subCurrentIndex" :tabList="['综合','新品','销量']" @tabClick="subTabClick"></tab-control>
        <goods-list  :goodsList="goodsList"></goods-list>
        
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar';
import LeftCategory from './childComps/LeftCategory';
import CategoryDetail from './childComps/CategoryDetail';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from "components/content/goods/GoodsList";
import {getCategoryList,getSubcategoryList,getCategoryDetail} from 'network/category';
export default {
  name: 'Category',

  data() {
    return {
      currentIndex:0,
      categoryList:[],
      currentMainKey:'0',
      currentMiniWallkey:'0',
      subCurrentIndex:0,
      tabTitleKey:['pop','new','sell'],
      subCategoryList:[],
      goodsList:[],
    };
  },
  components: { NavBar,LeftCategory,CategoryDetail,TabControl,GoodsList },
  mounted() {
    this.getCategoryList();
  },

  methods: {
    getCategoryList(){
      getCategoryList().then(res=>{
        this.categoryList=res.category.list;
        this.currentMainKey=res.category.list.length?res.category.list[0].maitKey:'0';
        this.currentMiniWallkey=res.category.list.length?res.category.list[0].miniWallkey:'0';
        this.getSubcategoryList(this.currentMainKey);
        this.getCategoryDetail(this.currentMiniWallkey,'pop');
      })
    },
    getSubcategoryList(mainKey){
      getSubcategoryList(mainKey).then(res=>{
        this.subCategoryList=res.list;
        
      })
    },
    clickCategoryList({index,maitKey,miniWallkey}){
      this.currentIndex=index;
      this.currentMainKey=maitKey;
      this.currentMiniWallkey=miniWallkey;

      this.getSubcategoryList(maitKey);
      this.getCategoryDetail(this.currentMiniWallkey,this.tabTitleKey[this.subCurrentIndex]);
    },
    subTabClick(index){
      this.subCurrentIndex=index;
      this.getCategoryDetail(this.currentMiniWallkey,this.tabTitleKey[index]);
    },
    getCategoryDetail(miniWallkey,type){
      getCategoryDetail(miniWallkey,type).then(res=>{
        this.goodsList=res;
        
      })
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
  div.c-wrapper{
    margin-top: 44px;
    display: flex;
    justify-content: space-between;
    div{
      &.left{
        width: 30%;
      }
      &.right{width: 70%;}
    }
  }
</style>