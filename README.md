# WTD - What To Do | Life Calendar

## React + TypeScript + Vite + Theme Toggler (localStorage)

![dark_preview](https://cdn.discordapp.com/attachments/650681889308278785/1137142086509019227/image.png)

![light_preview](https://cdn.discordapp.com/attachments/650681889308278785/1137142043693563904/image.png)

## React + TypeScript + Vite minimal template with theme switcher Works with `.css`, `.scss`, `.js` and `.ts`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## AUTHORS

| Photo | Name | Role |
|-------|------|------|
|  <img width="100px" src="./public/AUTHORS/Авдюшин.png" alt="Авдюшин Добрыня"/>    | [Авдюшин Добрыня](https://github.com/Avdushin) | Автор идеи, Full-stack dev
|  <img width="100px" src="./public/AUTHORS/Львов.jpg" alt="Львов Никита"/>    | [Никита Львов](https://github.com/Slark58) | Full-stack dev

<div>
   <a href="https://github.com/Live-Proggress-Studio">© 2023 LPS</a>
</div>