import { type useI18n, createI18n } from 'vue-i18n';
import deDE from './locales/de-DE.json';
import enUS from './locales/en-US.json';

export type T = ReturnType<typeof useI18n>['t'];

export const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'de-DE': deDE,
    'en-US': enUS,
  },
});
