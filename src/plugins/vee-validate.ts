import Vue from 'vue';
import es from 'vee-validate/dist/locale/es.json';
import en from 'vee-validate/dist/locale/en.json';

// FIXME with vuex, select dynamic language
import { ValidationProvider, ValidationObserver, localize, extend, configure } from 'vee-validate';
import { i18n } from '@/i18n';
import { required, email, min } from 'vee-validate/dist/rules';

// Si se quieren importar todas las validaciones por defecto, se debe de hacer el import de ValidationProvider de:
// import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
import { store } from '../store';
import { changeLanguage } from '../helpers/changeLanguage';
// Si no lo hacemos asi, hay que importar las validaciones que queramos o crearlas.

// Add the required rule
extend('required', required);

// Add the email rule
extend('email', email);

// Add the min rule
extend('min', min);

// Install English and Spanish locales.
localize({
    en,
    es,
});
// Activate the language
localize(store.getters.language);
// const dm: string | ValidationMessageGenerator | undefined =
//     (field: string, values: Record<string, any>) => {
//         values._field_ = i18n.t(`fields.${field}`);
//         return (i18n.t(`validation.${values._rule_}`, values)) as string | ValidationMessageGenerator;
//     };
configure({
    // @ts-ignore
    defaultMessage: (field, values) => {
        // @ts-ignore
        values._field_ = i18n.t(`fields.${field}`);
        // @ts-ignore
        return i18n.t(`validation.${values._rule_}`, values);
    },
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
