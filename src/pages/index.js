import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import htmlLogo from "../images/LanguageLogos/html.png"
import cssLogo from "../images/LanguageLogos/css.png"
import dotnetLogo from "../images/LanguageLogos/dotnetcore.png"
import jsLogo from "../images/LanguageLogos/javascript.png"
import reactLogo from "../images/LanguageLogos/react.png"
import sqlLogo from "../images/LanguageLogos/sql2.png"
import csharpLogo from "../images/LanguageLogos/c_sharp.png"
import bootstrapLogo from "../images/LanguageLogos/bootstrap.png"

function IndexPage() {
  const style = {
    padding: 7,
  }
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
        }}
      >
        <p style={{ padding: "20px 20px 20px 10px" }}>
          {"    "}My name is <strong>Brian Bastanza</strong> and am a{" "}
          <em>full stack web developer</em> out of Lake Tahoe, CA. I am a
          student of web development and am passionate about building projects,
          learning code and getting better. I have used and am continuing to
          learn the following technologies:{" "}
        </p>
        <ul style={techStyle}>
          <li>C#</li>
          <li>ASP.NET</li>
          <li>SQL</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Bootstrap 4</li>
          <li>HTML 5</li>
          <li>CSS</li>
        </ul>
      </div>
      <div style={{ textAlign: "center" }}>
        <img style={style} src={csharpLogo} alt="csharp" />
        <img style={style} src={dotnetLogo} alt="dotnet" />
        <img style={style} src={sqlLogo} alt="sql" />
        <img style={style} src={jsLogo} alt="js" />
        <img style={style} src={reactLogo} alt="react" />
        <img style={style} src={bootstrapLogo} alt="bootstrap" />
        <img style={style} src={htmlLogo} alt="html" />
        <img style={style} src={cssLogo} alt="css" />
      </div>
    </Layout>
  )
}

export default IndexPage
