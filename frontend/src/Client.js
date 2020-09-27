import {ApolloClient,InMemoryCache} from '@apollo/client';

const client=new ApolloClient({
    uri: "http://localhost:5000/graphql", //URL of the backend
    cache: new InMemoryCache()
});

export default client;