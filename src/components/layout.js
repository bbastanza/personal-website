/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <footer
          style={{
            marginTop: `2rem`,
            justifyContent: "space-between",
            backgroundColor: "#f3f3f3",
            borderRadius: 5,
            paddingTop: 12,
            color: "#313131",
          }}
        >
          <div style={{ display: "flex", padding: 10 }}>
            <p style={{ marginRight: "auto", padding: "10px 10px 0 10px" }}>
              © {new Date().getFullYear()} <strong>Brian Bastanza</strong>
            </p>

            <Link to="/">
              {" "}
              <button style={{ margin: 2 }} className="btn btn-info menu-link">
                Home
              </button>
            </Link>
            <Link to="/Portfolio">
              <button style={{ margin: 2 }} className="btn btn-info menu-link">
                Portfolio
              </button>
            </Link>
            <Link to="/Connect">
              <button style={{ margin: 2 }} className="btn btn-info menu-link">
                Connect
              </button>
            </Link>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
