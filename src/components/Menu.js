import React from "react"
import { Link } from "gatsby"

export default function Menu() {
  return (
    <div style={{ background: "#f4f4f4", paddingTop: 10 }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
