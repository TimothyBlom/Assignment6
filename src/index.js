import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { sessionInitAction } from "./store/actions/sessionActions";
import reportWebVitals from "./reportWebVitals";

store.dispatch(sessionInitAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
