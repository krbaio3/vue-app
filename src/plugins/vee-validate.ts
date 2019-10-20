import Vue from 'vue';
import * as VeeValidate from 'vee-validate';
import es from 'vee-validate/dist/locale/es.json';
// import en from 'vee-validate/dist/locale/en.json';

// FIXME with vuex, select dynamic language

Vue.use(VeeValidate, {
    inject: false,
    locale: 'es',
    dictonary: {
        es,
    },
});
