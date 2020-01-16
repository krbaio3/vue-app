import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { vuexPersistence } from '@/plugins/vuex-persist';
import { todoModule } from '@/store/modules/todo';
import { RootState } from '@/store/types';
import { authModule } from './store/modules/auth/index';

Vue.use(Vuex);

const rootStore: StoreOptions<RootState> = {
  state: {
    name: 'VueJS 2 Vuex Typescript',
    appName: String(process.env.NAME_APP),
    appVersion: String(process.env.VERSION),
    processing: false,
    language: 'es',
  },
  getters: {
    processing: (state: RootState) => state.processing,
    language: (state: RootState) => state.language,
    name: (state: RootState) => state.name,
    appName: (state: RootState) => state.appName,
    appVersion: (state: RootState) => state.appVersion,
  },
  mutations: {
    startProcessing (state: RootState) {
      state.processing = true;
    },
    stopProcessing (state: RootState) {
      state.processing = false;
    },
    setLanguage (state: RootState, payload) {
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
    authModule,
  },
  plugins: [vuexPersistence.plugin],
};

export const store = new Vuex.Store<RootState>(rootStore);
