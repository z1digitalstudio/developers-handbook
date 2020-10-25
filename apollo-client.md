# Apollo Client

// ToDo Add examples

The aim of this is not to explain how Apollo Client works, but to summarize and discuss some practices we are already using
in some projects, and to recall some features that can easily go unnoticed under the amount of information we have to deal with daily.

1. Take network options into account. Sometimes, we have data that has to be up to date with a database that is in constant change. However, in many cases we can save a lot of unnecessary requests by calling the data once and reading it from the Apollo Client's cache. For this, it is essential to handle the cache changes each time we modify some of this data.

2. As a rule of thumb, we create Apollo hooks for handling queries, whether it is a single one or multiple queries which are going to be called at the same time. Consider that these hooks will be called every time a component that calls them renders, so make use of useQuery's skip option in order to call the queries conditionally.

3. If the data from a query is going to be used only within a function's scope, we can execute the query call inside that function instead of calling the query hook in that component's useConnect, avoiding unnecessary dependencies on that function's useCallback.

4. As we do with queries, we group mutations affecting the same source or related sources in hooks under the naming use<Source>Actions. After these mutations are executed, it is essential that the app data is updated. If for some reason we are not able to mutate the cache, we can refetch any query we want using useMutation's refetchQueries option.

5. In an ideal world, mutations that create or update data should have the modified entity within the returned data. For creations, we need the created UUID in order to update the cache. For updates, Apollo has a very practical behaviour as it will update the affected entities on the cache automatically. If your mutation return type is something like 'message: String', maybe the backend developer has not taken this into account. It may be a good idea to let them know.

6. Give to Apollo what is Apollo's, and what is the component's to the component. If we are creating hooks for handling Apollo mutations, it is better to return custom handlers that, apart from calling the mutation, perform actions like Apollo's cache updates or side effects that are no related witht he component that calls the mutation on the hook and returning it from there. If we export the mutation directly from our custom hook, we are missing some of the advantages of calling them from a custom hook.
