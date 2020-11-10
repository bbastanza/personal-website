import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TechCard from "../components/IndividualComponents/TechCard"
import htmlLogo from "../images/LanguageLogos/html.png"
import cssLogo from "../images/LanguageLogos/css.png"
import dotnetLogo from "../images/LanguageLogos/dotnetcore.png"
import jsLogo from "../images/LanguageLogos/javascript.png"
import reactLogo from "../images/LanguageLogos/react.png"
import sqlLogo from "../images/LanguageLogos/sql2.png"
import csharpLogo from "../images/LanguageLogos/c_sharp.png"
import bootstrapLogo from "../images/LanguageLogos/bootstrap.png"
import personalPhoto from "../images/portfolio.jpg"

function IndexPage() {
  const techStyle = {
    fontWeight: "bold",
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1
        style={{
          padding: "20px 20px 0 20px",
          textDecoration: "underline",
          textDecorationThickness: 5,
          width: "auto",
          color: "#313131",
          whiteSpace: "nowrap",
        }}
      >
        Welcome
      </h1>
      <div
        style={{
          margin: 30,
          padding: 10,
          borderRadius: 5,
          color: "#313131",
          backgroundColor: "#f3f3f3",
          minWidth: 200,
        }}
      >
        <div style={{ padding: "20px 20px 0 10px" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={personalPhoto}
              alt="Brian Bastanza"
              style={{ width: "60%", borderRadius: 10, minWidth: 150 }}
            />
          </div>
          <p>
            I am a <em>full stack web developer</em> out of Tahoe City, CA. I
            pride myself on my ability to find solutions by being creative in
            the development process. Building software is captivating to me and
            it is remarkably exciting to see new projects come to life!
          </p>

          <p>
            Striving to push myself outside of my comfort zone, I am passionate
            about constructing complex applications using ASP.Net and React JS.
            I continue to extend my personal development boundaries and to find
            ways to write cleaner, more elegant code. I am driven to produce
            projects that are exciting and different than what I am used to.
          </p>
          <p>I have used and continue to grow in the following technologies:</p>
        </div>
      </div>

      <div style={{ textAlign: "center", display: "flex" }}>
        <TechCard src={csharpLogo} title="C#" />
        <TechCard src={dotnetLogo} title="ASP.NET" />
        <TechCard src={sqlLogo} title="SQL" />
        <TechCard src={jsLogo} title="JavaScript" />
        <TechCard src={reactLogo} title="React JS" />
        <TechCard src={bootstrapLogo} title="Bootstrap 4" />
        <TechCard src={htmlLogo} title="HTML 5" />
        <TechCard src={cssLogo} title="CSS" />
      </div>
    </Layout>
  )
}

export default IndexPage
