import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ContactCard from "../components/IndividualComponents/ContactCard"
import githubImage from "../images/github.png"
import linkedInImage from "../images/linkedin.png"
import emailImage from "../images/email.png"

const Connect = () => {
  const textStyle = {}
  return (
    <Layout>
      <SEO title="Connect" />
      <h1
        style={{
          padding: "20px 20px 0 20px",
          textDecoration: "underline",
          textDecorationThickness: 5,
        }}
      >
        Connect
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
          You can reach me on GitHub, LinkedIn or my personal email. I love
          seeing ideas come to life and love talking about code! Please feel
          free to reach out!
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ padding: 20, marginTop: 16 }}>
          <ContactCard
            name="GitHub"
            image={githubImage}
            link="https://github.com/bbastanza"
          />
        </div>
        <div style={{ marginTop: 0, padding: 20 }}>
          <ContactCard
            name="LinkedIn"
            image={linkedInImage}
            link="https://www.linkedin.com/in/brian-bastanza-9035397b"
          />
        </div>
        <div style={{ padding: 20, marginTop: 14 }}>
          <ContactCard
            name="Email"
            image={emailImage}
            link="mailto: b.bastanza@gmail.com"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Connect
