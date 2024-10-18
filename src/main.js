import Vue from 'vue'
import App from './App.vue'
import router from  './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import toast from 'components/common/toast'
Vue.config.productionTip = false
const loadimage = require('assets/img/common/placeholder.png')
const errorimage = require('assets/img/common/placeholder.png')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
});
Vue.use(toast);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
