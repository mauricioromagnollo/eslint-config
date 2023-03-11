# @mauricioromagnollo/eslint-config

[![Publish Package][ci-image]][ci-url] ![npm-version] ![downloads]

> My personal ESLint config used by React and Node.js projects based on Standard config.

## **Setup**

**Install the dependencies:**

```bash
npm i -D eslint @mauricioromagnollo/eslint-config
```

**Create a `.eslintrc` file extending the config:**

> You can also use a `.eslintrc.js` or `.eslintrc.json` if you prefer!

To React or Node.js project:

```json
{
  "extends": "@mauricioromagnollo/eslint-config/"
}
```

**Add an "lint" script in your package.json. Example:**

```json
"scripts": {
  "lint": "eslint \"{src,test}/**/*.{ts,js,tsx,jsx}\"",
  "lint:fix": "npm run lint -- --fix"
},
```

## **Visual Studio Code Settings (Optional)**

**If you're using Visual Studio Code, you can install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and add this script in your settings.json:**

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
```

## **Whats included?**

- Standard config base
- React plugin
- React Hooks plugin
- JSX a11y plugin
- Prettier

## **References**

- ESLint: [Docs](https://eslint.org/docs/latest/) | [Rules](https://eslint.org/docs/latest/rules/)
- [ESLint Config Standard](https://github.com/standard/eslint-config-standard)

<!-- BADGES -->

[ci-image]: https://github.com/mauricioromagnollo/eslint-config/actions/workflows/publish.yml/badge.svg?branch=master
[ci-url]: https://github.com/mauricioromagnollo/eslint-config/actions/workflows/publish.yml
[npm-version]: https://img.shields.io/npm/v/@mauricioromagnollo/eslint-config
[downloads]: https://img.shields.io/npm/dt/@mauricioromagnollo/eslint-config
