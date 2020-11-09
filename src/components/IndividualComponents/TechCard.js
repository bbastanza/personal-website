import React from "react"

export default function TechCard({ src, title }) {
  const style = {
    padding: 7,
  }
  return (
    <div style={style}>
      <h6>{title}</h6>
      <img src={src} alt={title} />
    </div>
  )
}
