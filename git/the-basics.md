# The Basics

## Must know git commands

### git init

Starts a git repository at the current folder.

#### Create a new repository

```bash
$ git init
```

### git clone

Clones a repository inside a new folder.

#### Cloning from a remote repository:

```bash
$ git clone git@github.com:z1digitalstudio/developers-handbook.git
```

#### Cloning a local repository:

```bash
$ git clone ~/projects/developers-handbook
```

### git remote

Allows to manage tracked repositories.

#### Adding a new remote with the name origin

```bash
$ git remote add origin git@github.com:z1digitalstudio/developers-handbook.git
```

#### Removing a remote

```bash
$ git remote remove origin
```

### git checkout

Allows to switch the working branch to a different branch or commit.

#### Switch to a specific branch

```bash
$ git checkout feature/realtime
```

#### Create a branch and switch to it

```bash
$ git checkout -b feature/realtime
```

#### Switch to a commit

```bash
$ git checkout f52aa6b610cb1778c74095c7e6a7c003045eab11
```

### git merge

Join two or more commits or branches together.

#### Merge a branch with the current one (master)

```bash
$ git merge feature/realtime
```

### git status

Shows the working tree status.

#### Show the working tree status

```bash
$ git status
```

### git add

Adds changes to the index.

#### Add all the untracked changes to the index

```bash
$ git add --all
```

### git commit

Stores the current contents of the index in a new commit along with a log message from the user describing the changes.

#### Commit changes and open a text editor to give it a message

```bash
$ git commit
```

#### Commit changes with the message `feat: initial commit`

```bash
$ git commit -m 'feat: initial commit'
```

### git push

Updates remote refs using local refs.

#### Pushing changes

```bash
$ git push
```

#### Pushing changes to a new branch in the remote repository

```bash
$ git push -u origin feature/realtime
```

### git pull

Incorporates changes from the remote repository into the current branch.

#### Pulling changes

```bash
$ git pull
```

### git branch

List, create or delete branches.

#### List all branches

```bash
$ git branch -a
```

#### Create a branch

```bash
$ git branch feature/realtime
```

#### Delete a branch

```bash
$ git branch -d feature/realtime
```

### git fetch

Fetches branches and/or tags from one or more repositories.

#### Fetching

```bash
$ git fetch
```
