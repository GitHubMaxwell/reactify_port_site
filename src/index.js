import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
// the lazy load import below is handling the importing of the App component
// import App from "./components/App";
// import * as serviceWorker from "./serviceWorker";

//this is code-splitting and lazy loading

import(/* webpackChunkName: 'app' */ "./components/App.js").then(
  ({ default: App }) => render(<App />, document.getElementById("root"))
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
