[**📖 Guide: Start a new project**](./00-start-here.md)

## [Using NextJs](#using-nextjs) 

#### [Step [001](#step-new001)] Initial Setup

We used [Next.js](https://nextjs.org/) React Framework in our project. 

- **Manual  setup**
	If you want to use it for your project we recommend following the [manual setup](https://nextjs.org/docs#manual-setup) guide to do it. 

- **Quick start**. Alternatively, you can use [this guide](https://nextjs.org/docs/basic-features/typescript) provided by Next.js to initialize a project with Typescript. It will install Next.js, Typescript and ESLint. It will also add config files such as `.gitignore` and `tsconfig.json.`


#### [Step [002](#step-new002)] Typescript
If you opted for the manual setup, you would need to install typescript:

````
yarn add --dev typescript @types/react 
yarn plugin import typescript 
yarn tsc --init
````

Open the `tsconfig.json` file and edit it with an appropriate configuration taking into account your project needs. [Check the docs reference](https://www.typescriptlang.org/tsconfig) if you need. This is how our file ended up looking like:

````json
{
  "compilerOptions": {
    "alwaysStrict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "module": "commonjs",
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "skipLibCheck": true,
    "strict": true,
    "strictBindCallApply": true,
    "strictFunctionTypes": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "noEmit": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.tsx", "**/*.ts"],
  "exclude": ["node_modules"]
}
````


#### [Step [003](#step-new003)] Start Next App
Create a `src` directory, a `pages` directory inside it, and an `index.tsx` file inside the last one. You can fill this file with the following code:

````tsx
function HomePage(): JSX.Element {
  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
````

The last (_optional_) step is to create a `next.config.js` file where we will specify that we want to disable ESLint during builds, as we will configure later on GitHub actions to have its own lint step. This will save time and resources during the build.

````js
module.exports = {
	eslint: { 
		ignoreDuringBuilds: true, 
	}, 
};
````

Now, you can run yarn start 🚀

---
⬅️ Prev [First Steps](./01-first-steps.md)

➡️ Next  [Configure ESLint & Prettier](./03-eslint-prettier.md)