import React from "react"

export default function PortfolioCard({ data }) {
  return (
    <div className="row" style={{ padding: 40 }}>
      <div className="col-md-6 col-sm-12 row" style={{ padding: 20 }}>
        <h2 className="col-12" style={{ color: "#313131" }}>
          {data.title}
        </h2>
        <p className="col-12" style={{ color: "#313131" }}>
          {data.description}
        </p>
        <a href={data.link} rel="noreferrer" target="_blank">
          <button style={{ margin: 2 }} className="btn btn-info">
            Check it out here
          </button>
        </a>
        <a href={data.github} rel="noreferrer" target="_blank">
          <button style={{ margin: 2 }} className="btn btn-info">
            GitHub Repository
          </button>
        </a>
      </div>
      <div className="col-md-6 col-sm-12">
        <a href={data.link} rel="noreferrer" target="_blank">
          <img
            style={{ borderRadius: 5 }}
            className="portfolio-image"
            src={data.image}
            alt="screenshot"
          />
        </a>
      </div>
    </div>
  )
}
