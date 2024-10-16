import Vue from "vue";
import Vuex from "vuex";
import { ADD_COUNTER, ADD_TO_CART } from "./mutations-types";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    carList: [],
  },
  getters: {
    cartList(state) {
      console.log(state);
      
      return state.cartList;
    }
  },
  //mutation唯一的目的，修改state中的状态
  //但是mutation方法规则是比较单一的，一个方法只做一件事情,所以addCart方法应放到actions中
  // addCart(state, payload) {
  // }
  mutations: {
    [ADD_COUNTER](state, payload) {
      console.log(payload);
      
      payload.count += 1;
    },
    [ADD_TO_CART](state, payload) {
      state.carList.push(payload);
    },
  },
  actions: {
    addCart({commit,state}, payload) { 
      // return new Promise((resolve, reject) => {
        let product = state.carList.find((el) => el.iid === payload.iid);
        if (product) {
          commit(ADD_COUNTER, product);
          // resolve('+1')
        } else {
          payload.count = 1;
          commit(ADD_TO_CART, payload);
          // resolve('=1')
        }
        
      // })
    },
  },
});
export default store;
