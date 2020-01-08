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
- Avoid push to 'master' or 'develop' directly. Always create a new branch and then a pull request.

###### [Rule [G005](#rule-g005)]
- New branch must start from 'develop'. If you need some code from other branch still not merged, this new branch should start from the dependent branch.

###### [Rule [G006](#rule-g006)]
- Each branch should be a single feature or bug fix (as small as possible).

  *Why?*: The less changes you want to merge, the easier it will be to review them.

  **Tips**: Avoid mixing code format with features.

### [Clean code](#clean-code)

### [React](#react)
