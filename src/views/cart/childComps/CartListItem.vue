<template>
  <div class="cartItem-wrapper">
    <div class="checkbox">
      <check-button :checkState="cartItem.checked" :iid="cartItem.iid" @change.native="ChangeCartChecked($event,cartItem.iid)"></check-button>
    </div>
    <div class="left"><img :src="cartItem.image" alt="" /></div>
    <div class="right">
      <h2>{{ cartItem.title }}</h2>
      <p class="desc">{{ cartItem.desc }}</p>
      <p class="price-related">
        <span class="price">{{ cartItem.realPrice }}</span
        ><span class="count">
          <button type="button" @click="updateCouter(cartItem.iid,false)">-</button>
          {{ cartItem.count }}
           <button type="button" @click="updateCouter(cartItem.iid,true)">+</button>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapMutations,mapActions } from "vuex";
export default {
  name: "SupermallCartListItem",

  data() {
    return {};
  },
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: { CheckButton },
  methods: {
    ...mapMutations(['updateSingleChecked','updateCount']),
    ...mapActions(['updateCount']),
    ChangeCartChecked(el,iid){
      console.log(iid,el);
      
      let isChecked = el.target.checked;
      this.updateSingleChecked({iid,isChecked});

    },
    updateCouter(iid,flag){
      console.log(iid,flag);
      
     this.updateCount({iid,flag});
    }
  },
};
</script>
<style lang="scss" scoped>
div.cartItem-wrapper {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  > div {
    &.checkbox {
      width: 20px;
      margin: auto;
    }
    &.left {
      margin-right: 10px;
      img {
        width: 80px;
        height: 100px;
        display: block;
        border-radius: 5px;
      }
    }
    &.right {
      width: calc(100% - 110px);
      height: 100px;
      display: flex;
      flex-wrap: wrap;
      h2 {
        font-size: 18px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        width: 100%;
        &.desc {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &.price-related {
          align-self: flex-end;
          display: flex;
          justify-content: space-between;
          span.price {
            font-size: 18px;
            color: orangered;
          }
        }
      }
    }
  }
}
</style>
