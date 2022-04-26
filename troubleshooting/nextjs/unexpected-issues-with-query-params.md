# Unexpected issues with query params

Sometimes we need to get data from our `query parameters` allocated in our `url` via `useRouter().query` hook, however, in the process, we may receive `undefined` time to time, so that, is quite important recognize each "rendering step" that `next.js` provides, and the solutions that they bring to us.

## `Nextjs` query params under the hood.

The first thing to know, is that `next.js` **always compiles/transform** some of your pages into a file `html`. In that process it picks the default states to create it. 
After that, that `html`, when requested, is sent to the client/user, where the next step named by them as **hydration** happens. In this moment, `javascript` takes place and `react.js` starts to bring **interactivity** to our page. That's instant where things start to be **reactive**.

During this hydration stage, previously commented, you should know that `query` needs to be read, and that process take some time; in other words, **`query` is `{}` (an empty object), and your query properties `undefined` (ex: `query.page`) up to hydration fully happens and triggers that functionality**.

In short, this is what happens with query params along these steps:
1. `next.js` server send to the client a raw html with no functionality. In this step `js` is not present, so your codes doesn't run either.
2. The page read `javascript` files, and bring `react` to life (hydration), process while query params will be read triggering a new refresh/update to your `router`. So, **in the first moment `useRouter().query['myParamKey']` will be `undefined`**, but once they are read `useRouter().query['myParamKey']` will take a real value, *which may be undefined if is not present in the url query param*.
3. The page is fully hydrated and react works as it normally does.

So, the question is...

## How can we distinguish between a non-fully-hydrated `undefined` query param, and a non-present query param, which is also `undefined`?

`next.js` introduced a solution to that (old `next.js` versions may not have it), which is a router property named `isReady`. 

Once `useRouter().isReady` is true, the query params are fully read, and ready to use, so if your query param key is `undefined` **is because is not present!** so that you can trigger your default action, state, or functionality.

### Warning about `isReady`

This property only make sense inside an `useEffect` hook, with such value in the dependency array (we'll see a full example a bit later).

[Official docs about router and is ready](https://nextjs.org/docs/api-reference/next/router#:~:text=isReady%3A%20boolean%20%2D%20Whether%20the%20router%20fields%20are%20updated%20client%2Dside%20and%20ready%20for%20use.%20Should%20only%20be%20used%20inside%20of%20useEffect%20methods%20and%20not%20for%20conditionally%20rendering%20on%20the%20server.%20See%20related%20docs%20for%20use%20case%20with%20automatically%20statically%20optimized%20pages)
[More info in official docs about hydration and query](https://nextjs.org/docs/advanced-features/automatic-static-optimization#:~:text=If%20the%20above,the%20query%20object.)

## Let's make an example

Let's suppose the next use case:

> We want to set our selected job offer card in our query params so that it can be easily shared among users in social media, however, if that query param is not present, we would like to automatically select the first card in the list.

> When we click in a card, a detailed preview of that job offer appears next to the list.

The query param key is `"jobOfferId"`.

```tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { JobOffer } from '$/model/JobOffer';
import useJobOffers from '$/graphql/hooks/jobOffers/useJobOffers';

const queryParamKey = 'jobOfferId';

export default function useConnect() {
  const jobOffers: JobOffer[] = useJobOffers();

  const router = useRouter(); 
  const [selectedJobOfferId, setSelectedJobOfferId] = useState<string>();

  useEffect(() => {
    // wait until our query is fully read!!
    if (!router.isReady) return;

    // query params may be (string | string[] | undefined)
    const jobOfferId = router.query[queryParamKey];
    const isValidJobOfferFormat = typeof jobOfferId === 'string';

    // if our desired query param is a string,
    // truthy (mainly !== ""),
    // and is present in our list,
    // set it as the selectedJobOfferId
    if (
      isValidJobOfferFormat &&
      jobOfferId &&
      jobOffers.find(({ id }) => id === jobOfferId)
    ) {
      setSelectedJobOfferId(jobOfferId);
      return;
    }

    // all other cases, lets set a default value
    if (jobOffers.length > 0) {
      setSelectedJobOfferId(jobOffers[0].id);
    }

    // remember to set router or specific router properties as dependencies
  }, [jobOffers, router.isReady, router.query]);

  return {
    selectedJobOfferId,
  };
}
```

To inline test it, you can replace jobOffer with a mocked array of objects:

```tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { FILTER_FORM_DEFAULT_VALUES } from './FiltersBar/constants';

import { useFilters } from '$/hooks/useFilters';

const jobOffers = [{ id: '1' }, { id: '2' }];
const queryParamKey = 'jobOfferId';

export default function useConnect() {
  const router = useRouter();
  const [selectedJobOfferId, setSelectedJobOfferId] = useState<string>();

  useEffect(() => {
    // wait until our query is fully read!!
    if (!router.isReady) return;

    // query params may be (string | string[] | undefined)
    const jobOfferId = router.query[queryParamKey];
    const isValidJobOfferFormat = typeof jobOfferId === 'string';

    // if our desired query param is a string,
    // truthy (mainly !== ""),
    // and is present in our list,
    // set it as the selectedJobOfferId
    if (
      isValidJobOfferFormat &&
      jobOfferId &&
      jobOffers.find(({ id }) => id === jobOfferId)
    ) {
      setSelectedJobOfferId(jobOfferId);
      return;
    }

    // all other cases, lets set a default value
    if (jobOffers.length > 0) {
      setSelectedJobOfferId(jobOffers[0].id);
    }

    // remember to set router or specific router properties as dependencies
  }, [router.isReady, router.query]);

  console.log('...', selectedJobOfferId, router.query);
}
```

For example, if you search the next `url` `http://localhost:3000/company/find-candidates?jobOfferId=2` this will be printed:
1. `... undefined {}`
2. `... undefined {jobOfferId: '2'}` <-- Here is hydrated and read!
3. `... 2 {jobOfferId: '2'}` <-- Here we successfully update our state