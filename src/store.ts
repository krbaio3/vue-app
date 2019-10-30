import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import es from 'vee-validate/dist/locale/es.json';
// import en from 'vee-validate/dist/locale/en.json';
import { vuexPersistence } from '@/plugins/vuex-persist';
// Global Types
import globalTypes from '@/store/types/global';
import { RootState } from './store/types';

Vue.use(Vuex);

const rootStore: StoreOptions<RootState> = {
  state: {
    appName: 'VueJS 2 Vuex Typescript',
    appVersion: String(process.env.VERSION),
    processing: false,
    language: 'es',
  },
  getters: {
    [globalTypes.getters.processing]: (state) => state.processing,
    [globalTypes.getters.language]: (state) => state.language,
    [globalTypes.getters.appName]: (state) => state.appName,
    [globalTypes.getters.appVersion]: (state) => state.appVersion,
  },
  mutations: {
    [globalTypes.mutations.startProcessing](state) {
      state.processing = true;
    },
    [globalTypes.mutations.stopProcessing](state) {
      state.processing = false;
    },
    [globalTypes.mutations.setLanguage](state, lang) {
      state.language = lang;
    },
  },
  actions: {
    [globalTypes.actions.changeLanguage]: ({ commit }, lang) => {
      commit(globalTypes.mutations.setLanguage, lang);
      // Pasar a un strategy pattern
      // FIXME Revisar si esto ya lo hace solo con la nueva version
      // switch (lang) {
      //   case 'en':
      //     Validator.localize('en', ValidatorEn);
      //     break;
      //   case 'es':
      //     Validator.localize('es', ValidatorEs);
      //     break;
      //   default:
      //     Validator.localize('es', ValidatorEs);
      //     break;
      // }
    },
  },
  modules: {},
  plugins: [vuexPersistence.plugin],
};

export const store = new Vuex.Store<RootState>(rootStore);
