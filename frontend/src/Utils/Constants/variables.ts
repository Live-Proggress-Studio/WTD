import { symbols } from './symbols';
//@ Глобальные переменные

//@ Configuration
//@ .env variables
export const API_URL = import.meta.env.VITE_REACT_API_URL;

//@ Перемнные с описанием приложения и источниками
export const APP = {
  NAME: 'WTD',
  FULLNAME: 'WHAT TO DO?',
  VERSION: '0.0.3 alpha',
  AUTHOR: 'LPS - Live Progress Studio',
  DESCRIPTION: 'WTD - What To DO | Life calendar & Planner',
  //! Стоит попробовать использовать в ссылках на источники метод `dns-prefetching`
  //* пример: <a rel="dns-prefetching" href={APP.GITHUB}></a>
  SOCIAL_MEDIA: {
    TELEGRAM: 'https://t.me/lps_studio',
    GITHUB: 'https://github.com/Live-Proggress-Studio/WTD',
  },
};

//@ Сочетания клавиш
//TODO: Нужно сделать страницу со всеми сочитаниями клавиш
export const Keyboard = {
  SEARCH: `${symbols.ctrl}+f`,
  MENU: `m`,
};

//@ Locales
//? Список поддерживаемых языков
export const Locales: {
  [key: string]: {
    title: string;
  };
} = {
  en: {
    title: 'English',
  },
  ru: {
    title: 'Русский',
  },
};
