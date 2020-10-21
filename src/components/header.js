import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function Header({ siteTitle }) {
  const linkStyle = {
    textDecoration: "none",
    padding: 8,
    borderRadius: 3,
    fontWeight: "bold",
    color: "white",
  }
  const activeStyle = {
    backgroundColor: "white",
    color: "#313131",
    padding: "8px 8px 0 8px",
  }

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ justifyContent: "space-between" }}
      >
        <Link to="/" className="navbar-brand  menu-link">
          <h1>Brian Bastanza</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <Link to="/" style={linkStyle} activeStyle={activeStyle}>
              <li className="nav-item  menu-link ">Home</li>
            </Link>
            <Link to="/Portfolio" style={linkStyle} activeStyle={activeStyle}>
              <li className="nav-item  menu-link">Portfolio</li>
            </Link>
            <Link to="/Connect" style={linkStyle} activeStyle={activeStyle}>
              <li className="nav-item menu-link">Connect</li>
            </Link>

            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </header>
  )

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }

  Header.defaultProps = {
    siteTitle: `Brain Bastanza`,
  }
}

export default Header
