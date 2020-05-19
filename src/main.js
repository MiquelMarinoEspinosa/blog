import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.prototype.$http = axios;
Vue.use(VueRouter);

Vue.directive('theme', {
  bind(el, binding){
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px';
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

Vue.filter('snippet', (value) => {
  return value.slice(0,100) + '...';
});

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
