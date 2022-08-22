import { createI18n, I18n } from 'vue-i18n';

import {
  I18nSettings,
  IPageLocaleOptions,
  GetMsgFunction,
  I18nMessage,
  PageMessage,
  DEFAULT_LOCALE,
} from './languages';

import { getBaseMsgs, getPageMsgs } from './localTranslation';

const buildLoadFunction = function getLoadFunction(
  loadBaseMsg: GetMsgFunction,
  loadPageMsgs: GetMsgFunction
): GetMsgFunction {
  return async function loadMsg(
    options: IPageLocaleOptions
  ): Promise<PageMessage> {
    const baseMsgs = await loadBaseMsg(options);
    const pageMsgs = await loadPageMsgs(options);

    return {
      ...baseMsgs,
      [options.pageName]: pageMsgs,
    };
  };
};

const loadMsgs: GetMsgFunction = buildLoadFunction(getBaseMsgs, getPageMsgs);

let i18n: I18n;

export async function setupI18n({
  initLocale,
  appInstance,
  pageName,
}: I18nSettings) {
  const messages: I18nMessage = {};

  messages[DEFAULT_LOCALE] = await loadMsgs({
    pageName,
    langCode: DEFAULT_LOCALE,
  });

  if (initLocale !== DEFAULT_LOCALE) {
    messages[initLocale] = await loadMsgs({
      pageName,
      langCode: initLocale,
    });
  }

  i18n = createI18n({
    messages,
    legacy: false,
    locale: initLocale,
    fallbackLocale: DEFAULT_LOCALE,
  });

  appInstance.use(i18n);
}

export async function loadPageLocales({
  langCode,
  pageName,
}: IPageLocaleOptions) {
  const pageMsgs = await getPageMsgs({
    langCode,
    pageName,
  });

  i18n.global.setLocaleMessage(langCode, { [pageName]: pageMsgs });
}
