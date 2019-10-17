import Vue from 'vue';
import VueLogger from 'vuejs-logger';
import '@/plugins/axios';
import '@/plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Http } from '@/namespaces/Http';
import { options } from './plugins/logger';


Vue.config.productionTip = false;

Vue.use(VueLogger, options);
// tslint:disable-next-line:no-unused-expression
new Http.ApiJWTService();


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
