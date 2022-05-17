# How to config Stylelint + Next.js + StyledComponent and not die trying

1. First of all, we need to install a bunch of dependencies:

```sh
yarn install stylelint stylelint-a11y stylelint-config-rational-order stylelint-config-recommended stylelint-config-standard stylelint-config-styled-components stylelint-order stylelint-use-logical @stylelint/postcss-css-in-js postcss postcss-scss postcss-syntax
```

2. We need to create a `.stylelintrc.js` and config our rules:

```js
module.exports = {
  customSyntax: "@stylelint/postcss-css-in-js",
  extends: [
    "stylelint-config-recommended",
    "stylelint-a11y/recommended",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-use-logical",
    "stylelint-a11y",
    "stylelint-config-rational-order/plugin",
  ],
  rules: {
    "order/order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": true,
      },
    ],
    "csstools/use-logical": true,
    "unit-disallowed-list": [
      ["px"],
      {
        ignoreProperties: {
          px: ["/^border/", "box-shadow", "clip"],
        },
        severity: "warning",
      },
    ],
    "function-no-unknown": [null],
    /* Styled components conditional blocks are not supported in css in js stylelint's implementation, and it throws false positives */
    "no-duplicate-selectors": null,
    "no-empty-source": null,
    "no-descending-specificity": null,
  },
};
```

3. We need to install [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extension for Visual Studio Code and add a custom configuration in `.vscode/settings.json`. You can find it at _Code > Preferences > Settings > Extensions > Stylelint > Edit in settings.json_:

```json
{
  "css.validate": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.suggestSelection": "first",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "eslint.format.enable": true,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.enable": true,
  "stylelint.packageManager": "yarn",
  "stylelint.validate": [
    "css",
    "postcss",
    "scss",
    "typescript",
    "typescriptreact"
  ]
}
```

4. Add lint script in your `package.json`:

```json
{
  // ...
  "scripts: {
    // ...
    "lint:css": "stylelint './src/**/styles.{ts,tsx}'",
    // ...
  }
}
```

5. (Optional) Add lint script in your `.lintstagedrc.js`:

```js
'styles.ts': 'stylelint',
```

6. ⚠️ SPOILER: This will be tricky. We need to modify our babel config:

```js
const isDev = process.env.NODE_ENV === "development";

let config = {
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        displayName: isDev,
        fileName: isDev,
        meaninglessFileNames: ["index", "styles"],
        minify: !isDev,
        pure: true,
        ssr: true,
      },
    ],
  ],
};

// if the process using the babel config is stylelint
// or if the command summons stylelint, remove the babel config
if (
  (process.env._ && process.env._.includes("stylelint")) ||
  process.argv[1].includes("stylelint")
) {
  config = {};
}

module.exports = config;
```

7. Add a project settings directory. Create a `.vscode` folder and place this two files inside with the following code:

- `extensions.json`

```
{
  "recommendations": [
    "stylelint.vscode-stylelint",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

- `settings.json`

```
{
  "css.validate": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.suggestSelection": "first",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "eslint.format.enable": true,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.enable": true,
  "stylelint.packageManager": "yarn",
  "stylelint.validate": [
    "css",
    "postcss",
    "scss",
    "typescript",
    "typescriptreact"
  ]
}
```

8. And that's all 🚀
