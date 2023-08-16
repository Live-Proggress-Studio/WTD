import React from 'react';
import { symbols } from './Utils/symbols'
//@ Глобальные переменные

//@ Configuration
//@ .env variables
export const API_URL = import.meta.env.VITE_REACT_API_URL

//@ Перемнные с описанием приложения и источниками
export const APP = {
  NAME: "WTD",
  VERSION: "0.0.1",
  AUTHOR: "LPS - Live Progress Studio",
  DESCRIPTION: "WTD - What To DO | Life calendar & Planner",
  SOCIAL_MEDIA: {
    TELEGRAM: "https://t.me/lps_studio",
    GITHUB: "https://github.com/Live-Proggress-Studio/WTD",
  },
};

//@ Сочетания клавиш
//TODO: Нужно сделать страницу со всеми сочитаниями клавиш
export const Keyboard = {
  SEARCH: `${symbols.ctrl}+f`,
  MENU: `m`,
};