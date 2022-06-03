[**📖 Guide: Start a new project**](./00-start-here.md)

## [Add Styled Components](#styled-components) 

First, install the package with the command:

````bash
yarn add styled-components
````

Open `package.json` file and add the following lines ([info](https://styled-components.com/docs/basics#installation)):

```bash
"resolutions": { 
	"styled-components": "^5" 
}
```

Now, let's add a first test component to check our styles are working properly. For that, create a directory called `Views` inside the containers one. 

Add a directory `Home` with `index.tsx` inside in order to create a view. You can use the following code create the view:

````ts
import { Container } from './styles';

function HomeView(): JSX.Element {
  return <Container>Welcome to Next.js!</Container>;
}

export default HomeView;
````

Add a `styles.ts ` file and use `styled-components` to create a styled div.
```ts
import styled from 'styled-components'; 

export const Container = styled.div`
	width: 100%; padding: 20px; 
`;

```

The structure should be looking like this:
![[views-folder.png]]

Import and use the view you've created in the index.tsx file located inside pages directory.

```ts
import HomeView from '../containers/Views/Home'; 

function HomePage(): JSX.Element { 
	return <HomeView />; 
} 

export default HomePage;
```

✨ Start the local server to check that the styles you added are applied to the view.

---
⬅️ Prev [Link a remote repository](./04-link-remote-repository.md)

➡️ Next [Add Storybook](./06-storybook.md)