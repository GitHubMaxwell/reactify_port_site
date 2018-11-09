// this is the slide menu on all pages
//needs state to hold what page is current in order to have the entry in the menu highlighted
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      current: "home"
    };
  }
  // pass which page is current
  // add current class to
  menuItemClick = () => {
    // pass event.target.value???
    // console.log("menu item click");
    this.setState({
      current: "",
      show: false
    });
  };

  hamburgerClick = () => {
    // console.log(`Hamburger Click + ${this.props.current}`);
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  // how to highlight which menu item has the 'current' class based on which page is show
  // onClick setState current:'about' / this.state.current===input.value ? add class current : ``;

  render() {
    return (
      <header>
        <div
          onClick={this.hamburgerClick}
          className={`menu-btn ${this.state.show ? `close` : ``}`}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={`menu ${this.state.show ? `show` : ``}`}>
          <div className={`menu-branding ${this.state.show ? `show` : ``}`}>
            <div className="portrait" />
          </div>
          <ul className={`menu-nav ${this.state.show ? `show` : ``}`}>
            <Link
              to={"/"}
              className={`menu-nav-items ${this.state.show ? `show` : ``}`}
              onClick={this.menuItemClick}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={`menu-nav-items ${this.state.show ? `show` : ``}`}
              onClick={this.menuItemClick}
            >
              About
            </Link>
            <Link
              to={"/work"}
              className={`menu-nav-items ${this.state.show ? `show` : ``}`}
              onClick={this.menuItemClick}
            >
              Work
            </Link>
            <Link
              to={"/contact"}
              className={`menu-nav-items ${this.state.show ? `show` : ``}`}
              onClick={this.menuItemClick}
            >
              Contact
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}
