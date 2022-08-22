import { defineStore } from 'pinia';
import { store } from '@/stores';

import {
  languages as availableLanguages,
  ILanguage,
  LOCALES,
} from '@/locales/languages';

interface IBaseStore {
  languages: ILanguage[];
  activeLangAlias: LOCALES;
  isMenuOpened: boolean;
}

export const useBaseStore = defineStore('base', {
  state: (): IBaseStore => ({
    languages: availableLanguages,
    activeLangAlias: LOCALES.EN,
    isMenuOpened: false,
  }),

  actions: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
  },

  getters: {
    activeLang: (state) =>
      state.languages.find((lang) => lang.value === state.activeLangAlias),
  },
});

// Need to be used outside the setup
export function useBaseStoreWithOut() {
  return useBaseStore(store);
}
