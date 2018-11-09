import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Work from "./Work.js";
import Contact from "./Contact.js";
import Menu from "./Menu.js";
import Footer from "./Footer.js";
// import "../style/main.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home"
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Menu current={this.state.current} />
          <Home />
          <Footer />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Fragment>
      </BrowserRouter>
    );
  }
}
