import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TechCard from "../components/IndividualComponents/TechCard"
import htmlLogo from "../images/LanguageLogos/html.png"
import cssLogo from "../images/LanguageLogos/css.png"
import dotnetLogo from "../images/LanguageLogos/dotnetcore.png"
import jsLogo from "../images/LanguageLogos/javascript.png"
import tsLogo from "../images/LanguageLogos/typescript.png"
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
            I am a <em>full stack web developer</em> out of Tahoe City, CA. My
            ability to find solutions by being creative in the development
            process is something I take pride in. Building software is
            captivating and it is remarkably exciting to see new projects come
            to life!
          </p>
          <p>
            Striving to push myself outside of my comfort zone, I am passionate
            about constructing complex applications using ASP.Net and React JS.
            Extending my personal development boundaries and finding new ways to
            write elegant code is essential to me.
          </p>
          <p>
            <em>What drives me?</em> Producing projects that are challenging and
            new.
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>I have used and continue to grow in the following technologies:</p>
      </div>
      <div
        style={{ textAlign: "center", justifyContent: "center" }}
        className="row"
      >
        <TechCard style={techStyle} src={csharpLogo} title="C#" />
        <TechCard style={techStyle} src={dotnetLogo} title="ASP.NET" />
        <TechCard style={techStyle} src={sqlLogo} title="SQL" />
        <TechCard style={techStyle} src={jsLogo} title="JavaScript" />
        <TechCard style={techStyle} src={tsLogo} title="TypeScript" />
        <TechCard style={techStyle} src={reactLogo} title="React" />
        <TechCard style={techStyle} src={bootstrapLogo} title="Bootstrap 4" />
        <TechCard style={techStyle} src={htmlLogo} title="HTML 5" />
        <TechCard style={techStyle} src={cssLogo} title="CSS" />
      </div>
    </Layout>
  )
}

export default IndexPage
