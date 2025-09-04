/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type --
 * The empty object types are needed in this file in order for the type intellisense to work properly
 */
import enUS from '@/i18n/locales/en-US.json';

type DateTimeSchema = any['en'];
type NumberFormatSchema = any['en'];
export type MessageSchema = typeof enUS;

/**
 * Provide type intellisense for translation keys and date/number formats.
 */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}
  // define the datetime format schema
  export interface DefineDateTimeFormat extends DateTimeSchema {}
  // define the number format schema
  export interface DefineNumberFormat extends NumberFormatSchema {}
}
