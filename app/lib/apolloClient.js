import { ApolloClient, HttpLink, InMemoryCache } from
    "@apollo/client";
import fetch from 'node-fetch';


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:3000/admin/api',
        fetch
    })
});

export default client;