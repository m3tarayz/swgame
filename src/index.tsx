import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Switch, Route } from "react-router";

import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import App from "./App";
import Results from "./components/results/Results";

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/results" exact component={Results} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
