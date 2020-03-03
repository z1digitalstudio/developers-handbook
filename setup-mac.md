# Setup your mac 
All our team use a Macbook pro (we provide it in the onboarding). So all the content in this guide assumes that you are using a MacOs.

**Why MacOs?**  
We have optimized all our development flow for MacOs, so we will be able to help you easily if you face any problem. Also, we develop so much for iOS and you need a MacOs for this.

**Can I use Linux?**  
We only will provide you with a Macbook pro but you are free to use your own computer if you prefer using Linux. But you should be hacker enough for not being blocked by your S.O.

## Requirements 

- [Git](#git)
- [NVM (Node Version Manager)](#nvm)
- [Yarn Package Manager](#yarn-package-manager)
- [Github](#github)

### Git
We use [Git](https://git-scm.com/) as version control system.

By default Macos already have Git installed so for checking it run
```
git --version
```

### NVM
We use [NVM](https://github.com/nvm-sh/nvm) for being able to manage multiple active node.js versions. Sometimes you could be working in different projects with different Node version requirements.  

[Install instructions](https://github.com/nvm-sh/nvm#install--update-script)  
[Troubleshooting on Macos](https://github.com/nvm-sh/nvm#troubleshooting-on-macos)  
[Verify installation](https://github.com/nvm-sh/nvm#verify-installation)  
[Usage](https://github.com/nvm-sh/nvm#usage)  

### Yarn Package Manager
We use [Yarn](https://yarnpkg.com/) as package manager.

Easiest way to install yarn with NVM is with this command
```
npm install -g yarn
```

**NOTE:** This only will install yarn for the active Node version in your NVM. If you install other Node version you will need install yarn again or [migrate global packages while installing](https://github.com/nvm-sh/nvm#migrating-global-packages-while-installing). 

### Github
We use [Github](https://github.com/) as development platform.

You don't need install anything because is a web but you will need configure your account.

#### Two Factor Authentication
[Securing your account with two-factor authentication (2FA)](https://help.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)

#### SSH
Avoid using HTTP for connecting Git and Github, always clone the project using SSH.

[Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)  
[Adding a new SSH key to your GitHub account](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)  

[More info](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
