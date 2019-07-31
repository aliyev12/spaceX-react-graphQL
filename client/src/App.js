import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import "./styles/App.css";
import logo from "./logo.png";
import "./styles/bootstrap.min.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Switch>
            <Route exact path="/" component={Launches} />
            <Route
              exact
              path="/launch/:flight_number"
              render={routerProps => <Launch {...routerProps} />}
            />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
