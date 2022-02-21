
[**📖 Guide: Start a new project**](https://github.com/z1digitalstudio/developers-handbook/blob/master/guide-start-new-project/00-start-here)


## [First Steps](#first-steps) 

###### [Step [001](#step-new001)] Name project
Create a local directory that will contain the project files and folders. At Z1, web project are using called in the format [Project Name]-web. (e.g.: renew-web).

###### [Step [002](#step-new002)] Init version control
Open the terminal and access the recently created directory. Running the following command will convert the existing, un-versioned project to a Git repository. You can find more information [here](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init).

   ````bash
   git init
   ````

Create a `.gitignore` file for the project. You can use a [generator](https://www.toptal.com/developers/gitignore) and customize it manually. If you are not sure what should be ignored and what shouldn't, don't be scared to ask anyone on the team.

###### [Step [003](#step-new003)] Init package
 Running the following command helps you create a package.json file through an interactive session. More information [here](https://classic.yarnpkg.com/en/docs/cli/init/).

   ````bash
   yarn init
   ````
   
If you want to skip this questions, simply use:

```bash
yarn init -y
``` 


###### [Step [004](#step-new004)] Specity node version

At this point, you might want to modify the `package.json` that has been created. For example, you might want to add the Node version you want to use. You can do it by adding to the `package.json` file the following code:

````json
	"engines": {
		"node": ">= 14.17.4"
	  }
````

You should [check for the LTS version of Node](https://nodejs.org/es/), and specify that one. 

We can also create a `.nvmrc` file and write the version we want to use inside it. This will allow developers to run `nvm use` to use the project's recommended Node version. 

You can create this file manually of by running the following command:

````
node -v > .nvmrc
````

Be aware that this command will generate the file with your installed node version, which may not match the one you specified before on `package.json`.

###### [Step [005](#step-new005)] Upgrade to Yarn2 (optional)
Optionally, you could upgrade Yarn version to [Yarn 2](https://yarnpkg.com/getting-started/install) with the following command:

````
yarn set version berry
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
⬅️ Prev [Start here](https://github.com/z1digitalstudio/developers-handbook/blob/master/guide-start-new-project/00-start-here)

➡️ Next [Using NextJs](https://github.com/z1digitalstudio/developers-handbook/blob/master/guide-start-new-project/02-using-nextjs)
