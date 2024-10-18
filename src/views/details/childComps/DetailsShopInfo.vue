<template>
  <div class="shop-info-wrapper" v-if="Object.keys(shop).length > 0">
    <div class="shop-name">
      <img v-lazy="shop.logo" alt="" />
      <p>{{ shop.name }}</p>
    </div>
    <div class="info-details">
      <div class="info-data">
        <p class="sum">{{ shop.sells | sellsFilter }}</p>
        <p>总销量</p>
      </div>
      <div class="info-data">
        <p class="sum">{{ shop.goodsCount }}</p>
        <p>全部宝贝</p>
      </div>
      <div class="list-wrapper">
        <p class="info-list" v-for="(item, index) in shop.score" :key="index">
          <span>{{ item.name }}</span>
          <span class="list-score">{{ item.score }}</span>
          <span
            class="list-level"
            :class="[item.isBetter ? 'bgcolor-green' : 'bgcolor-red']"
            >{{ item.isBetter ? "高" : "低" }}</span
          >
        </p>
      </div>
    </div>
    <button>进店逛逛</button>
  </div>
</template>

<script>
export default {
  name: "SupermallDetailsShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellsFilter(value) {
      if (value > 10000) {
        return `${(value / 10000).toFixed(2)}万`;
      } else {
        return value;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
div.shop-info-wrapper {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 0 10px 10px;
  div.shop-name {
    display: flex;
    margin-bottom: 10px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 1px solid #333;
      margin-right: 10px;
    }
    p {
      font-size: 16px;
      line-height: 45px;
    }
  }
  div.info-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    > div {
      width: 25%;
      &.info-data {
        text-align: center;
        p.sum {
          font-size: 18px;
        }
      }
      &.list-wrapper {
        width: 50%;
        padding-left: 30px;
        border-left: 1px solid #999;
        p {
          display: flex;
          justify-content: space-between;
          padding: 2px 0;
          line-height: 1;
          span.list-score {
            color: #5ea732;
          }
          span.list-level {
            color: #fff;
            &.bgcolor-red {
              background-color: #f13e3a;
            }
            &.bgcolor-green {
              background-color: #5ea732;
            }
          }
        }
      }
    }
  }
  button {
    font-size: 14px;
    text-align: center;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    border: 0;
    display: block;
    margin: 0 auto;
  }
}
</style>
