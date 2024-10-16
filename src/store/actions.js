import {
  ADD_COUNTER,
  ADD_TO_CART,
  SUB_COUNTER,
  DEL_GOODS,
} from "./mutations-types";
export default {
  addCart({ commit, state }, payload) {
    // return new Promise((resolve, reject) => {
    let product = state.cartList.find((el) => el.iid === payload.iid);
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
  updateCount({ commit, state }, { iid, flag }) {
    const currentGood = state.cartList.find((item) => iid === item.iid);
    if (flag) {
      commit(ADD_COUNTER, currentGood);
    } else {
      if (currentGood.count > 1) {
        commit(SUB_COUNTER, currentGood);
      } else {
        const currentGoodIndex = state.cartList.findIndex(
          (item) => iid === item.iid
        );
        commit(DEL_GOODS, currentGoodIndex);
      }
    }
  },
};
