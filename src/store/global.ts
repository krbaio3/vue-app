import { namespace } from '@/utils/namespace';

export const globalTypes = namespace('global', {
    actions: [
        'changeLanguage',
    ],
    getters: [
        'processing',
        'language',
        'appVersion',
        'appName',
    ],
    mutations: [
        'startProcessing',
        'stopProcessing',
        'setLanguage',
    ],
});
