# Z1 Project Arquitecture

In this document, we'll briefly explain the main layers which are part of our projects, and our current way of structuring files around this layers.

This is an standard approach within the company, but it shouldn't be seen or applied as dogma. As everything, it is subject to transformation and evolution. 

If you have a different opinion about the architecture of the projects, you're very welcome to expose it vía PR o in our Slack channels.

Note that this structure is scoped to NextJs projects in specific, though is pretty exportable to a regular React project —or even another UI framework project, since some of theses patterns are very common. 

###### [[Container-Components Pattern](#point-01)]
What is this pattern and why we use it. 

Use it with a grain of salt:
- Hooks
- Colocation
- Organize by feature or domain

###### [[Component](#point-02)]

###### [[Container](#point-02)]

###### [[GraphQL](#point-02)]
Our backend team has been using GrahpQL for a while now (2020). GraghQL is a query language specification that helps to communicate data between backend and frontend by making both sides agree on a data schema. 

In the `src` of our project, we'll typically have a `graphql` folder. This folder is responsible for managing all the GraphQL operations, the typing of our server data and then handlers for connecting our components with the data. 

- Capture folder
- Explain folders

###### [[Models](#point-02)]


###### [[Apollo](#point-02)]

**Set up**
For our front-end implementation of GraphQL, we're currently making use of Apollo Client, but React Query is a good alternative to check out. You can find some notes on our use of Apollo here. 

Apollo is the conecction poin with the data layer that the backend provides.

**Cache**


###### [[Utils](#point-02)]


###### [[Plop](#point-02)]

###### [[Styles](#point-02)]

###### [[Context](#point-02)]
Prop-drilling / Hooks


###### [[Hooks](#point-02)]

###### [[Colocation](#point-02)]