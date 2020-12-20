import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from
    "@apollo/client";
import fetch from 'node-fetch';

let apolloClient;

export default function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined", // set to true for SSR
        link: new HttpLink({
            uri: "http://localhost:3000",
            fetch
        }),
        cache: new InMemoryCache(),
    });
}