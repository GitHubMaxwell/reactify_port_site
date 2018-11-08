import React, { Component, Fragment } from "react";
// have browser router here and give components Routes

import Home from "./Home.js";
// import About from "./About.js";
// import Work from "./Work.js";
// import Contact from "./Contact.js";
import Menu from "./Menu.js";
import Footer from "./Footer.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home"
    };
  }
  render() {
    return (
      <Fragment>
        <Menu current="this.state.current" />
        <Home />
        <Footer />
      </Fragment>
    );
  }
}
