import ApolloClient, { InMemoryCache } from 'apollo-boost'
// import { InMemoryCache } from "apollo-cache-inmemory"
// import { createHttpLink } from "apollo-link-http"

//graphQl을 사용하는 서버 주소
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache:new InMemoryCache ()
})

export default client