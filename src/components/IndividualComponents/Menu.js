import React from "react"
import { Link } from "gatsby"

export default function Menu() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: 5,
    margin: 5,
    borderRadius: 3,
  }
  const activeStyle = {
    background: "white",
    color: "#313131",
  }
  return (
    <div style={{ background: "#313131", color: "white", paddingTop: 50 }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <li>
          <Link to="/" style={linkStyle} activeStyle={activeStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Portfolio" style={linkStyle} activeStyle={activeStyle}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/Connect" style={linkStyle} activeStyle={activeStyle}>
            Connect
          </Link>
        </li>
      </ul>
    </div>
  )
}
