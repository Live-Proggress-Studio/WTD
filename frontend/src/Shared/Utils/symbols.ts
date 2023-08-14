//@ Файл с раскладкой клавиатур для разных OS
//? получаем текущую ОС
export const isMacOS = navigator.platform.toLowerCase().indexOf('mac') !== -1;
export const isLinux = navigator.platform.toLowerCase().indexOf('mac') !== -1;

//@ Пример использования: `${symbols.ctrl}+f`
//@ вывод: mac: `⌘+f` | windows: `ctrl+f`
export const symbols = {
  //? Сопоставление раскладки для mac и windows
  ctrl: isMacOS ? '⌘' : 'ctrl',
  alt: isMacOS ? '⌥' : 'alt',
  //? Меняем `win` -> `meta` для Linux 
  win: isLinux ? 'meta' : 'win',
};