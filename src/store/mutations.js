import { ADD_COUNTER, ADD_TO_CART, SUB_COUNTER, DEL_GOODS } from "./mutations-types";
//mutation唯一的目的，修改state中的状态
//但是mutation方法规则是比较单一的，一个方法只做一件事情,所以addCart方法应放到actions中
// addCart(state, payload) {
// }
export default {
  [ADD_COUNTER](state, payload) {
    payload.count += 1;
  },
  [SUB_COUNTER](state, payload) {
    payload.count -= 1;
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  },
  [DEL_GOODS](state, payload) {
    state.cartList.splice(payload, 1);
  },
  updateAllChecked(state, payload) {
    if (!payload) {
      state.cartList.forEach(item => item.checked = false);
    } else {
      state.cartList.forEach(item => item.checked = true);
    }
  },
  updateSingleChecked(state, { iid, isChecked }) {
    state.cartList.find(item =>iid === item.iid).checked = isChecked;
  }
};
