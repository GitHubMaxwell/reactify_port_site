import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    // current derived from url / regex?
    this.state = {
      current: "home",
      show: ""
    };
  }
  menuItemClick = e => {
    // let page = e.target.id;
    let page = e.target;

    console.log("page: ", page);
    this.setState(
      prevState => ({
        current: page,
        show: !prevState.show
      }),
      () => {
        let hide = document.getElementsByClassName("show");
        console.log("hide: ", hide);
      }
    );
  };

  render() {
    return (
      <nav>
        <ul>
          <Link
            to={"/"}
            id="home"
            className={`menu-nav-items ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            home
          </Link>
          <Link
            to={"/about"}
            id="about"
            className={`menu-nav-items ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            about
          </Link>
          <Link
            to={"/contact"}
            id="contact"
            className={`menu-nav-items ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            contact
          </Link>
        </ul>
      </nav>
    );
  }
}
