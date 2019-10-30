import { namespace } from '@/utils/namespace';

export default namespace('global', {
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
