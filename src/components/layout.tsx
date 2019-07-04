import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Nav from "./Nav"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }

      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      marinBadge: file(relativePath: { eq: "marin_badge.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      sheriffBadge: file(relativePath: { eq: "sheriff_badge.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      oesBadge: file(relativePath: { eq: "oes.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="container">
        <header className="site-header">
          <div className="logo">
            <Link to="/">
              <Img fixed={data.logo.childImageSharp.fixed} />
            </Link>
          </div>
          <Nav />
        </header>
        {children}
        <footer className="site-footer">
          <div className="badges">
            <Img
              className="marin-badges"
              fixed={data.marinBadge.childImageSharp.fixed}
            />
            <Img
              className="sheriff-badge"
              fixed={data.sheriffBadge.childImageSharp.fixed}
            />
            <Img
              className="oes-badge"
              fixed={data.oesBadge.childImageSharp.fixed}
            />
          </div>
          <p>Hosted by Marin County Sheriff’s Search and Rescue</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
