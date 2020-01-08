# Z1 Developer's Handbook

### [Version Control](#version-control)
###### [Rule [G000](#rule-g000)]
- Use [Git](https://git-scm.com/) as version control.

###### [Rule [G001](#rule-g001)]
- Use [GitHub](https://github.com/z1digitalstudio) for hosting source code.

###### [Rule [G002](#rule-g002)]
- 'Master' branch should contain the production version of the code. It hasn't parent branch.

###### [Rule [G003](#rule-g003)]
- 'Develop' branch should contain the staging version of the code. 'Master' is his parent branch.

###### [Rule [G004](#rule-g004)]
- Avoid pushing to 'master' or 'develop' directly. Always create a new branch and then a pull request.

###### [Rule [G005](#rule-g005)]
- New branch must start from 'develop'. If you need some code from other branch still not merged, this new branch should start from the dependent branch.

###### [Rule [G006](#rule-g006)]
- Each branch should be a single feature or bug fix (as small as possible).

  *Why?*: The less changes you want to merge, the easier it will be to review them.

  **Tips**: Avoid mixing code format with features.

###### [Rule [G007](#rule-g007)]
- Commit early and often following [convetional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/).

  *Why?*: Your commits should follow the SRP (Single Responsibilty Principle). Your commit should change one thing.

  *Why?*: Makes your commit messages more accurate.

  *Why?*: Verbose git history.

  *Why?*: Make reverting commits useful.

  **Tips**: Whenever you reach to the word “and” in your commit message, you know your commit is too big.

###### [Rule [G008](#rule-g008)]
- Merge branches with their parents branches.

  *Why?*: Avoid conflicts.

###### [Rule [G009](#rule-g009)]
- Merge branches via pull request.

###### [Rule [G010](#rule-g010)]
- Resolve conflicts on your pull requests by yourself.

  *Why?*: It's your responsibility.

  *Why?*: You have more context about your code.

  **Tips**: Always merge parent branch on your branch before creating a pull request.

###### [Rule [G011](#rule-g011)]
- Check that your pull request is doing what you think.

  *Why?*: It's your responsibility.

  *Why?*: You have more context about the feature requirements.

  **Tips**: Add screen recording to the pull request description.

###### [Rule [G012](#rule-g012)]
- Avoid treating reviewers as bots.

  *Why?*: They are people!

  *Why?*: Their time is valuable.

  *Why?*: Your pull request is your responsibility.

###### [Rule [G013](#rule-g013)]
- Avoid merging your own pull request.

### [Clean code](#clean-code)

### [React](#react)
