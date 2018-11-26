import React, { Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
// import About from "./About.js";
// has short summary and resume

export default function App() {
  return (
    <HashRouter>
      <Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/about" component={About} /> */}
        <Footer />
      </Fragment>
    </HashRouter>
  );
}
