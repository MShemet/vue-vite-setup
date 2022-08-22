import { GetMsgFunction } from './languages';

export const getBaseMsgs: GetMsgFunction = async ({ langCode }) => {
  const msgModule = await import(`./${langCode}/base.json`);

  return msgModule.default ?? {};
};

export const getPageMsgs: GetMsgFunction = async (options) => {
  const msgModule = await import(
    `./${options.langCode}/${options.pageName}.json`
  );

  return msgModule.default ?? {};
};
