# Init setup

## Requirements

- Git
- SSH Key
- NVM (Node Version Manager)
- Node
- Yarn Package Manager

## How-to

### Git (optional)

At nvm installation, it may ask you to install Command Line Developer Tools, if not, run this command and it will prompt you a window to install it:

```
git --version
```

[Link to docs](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### SSH Key

Follow the instructions in the following link to generate a SSH Key:
[Link to docs](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

Then, open the id_rsa.pub file (you can use cat or nano), copy the key and add it to your github account.

### NVM (required)

First, execute this command but check latest NVM version before and change url in case there is a new version:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

Then, copy this line to ~/.bash_profile and .zshrc files:

```
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
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
