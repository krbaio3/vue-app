import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { vuexPersistence } from '@/plugins/vuex-persist';
import { todoModule } from '@/store/modules/todo';
import { RootState } from '@/store/types';
import { localize } from 'vee-validate';
import {i18n} from './i18n';

Vue.use(Vuex);

const rootStore: StoreOptions<RootState> = {
  state: {
    appName: 'VueJS 2 Vuex Typescript',
    appVersion: String(process.env.VERSION),
    processing: false,
    language: 'es',
  },
  getters: {
    processing: (state: RootState) => state.processing,
    language: (state: RootState) => state.language,
    appName: (state: RootState) => state.appName,
    appVersion: (state: RootState) => state.appVersion,
  },
  mutations: {
    startProcessing(state: RootState) {
      state.processing = true;
    },
    stopProcessing(state: RootState) {
      state.processing = false;
    },
    setLanguage(state: RootState, payload) {
      state.language = payload.lang;
    },
  },
  actions: {
    changeLanguage: ({ commit }, lang) => {
      commit('setLanguage', lang);
    },
  },
  modules: {
    todoModule,
  },
  plugins: [vuexPersistence.plugin],
};

export const store = new Vuex.Store<RootState>(rootStore);
