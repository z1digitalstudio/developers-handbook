[**📖 Guide: Start a new project**](./00-start-here.md)

# [First Steps](#first-steps) 

## Name project
Create a local directory that will contain the project files and folders. At Z1, web project are using called in the format [Project Name]-web. (e.g.: renew-web).

## Init version control
Open the terminal to access the project directory. Running the following command will convert the existing, un-versioned folder into a Git repository. 

   ````bash
   git init
   ````

You can find more information [here](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init).

Create a `.gitignore` file for the project. You can use a [generator](https://www.toptal.com/developers/gitignore) and customize it manually. If you are not sure what should be ignored and what shouldn't, don't be scared to ask anyone on the team.

## Init package manager
Running the following command helps you create a **package.json** file through an interactive session. More information [here](https://classic.yarnpkg.com/en/docs/cli/init/).

   ````bash
   yarn init
   ````
   
If you want to skip this questions, simply use:

```bash
yarn init -y
``` 


## Specify node version
At this point, you might want to modify the `package.json` that has been created. For example, you might want to add the Node version you want to use. You can do it by adding to the `package.json` file the following code:

````json
	"engines": {
		"node": ">= 16.14.1"
	  }
````

You should [check for the LTS version of Node](https://nodejs.org/es/), and specify that one. 

You can also **create a `.nvmrc` file**  and write the node version to use inside it. This will allow developers to run `nvm use` to use the project's recommended Node version. 

You can create this file by running the following command:

````
node -v > .nvmrc
````

Be aware that this command will generate the file with your installed node version, which may not match the one you specified before on `package.json`.

## Upgrade to Yarn2 (optional)
Optionally, you could upgrade Yarn version to [Yarn 2](https://yarnpkg.com/getting-started/install) with the following command:

````
yarn set version berry
````
````markdown
<details><summary>Learn more</summary>
<p>

#### Learn more

Yarn 2 (Berry) is not just a completely new version of Yarn 1 (Classic). It's a new approach to package management. 

</p>
</details>
````


At the time we wrote this, we added the following line to the  `.yarnrc.yml`  file to use node modules instead of pnp as the last one is yet not supported by some packages. More info can be found in the [Yarn Configuration Options Docs](https://yarnpkg.com/configuration/yarnrc#nodeLinker).

````
nodeLinker: node-modules
````

If we are using Yarn 2, you should change the `gitignore` file sections related to Yarn 2 to add the lines of code recommended in its [documentation](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored). In our case we were using zero-installs configuration. The code we added was:

````
# yarn v2 
	.yarn/ 
	.yarn/* 
	!.yarn/cache 
	!.yarn/patches 
	!.yarn/plugins 
	!.yarn/releases 
	!.yarn/sdks 
	!.yarn/versions
````



---
⬅️ Prev [Start here](./00-start-here.md)

➡️ Next [Using NextJs](./02-using-nextjs.md)
