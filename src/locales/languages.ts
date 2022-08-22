import { App as Application } from 'vue';

export enum LOCALES {
  EN = 'en',
  UK = 'uk',
}

export const DEFAULT_LOCALE: LOCALES = LOCALES.EN;

export function isLangCodeType(code: string): code is LOCALES {
  const values = Object.values(LOCALES); // ['en']
  return values.includes(code as LOCALES);
}

export interface I18nSettings {
  appInstance: Application;
  initLocale: LOCALES;
  pageName: string;
}

export interface IPageLocaleOptions {
  langCode: LOCALES;
  pageName: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PageMessage = Record<string, any>;

export type I18nMessage = Partial<Record<LOCALES, PageMessage>>;

export type GetMsgFunction = (
  options: IPageLocaleOptions
) => Promise<PageMessage>;

export interface ILanguage {
  value: LOCALES;
  label: string;
}

export const languages: ILanguage[] = [
  {
    value: LOCALES.EN,
    label: 'English',
  },
];
