import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import * as serviceWorker from "./service-worker-api";
import "./styles.scss";

ReactDOM.render(<App />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
