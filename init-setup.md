# Init setup 

## Requirements 

- [NVM (Node Version Manager)](#nvm) 
- [Node](#node)
- [Yarn Package Manager](#yarn-package-manager)
- [SSH Key](#ssh-key)

## How-to

### NVM

First, execute this command but check latest NVM version before and change url in case there is a new version:

``` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash 
```

**NOTE:** if you are using ZSH as default command interpreter you need to execute following command:

``` 
touch ~/.zshrc & echo 'source "$HOME/.nvm/nvm.sh"' >> ~/.zshrc
```

[Link to docs](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Node

```
nvm install node
```

**NOTE:** If you want to check actual node version, execute following command:

```
node -v
```

### Yarn Package Manager

```
npm install -g yarn
```

### SSH Key

Follow the instructions in [the following link](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) to generate a SSH Key.

Then, open the id_rsa.pub file (you can use cat or nano), copy the key and add it to your GitHub account.

**NOTE:** Once SSH Key setup is done, clone repositories using SSH instead of HTTPS. In case you have already cloned a repository using HTTPS and you want to use your SSH Key, you can edit it with the following command:

```
git remote set-url <name> <url>
```