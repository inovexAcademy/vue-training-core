import config from '@/config';
import { type useI18n, createI18n } from 'vue-i18n';
import enUS from './locales/en-US.json';

export type T = ReturnType<typeof useI18n>['t'];

export const i18n = createI18n({
  locale: 'en-US',
  messages: { 'en-US': enUS },
  supportedLocales: Object.keys(config.i18n.locales),
  loadLocaleFunc: async locale => {
    const module = await import(`./locales/${locale}.json`);
    return module.default;
  },
});
