import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { ErrorResponse, onError } from "@apollo/client/link/error";
const errorLink = onError(({ graphQLErrors }: ErrorResponse) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://pangaea-interviews.now.sh/api/graphql" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export { ApolloProvider, client };