import { createClient } from 'microcms-js-sdk'; //ES6

const ctx = useRuntimeConfig();

const news = createClient({
  serviceDomain: ctx.serviceDomain,
  apiKey: ctx.apiKey,
});

export default news