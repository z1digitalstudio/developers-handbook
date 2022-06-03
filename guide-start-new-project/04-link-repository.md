[**📖 Guide: Start a new project**](./00-start-here.md)

## [Link remote repository](#link-remote-repository) 

Open [Z1's GitHub](https://github.com/z1digitalstudio), move to Repositories tab and click the button "New Repository".

You'll be redirected to a form. **Use the same name you used for the project folder** as repository name. Don't use a template, set it to private, and do not initialize the repository with any of the optional files. Once you are ready click on "Create Repository"

![[remote-repo.png]]

Back to the terminal, commit all the files you have so far. The name of this commit can be something like `chore: initial commit`.

Now, open the console and make sure you are located at your local project directory. Once inside, run the following commands to link your local repository to the remote one you have just created. The origin ref should be something like `git@github.com:z1digitalstudio/repo-name`:

````bash
	git remote add origin [origin-ref] 
	git push --set-upstream origin master
````


---
⬅️ Prev  [Configure ESLint & Prettier](./03-eslint-prettier.md)

➡️ Next [Add Styled Components](./05-styled-components.md)