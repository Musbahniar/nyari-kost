import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleTonggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="nyari-kostAN" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleTonggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links" }> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/koss">Boarding House</Link></li>
            <li><Link to="/about">About Apps</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
