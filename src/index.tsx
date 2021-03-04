import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "reduxlib";
import Home from "components/Home";

import { ApolloProvider, client } from "graphlib";
import "assests/scss/styles.scss";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Home />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
