import React from "react"

export default function ContactCard(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div
        style={{ textAlign: "center", cursor: "pointer", padding: 10 }}
        className="contact"
      >
        <img src={props.image} style={{ width: 200, height: 200 }} alt="icon" />
        <br />
        <h6 className="btn btn-dark menu-link">{props.name}</h6>
      </div>
    </a>
  )
}
