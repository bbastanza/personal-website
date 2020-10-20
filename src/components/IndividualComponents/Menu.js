import React from "react"
import { Link } from "gatsby"

export default function Menu() {
  const linkStyle = {
    textDecoration: "none",
    padding: 5,
    borderRadius: 3,
    fontWeight: "bold",
    color: "white",
  }
  const activeStyle = {
    background: "white",
    color: "#007688",
  }
  return (
    <div
      style={{
        background: "#007688",
        color: "white",
        paddingTop: 50,
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <li>
          <Link
            className="menu-link"
            to="/"
            style={linkStyle}
            activeStyle={activeStyle}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="menu-link"
            to="/Portfolio"
            style={linkStyle}
            activeStyle={activeStyle}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="menu-link"
            to="/Connect"
            style={linkStyle}
            activeStyle={activeStyle}
          >
            Connect
          </Link>
        </li>
      </ul>
    </div>
  )
}
