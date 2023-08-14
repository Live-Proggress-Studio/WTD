//@ Файл с раскладкой клавиатур для разных OS
//? получаем текущую ОС
export const isMacOS = navigator.platform.toLowerCase().indexOf('mac') !== -1;

//@ пример использования
//@ `${symbols.ctrl}+f`
//@ вывод: mac: `⌘+f` | windows: `ctrl+f`
export const symbols = {
  ctrl: isMacOS ? '⌘' : 'ctrl',
  alt: isMacOS ? '⌥' : 'alt',
};