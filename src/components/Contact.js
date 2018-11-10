import React, { Component } from "react";

// can be func component??

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main id="about">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let's Get In Touch!</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span>johndoe@test.com
          </div>
          <div>
            <span className="text-secondary">Phone:</span>555-555-5555
          </div>
          <div>
            <span className="text-secondary">Address:</span>Seattle,WA
          </div>
        </div>
      </main>
    );
  }
}
