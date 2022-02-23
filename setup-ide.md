# Setup your IDE

We recommend you using [Webstorm](https://www.jetbrains.com/es-es/webstorm/) or [VSCode](https://code.visualstudio.com/)



## [Extensions](#extensions) 

When you're setting your IDE these are some of the extensions that you may consider installing. This are the ones used and recommended by the Z1 team. 

You don't need to install all of them. Just check the list and keep the ones that you find work best for you.

PX to REM, Prettier and ESLint are pretty mandatory, though. 

> Open a new PR to recommend a new extension: [How to collaborate](./how-to-collaborate.md)


###### [[PX to REM](#px-to-rem)]
 This extension is essential to the front end workflow at Z1 to translate our designs (made with pixels) to rem. It enables you with a shortcut for easily converting values without any additional calculations.
-  Vscode:  https://marketplace.visualstudio.com/items?itemName=sainoba.px-to-rem

###### [[Prettier](#prettier)]
Prettier is a core tool we include in all our projects to aggree on code formatting style and not obsessing over it. 

**Set up**
After install it, you will need to set it up so it only works when it detects a prettier configuration file. That way we'll avoid to unintentionally change the format of a codebase. 

At the configuration options, set `prettier.requireConfig` to `true` and `editor.formatOnSave` to true.

Note that now you'll always need a `.prettierrc` file with at least an empty object on it (so it will use all default rules) to format your files.

- Vscode: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- More info: https://btholt.github.io/complete-intro-to-react-v6/prettier

###### [[ESLint](#eslint)]
Eslint is the other essential tool in our belt for enforcing code style. The difference with Prettier is that, while Prettier is focused on syntax, ESLint is focused on the behavior of our code. You can add the ESLint extension to highlight errors and provide you with additional information.

Likewise Prettier, you can add some configurations to your settings to fix problems on save:

```javascript
	"eslint.validate": ["javascript", "typescript", "typescriptreact"],
	"editor.codeActionsOnSave": { "source.fixAll.eslint": true }
```

- Vscode: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

###### [[Auto Close Tag](#auto-close-tag)]
Automatically add HTML/XML close tag when you're creating a new element. Almost mandatory to improve your workflow.
- Vscode: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag

###### [[Auto Rename Tag](#auto-rename-tag)]
Automatically rename both HTML/XML open and close tag at once. Almost mandatory to improve your workflow
	- Vscode: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

###### [[Rainbow Brackets](#rainbow-brackets)]
Add colors for pairs of brackers for identify them easily and don't miss anyone left open.
- Vscode: https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets

###### [[Accesibility Linter](#accesibility-linter)]
Linting for accesibility error and omissions
- Vscode: https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter

###### [[Code Spell Checker](#code-spell-checker)]
Linting for English spelling. Works with camelCase
- Vscode: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

###### [[Git Lens](#git-lens)]
 Support git blame annotations for getting information on who last edited a line and when.
- Vscode: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens


###### [[Error Lens](#error-lens)]
Improve highlighting of errors, warnings and other language diagnostics
- Vscode: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens


###### [[ES7+ React/Redux/React-Native](#react-snippets)]
React Snippets. See all [here](https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- Vscode:  https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

###### [[GraphQL](#graphql)]
Syntax highlighting and autocompletion for GraphQL


###### [[VSCode Styled Components](#vscode-styled-components)]
Syntax highlighting and IntelliSense for `styled-components`.
- VScode: https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components


###### [[Styled Components Snippets](#styled-components)]
Import `styled-components` by typing `imsc`, or use prop theme (`${({ theme }) => theme.${1}}`) with `scpt`.
- Vscode: Name: https://marketplace.visualstudio.com/items?itemName=jonkwheeler.styled-components-snippets


###### [[Github Copilot](#github-copilot)]
AI Pair Programmer, like an autocomplete on steroids.
- Install: https://copilot.github.com/


###### [[Emmet](#emmet)]
Emmet is a special syntax that allows you to write markup blazing fast. For this one you don't need to install anything since it's already integrated on your IDE. 
- Vscode: https://code.visualstudio.com/docs/editor/emmet
- Webstorm: https://www.jetbrains.com/help/webstorm/settings-emmet.html