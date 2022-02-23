
[**📖 Guide: Start a new project**](https://github.com/z1digitalstudio/developers-handbook/blob/master/guide-start-new-project/00-start-here)


## [Configure ESLint & Prettier](#configure-eslint-prettier) 

This document is focused on configuring **static analysis tools** for our project.

> ⚡️ Static code analysis is the process of verifying that your code meets certain expectations without actually running it. It allows developers to improve the codebase's readability and consistency while finding possible bugs and anti-patterns. Static analysis tools help us to validate the modern development standards. It can ensure all the team is writing high-quality code consistently across the board.

Currently, we set up our projects with:
  1. [ESLint](#step-new001)
  2. [Prettier](#step-new002)
  3. [Lint Staged](#step-new003)
  4. [Commitlint](#step-new004)
  5. [Git Hooks](#step-new005)
  6. [Absolute imports](#step-new006)


#### [Step [001](#step-new001)] Configure ESLint
>📓 ESLint Docs [https://eslint.org/docs/user-guide/](https://eslint.org/docs/user-guide/)

Is the most widely used ***linter*** — an type of static analysis tool that catches inconsistent formatting, styling and possible errors.  ESLint uses rules that you can configure or customize based on your needs.

Therefore, ESLint is a pretty flexible tool, extendable through plugins. For this setup we need to install the following packages:

````bash
yarn add -D 
eslint 
prettier 
eslint-plugin-prettier 
@typescript-eslint/eslint-plugin 
@typescript-eslint/parser 
eslint-config-airbnb-typescript 
eslint-config-prettier 
eslint-plugin-import 
eslint-plugin-react 
eslint-plugin-react-hooks 
@z1digitalstudio/eslint-config-imports

````

We need to create a configuration file, `.eslintrc.js`,  to specify the use of this packages and our linting rules. This is the base configuration file we use for Z1 projects:

````js
module.exports = {
  root: true,
  extends: [
		'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
    '@z1digitalstudio/eslint-config-imports',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  ignorePatterns: ['!.*.js', '!.storybook'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        '@z1digitalstudio/eslint-config-imports',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint', 'react-hooks'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      // Rules that apply only to typescript files should go here
      rules: {
        // Disabled because Typescript takes care of that already.
        '@typescript-eslint/no-unused-vars': 'off',
        // This rule is enabled by eslint-config-airbnb and disabled by
        // eslint-plugin-prettier:
        // https://github.com/prettier/eslint-plugin-prettier/issues/65
        // This is a rare issue and we feel like this rule improves the
        // consistency of the code so we keep it on.
        'arrow-body-style': 'warn',
        // Typescript takes care of that already
        'import/no-unresolved': 'off',
        // The "a" element does require the "href" attribute, but it's next's
        // Link job to pass it using "passHref".
        'jsx-a11y/anchor-is-valid': 'off',
        // "void" is useful to purposefully ignore the result of promises
        'no-void': 'off',
        // "TO-DO" comments (with a hyphen so the IDE doesn't pick it up) are
        // usually left to indicate that something shouldn't be committed. In
        // the event that we actually want to commit a warning comment, we
        // should add a card to the issue tracker instead.
        'no-warning-comments': 'warn',
        // Contrary to what we'd expect, eslint-config-airbnb doesn't enable
        // this rule, so we enable it manually.
        'react/jsx-key': [
          'warn',
          {
            // This is disabled by default to prevent a breaking change. We are
            // not affected by that so we enable it.
            // https://github.com/yannickcr/eslint-plugin-react/blob/c2a790a3472eea0f6de984bdc3ee2a62197417fb/docs/rules/jsx-key.md#checkfragmentshorthand-default-false
            checkFragmentShorthand: true,
          },
        ],
        // Disabled because we use TypeScript, so we don't care about PropTypes
        'react/prop-types': 'off',
        // Disabled because as of React 17 this is not necessary
        'react/react-in-jsx-scope': 'off',
        // Disabled because there's scalable way of providing exceptions for
        // this rule. In principle, I agree with it: we shouldn't spread props
        // into our component. But in practice, it gets in the way of libraries
        // like react-hook-form or react-dropzone. Enforcing that our custom
        // components don't accept spread props should therefore be done at the
        // pull request review layer.
        'react/jsx-props-no-spreading': 'off',
      },
      overrides: [
        // Always prefer default exports, except in files where typically we'd
        // have multiple exported members, although not always.
        {
          files: [
            'src/components/**/logic.ts',
            'src/components/**/styles.ts',
            'src/components/**/styles.tsx',
            'src/containers/**/logic.ts',
            'src/containers/**/styles.ts',
            'src/graphql/variables/**/*.ts',
          ],
          rules: {
            'import/prefer-default-export': 'off',
          },
        },
        // Always enforce exported functions to be typed, except in specific
        // cases where we want the return type to be inferred.
        {
          files: [
            'src/components/**/logic.ts',
            'src/containers/**/connect.ts',
            'src/containers/**/logic.ts',
            'src/graphql/hooks/**/*.ts',
            'src/model/**/*.ts',
          ],
          rules: {
            '@typescript-eslint/explicit-module-boundary-types': 'off',
          },
        },
      ],
    },
    {
      files: ['.storybook/*.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: { jsx: true },
      },
    },
  ],
  // Only rules that apply to both javascript and typescript files should go
  // here. Typescript rules should go in the overrides section.
  rules: {
    'arrow-body-style': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'prettier/prettier': 'warn',
  },
};
````

Finally, we need to add some scripts at our `package.json` file to lint our codebase:
````bash
"scripts": {
	"lint": "eslint .*.js *.js .storybook/*.js src --max-warnings=0", 
	"lint:fix": "yarn lint --fix",
	...
},
````

If you are using the [new JSX transform from React 17](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports), extend [react/jsx-runtime](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/index.js#L163-L176) in your eslint config (add "plugin:react/jsx-runtime" to "extends") to disable the relevant rules. Source: [https://github.com/yannickcr/eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

You may notice we're installing `eslint` and `prettier` at the same time. Both tools have different purpose but they may overlay in their responsabilities, and we need to indicate them how to collaborate together. [Learn more](https://prettier.io/docs/en/integrating-with-linters.html)

#### [Step [002](#step-new002)] Configure Prettier

> 📓 Prettier Docs [https://prettier.io/docs/en/integrating-with-linters.html](https://prettier.io/docs/en/integrating-with-linters.html)

Prettier is great way to make sure everyone on your development team is using the same formatting and style in their code. It automatically fixes code that does not conform to its style guide agreed on the configuration file.

Create the configuration file, `.prettierrc.js`:

````javascript
	module.exports = { 
		bracketSpacing: true, 
		bracketSameLine: false, 
		semi: true, 
		singleQuote: true, 
		trailingComma: 'all', 
	};
````

You can choose whatever styling rules you prefer and consensuate with your team. 

> It's very recommended that you install the **ESlint** and **Prettier** extensions at the IDE of your choosing. Check the list of [Recommended IDE Extensions](../setup-ide/#prettier) for more info.



#### [Step [003](#step-new003)] Lint Staged

> 📓 [Lint Staged Docs](https://github.com/okonet/lint-staged)

Even if you set up linting tools that guarantees code quality, it is posible that you can forget to execute them before pushing your code. `lint-staged` is a tool that will help us to lint and format our code just right before commiting it to the repository. 

We'll use this tool in conjuction with `git-hooks` (more on this later). When we commit our files, linter will check our code. The linting process might take seconds to complete which is way too long. 

`lint-staged` will help us to lint only staged files, the ones we're about to commit, reducing processing time and showing only relevant errors.

Let's install the package and the configuration file, `.lintstagedrc.js`:

````bash
yarn add -D lint-staged

````

```javascript

module.exports = { 
	'*.{js,ts,tsx}': ["eslint --ignore-pattern '!*' --fix --max-warnings=0"], 	
	'*.{html,md,json,yml}': ['prettier --write'], 
	'*.svg': ['prettier --write --parser html'], };
}

```

#### [Step [004](#step-new004)] Commitlint
To add a commit linter, we will use [commitlint](https://commitlint.js.org/#/). It will allow us to set some rules so that our commit messages meet the [conventional commit format](https://conventionalcommits.org/).

````bash
yarn add --dev @commitlint/cli @commitlint/config-conventional
````

In order to set those rules, we will have to create a file called commitlint.config.js and write them inside. Here's an example of the possible content of that file:

```js
const { readdirSync } = require('fs');

const readSubDirs = (dir) => readdirSync(dir).filter((it) => !it.includes('.'));

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always', 200],
    'scope-case': [0],
    'header-max-length': [0, 'always', 110],
    'scope-enum': [
      2,
      'always',
      [
        'ci',
        'deps',
        'deps-dev',
        'lint',
        'package',
        ...readSubDirs('src'),
				# Add any directories you'd like to be scoped
      ],
    ],
  },
};
```


 We'll also use this one along with `git-hooks`.

#### [Step [005](#step-new005)] Git Hooks
We use `git-hooks` to ensure no errors go into the repository and enforce style. A git hook is a command or script that is going to be run every time you perform a git action, like `git commit` or `git push`. If the execution of a git hook fails, then the git action aborts.

We'll configure our project with two git hooks:
- `pre-commit`: Before commit we'll lint staged files. We can also check types.
- `commit-msg`: At commit, we'll `commitlint` our messages

There's multiple ways we can have our `git hooks` working. We can do it manually or rely on a third party library to save us some work. 

###### [[Manual configuration](#step-new003-1)]
Create a `scripts` directory in the root folder, with another directory inside called `git-hooks` containing four shell files:

````
.
├── scripts
│   └── git-hooks
│  	    ├── install.sh
│  	    ├── uninstall.sh
│       ├── pre-commit
│       └── commit-msg
│
.
````

📋  install.sh
````bash

	#!/usr/bin/env bash 
	if [[ "$CI" == "true" ]]; then 
		exit 0 
	fi 
	dir="$(dirname "$0")" 
	
	cp -p "$dir/pre-commit" ".git/hooks"
	cp -p "$dir/pre-commit" ".git/hooks"
	
````

📋  uninstall.sh
````bash
	#!/usr/bin/env bash 
	rm ".git/hooks/commit-msg" 
	rm ".git/hooks/pre-commit"
````

📋  pre-commit
````bash
	#!/usr/bin/env bash 
	yarn lint-staged
````

📋 commit-msg
````bash
	#!/usr/bin/env bash 
	yarn commitlint -e "$@"
````

Give permissions to execute this files with the following commands:
```bash
	chmod +x scripts/git-hooks/install.sh 
	chmod +x scripts/git-hooks/uninstall.sh 
	chmod +x scripts/git-hooks/pre-commit
	chmod +x scripts/git-hooks/commit-msg
````

Edit `package.json` file and include the scripts for install `git-hooks`
````javascript
{
	"install-git-hooks": "./scripts/git-hooks/install.sh",
	"postinstall": "yarn install-git-hooks"
},
````

Execute `yarn` . The `postinstall` script will be executed automatically right after installation finishes. Execute `ls .git/hooks` in the terminal to check if Git hooks were installed correctly.

If you get in the list provided `commit-msg` and `pre-commit` you are good to go! If not, execute the command manually:

````bash
yarn install-git-hooks
````

If the above does not work, you could also try to manually run the scripts:
````bash
./scripts/git-hooks/uninstall.sh 
./scripts/git-hooks/install.sh
````

**¡Ready!** Try to make a commit with some linting error or with a commit message that doesn't respect the conventional commit specification. 

![[git-hooks.png]]


###### [[Configuration with tools](#step-new003-2)]

Tools like [Husky](https://www.npmjs.com/package/husky) or [Simple Git Hooks](https://github.com/toplenboren/simple-git-hooks) help us set up hooks with no manual intervention required. The `.git-hook` folder with all the necessary files with be created for use. We'll just simply need to add some configuration in our `package.json`: the `postinstall` script and an object specifying which hooks we want to use and which scripts we want to run on those hooks. 

For example, with `simple-git-hooks` our `package.json` will look like this for our configuration. It'd very similar with `husky`.

````javascript
...omitted... 
"scripts": {
	...omitted... 
	"postinstall": "npx simple-git-hooks"
},
"simple-git-hooks": {
	"pre-commit": "yarn lint-staged",
	"commit-msg": "yarn commitlint -e \"$@\""
}
...omitted... 
````

> Should we use **Husky** or **Simple Git Hooks**? This is an [article](https://dev.to/acro5piano/i-ve-replaced-husky-with-simple-git-hooks-2543) that goes around that



### [Step [006](#step-new006)] Absolute imports
One last thing we can do, is configuring our project so we can use absolute imports. What we want to prevent is having to type `../../../../` (and so on) to import a module.

**If you're using  Yarn 2**, you can use its [`:link` protocol](https://yarnpkg.com/features/protocols#why-is-the-link-protocol-recommended-over-aliases-for-path-mapping), by editing our `package.json` like so:

````js
... 
"dependencies": {
	"$": "link:./src",
	... 
}
... 

````

Then run yarn. Once it is done, you should be able to use this absolute paths.

**If you're NOT using  Yarn 2**, you can achive absolute imports by setting a `baseUrl` property in your `tsconfig.json`.

```js
{
"compilerOptions": {
	"baseUrl": ".",
	...
```


-- Revisar mi guia
GraphQL intellisense

---
⬅️ Prev [Using NextJs](./02-using-nextjs)

➡️ Next [Link a remote repository](./04-link-remote-repository)