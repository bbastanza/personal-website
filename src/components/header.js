import { Link } from "gatsby"
import Menu from "./IndividualComponents/Menu"
import PropTypes from "prop-types"
import React from "react"
import brian from "../images/brian.jpg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#007688`,
      marginBottom: 0,
      display: "flex",
    }}
  >
    <Link
      to="/"
      style={{
        color: "white",
        textDecoration: `none`,
      }}
    >
      <div
        className="menu-link"
        style={{
          margin: `10`,
          maxWidth: 960,
          padding: `1.25rem 1.0875rem`,
          marginRight: "auto",
        }}
      >
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        <h6 style={{ color: "white", textDecoration: `none`, marginLeft: 100 }}>
          Full Stack Web Developer
        </h6>
      </div>
    </Link>

    <div style={{ margin: "0px 10px 5px auto", display: "flex" }}>
      <Menu />
      <img
        src={brian}
        style={{
          height: 100,
          width: "auto",
          borderRadius: "50%",
          margin: "10px 10px 0 10px",
        }}
        alt=""
      />
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
