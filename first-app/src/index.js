import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./Store";
import App from "./Components/App";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@material-ui/core";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<CircularProgress />}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);

