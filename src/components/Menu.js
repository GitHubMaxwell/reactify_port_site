// this is the slide menu on all pages
//needs state to hold what page is current in order to have the entry in the menu highlighted
import React, { Fragment, Component } from "react";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  // pass which page is current
  // add current class to
  render() {
    return (
      <Fragment>
        <header>
          <div className="menu-btn">
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
                <a href="index.html" className="menu-nav-link">
                  Home
                </a>
              </li>
              <li className="menu-nav-items current">
                <a href="about.html" className="menu-nav-link">
                  About
                </a>
              </li>
              <li className="menu-nav-items">
                <a href="work.html" className="menu-nav-link">
                  My Work
                </a>
              </li>
              <li className="menu-nav-items">
                <a href="contact.html" className="menu-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
    );
  }
}
