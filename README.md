# @mauricioromagnollo/eslint-config

> My personal ESLint config used by React and Node.js projects based on Standard config.

## **Setup**

**Install the dependencies:**

```bash
npm i -D eslint @mauricioromagnollo/eslint-config
```

**Create a `.eslintrc` file extending the config:**

> You can also use a `.eslintrc.js` or `.eslintrc.json` if you prefer.

To React project:

```json
{
  "extends": "@mauricioromagnollo/eslint-config/react"
}
```

To Node.js project:

```json
{
  "extends": "@mauricioromagnollo/eslint-config/node"
}
```

**Add an "lint" script in your package.json. Example:**

```json
"scripts": {
  "lint": "eslint \"{src,test}/**/*.{ts,js,tsx,jsx}\"",
  "lint:fix": "npm run lint -- --fix"
},
```

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

- [ESlint Docs](https://eslint.org/docs/latest/)
- [ESlint Rules](https://eslint.org/docs/latest/rules/)
