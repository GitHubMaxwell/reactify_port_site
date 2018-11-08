import React, { Component } from "react";

// can be func component??

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main id="about">
        <h1 class="lg-heading">
          Contact <span class="text-secondary">Me</span>
        </h1>
        <h2 class="sm-heading">Let's Get In Touch!</h2>
        <div class="boxes">
          <div>
            <span class="text-secondary">Email:</span>johndoe@test.com
          </div>
          <div>
            <span class="text-secondary">Phone:</span>555-555-5555
          </div>
          <div>
            <span class="text-secondary">Address:</span>Seattle,WA
          </div>
        </div>
      </main>
    );
  }
}
