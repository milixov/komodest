import i18n from 'i18next';

import enKeys from './lang/en.json'

i18n
    .init({
        fallbackLng: 'en',
        resources: {
            en: enKeys
        },
        ns: ['common'],
        defaultNS: 'common',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;