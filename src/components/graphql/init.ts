import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl3k7uhip9p2101zdfpaeb59p/master",
  cache: new InMemoryCache(),
})

export default client
