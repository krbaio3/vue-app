import Vue from 'vue';
import { i18n } from '@/i18n';
import { localize } from 'vee-validate';
import { store } from '../store';

export const changeLanguage: () => void = () => {
    i18n.locale = store.getters.language;
    const lang = store.getters.language;
    return import(`vee-validate/dist/locale/${lang}.json`).then((locale) => {
        localize(lang, locale);
    });
};
