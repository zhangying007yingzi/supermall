<template>
  <div class="basic-info-wrapper" v-if="Object.keys(goods).length !== 0">
    <h1>{{ goods.title }}</h1>
    <p>
      <span class="new-price">{{ goods.newPrice }}</span
      ><span class="old-price">{{ goods.oldPrice }}</span>
    </p>
    <div class="discout" v-if="goods.discount">
      {{ goods.discount }}
    </div>
    <div class="other">
      <span v-for="(item, index) in columns" :key="index">{{ item }}</span>
      <span>{{ services }}</span>
    </div>
    <div class="service">
      <p v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupermallDetailsBasic",

  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    columns() {
      const columns = this.goods.columns;
      columns.splice(2, 1);
      return columns;
    },
    services() {
      return this.goods.services[this.goods.services.length - 1].name;
    },
  },
};
</script>
<style lang="scss" scoped>
div.basic-info-wrapper {
  background-color: #fff;
  padding: 0 10px 10px;
  margin-bottom: 10px;
  h1 {
    font-size: 14px;
    margin-bottom: 5px;
  }
  p {
    span {
      display: inline-block;
      &.new-price {
        font-size: 24px;
        color: var(--color-high-text);
        padding-right: 10px;
      }
      &.old-price {
        text-decoration: line-through;
      }
    }
  }
  div.other {
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  div.service {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    p {
      line-height: 14px;
      display: flex;
      justify-content: flex-start;
      img {
        width: 14px;
        height: 14px;
        margin-right: 2px;
      }
    }
  }
}
</style>
