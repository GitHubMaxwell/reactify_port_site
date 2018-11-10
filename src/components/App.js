import React, { Component, Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Work from "./Work.js";
import Contact from "./Contact.js";
import Menu from "./Menu.js";
import Footer from "./Footer.js";

// maybe the code splitting in index.js messing up routes?

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home"
    };
  }
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Menu current={this.state.current} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </Fragment>
      </HashRouter>
    );
  }
}
