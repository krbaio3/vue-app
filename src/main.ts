import Vue from 'vue';
import VueLogger from 'vuejs-logger';

import '@/plugins/axios';
import '@/plugins/bootstrap-vue';
import '@/plugins/vee-validate';
import '@/plugins/block-ui';
import { options } from '@/plugins/logger';

import { Http } from '@/namespaces/Http';

import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';


Vue.config.productionTip = false;

Vue.use(VueLogger, options);
// tslint:disable-next-line:no-unused-expression
new Http.ApiJWTService();


new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
