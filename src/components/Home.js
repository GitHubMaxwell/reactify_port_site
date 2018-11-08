import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home"
    };
  }
  render() {
    return (
      <main id="home">
        <h1 className="lg-heading">
          John <span className="text-secondary">Doe</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, Designer, & Entrepreneur
        </h2>
        <div className="icons">
          <a href="/">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="/">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="/">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="/">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </main>
    );
  }
}
