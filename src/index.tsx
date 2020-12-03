import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from 'react-apollo'
import client from './apollo/client'
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
