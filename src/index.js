import React from "react";
import ReactDOM from "react-dom";
import Home from "components/Home";
import {ApolloProvider, client} from 'config'
import "assests/scss/styles.scss";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  document.getElementById("root")
);
