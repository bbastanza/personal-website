import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Header({ siteTitle }) {
  const linkStyle = {
    textDecoration: "none",
    padding: 8,
    borderRadius: 3,
    color: "white",
  }
  const activeStyle = {
    backgroundColor: "white",
    color: "#313131",
  }
  const brandStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: 40,
  }

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }

  Header.defaultProps = {
    siteTitle: `Brain Bastanza`,
  }

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="menu-link">
          <Link to="/" style={brandStyle}>
            {siteTitle}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              to="/"
              className="menu-link"
              style={linkStyle}
              activeStyle={activeStyle}
            >
              Home
            </Link>
            <Link
              to="/Portfolio"
              className="menu-link"
              style={linkStyle}
              activeStyle={activeStyle}
            >
              Portfolio
            </Link>
            <Link
              style={linkStyle}
              className="menu-link"
              activeStyle={activeStyle}
              to="/Connect"
            >
              Connect
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
