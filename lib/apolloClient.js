import { ApolloClient, InMemoryCache } from "@apollo/client"

const ApiClient = new ApolloClient({
  uri: process.env.GRAPHCMS_PROJECT_API,
  headers: {
    "Authorization": `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`
  },
  cache: new InMemoryCache()
});

export default ApiClient;
