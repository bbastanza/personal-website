import { Link } from "gatsby"
import Menu from "./IndividualComponents/Menu"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#313131`,
      marginBottom: 0,
      display: "flex",
    }}
  >
    <div
      style={{
        margin: `10`,
        maxWidth: 960,
        padding: `1.25rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h6 style={{ color: `white`, textDecoration: `none` }}>
        Full Stack Web Developer
      </h6>
    </div>
    <div>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Brain Bastanza`,
}

export default Header
