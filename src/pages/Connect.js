import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactCard from "../components/IndividualComponents/ContactCard"
import githubImage from "../images/github.png"
import linkedInImage from "../images/linkedin.png"
import emailImage from "../images/email.png"

const Connect = () => {
  return (
    <Layout>
      <SEO title="Connect" />
      <h1
        style={{
          padding: "20px 20px 0 20px",
          textDecoration: "underline",
          textDecorationThickness: 5,
          color: "#313131",
          whiteSpace: "nowrap",
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
          minWidth: 300,
        }}
      >
        <p style={{ padding: "20px 20px 20px 10px" }}>
          You can reach me on GitHub, LinkedIn or my personal email. I love
          seeing ideas come to life and love talking about code! Please feel
          free to reach out!
        </p>
      </div>
      <div className="row" style={{ justifyContent: "center", minWidth: 300 }}>
        <div className="col-lg-4 col-md-6 col-sm-12" style={{ padding: 20 }}>
          <ContactCard
            name="GitHub"
            image={githubImage}
            link="https://github.com/bbastanza"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12" style={{ padding: 20 }}>
          <ContactCard
            name="LinkedIn"
            image={linkedInImage}
            link="https://www.linkedin.com/in/bbastanza"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12" style={{ padding: 20 }}>
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
