import Vue from 'vue';
import Vuex from 'vuex';

import { validate } from 'vee-validate';
import es from 'vee-validate/dist/locale/es.json';
// import en from 'vee-validate/dist/locale/en.json';
import { vuexPersistence } from '@/plugins/vuex-persist';
// Global Types
import globalTypes from '@/types/global';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    processing: false,
    language: 'es',
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
  getters: {
    [globalTypes.getters.processing]: (state) => state.processing,
    [globalTypes.getters.language]: (state) => state.language,
  },
  actions: {
    [globalTypes.actions.changeLanguage]: ({
      commit,
    },                                     lang) => {
      commit(globalTypes.mutations.setLanguage, lang);
      // Pasar a un strategy pattern
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
});
