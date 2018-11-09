// this is the slide menu on all pages
//needs state to hold what page is current in order to have the entry in the menu highlighted
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  // pass which page is current
  // add current class to
  // add hamburger click event

  onClick = () => {
    console.log(`Hamburger Clck + ${this.props.current}`);
  };

  render() {
    return (
      <header>
        <div onClick={this.onClick} className="menu-btn">
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>
          <ul className="menu-nav">
            <li className="menu-nav-items">
              <Link to={"/"} className="menu-nav-link">
                Home
              </Link>
            </li>
            <li className="menu-nav-items current">
              <Link to={"/about"} className="menu-nav-link">
                About
              </Link>
            </li>
            <li className="menu-nav-items">
              <Link to={"/work"} className="menu-nav-link">
                Work
              </Link>
            </li>
            <li className="menu-nav-items">
              <Link to={"/contact"} className="menu-nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
