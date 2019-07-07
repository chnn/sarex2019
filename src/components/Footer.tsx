import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./Footer.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
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
    <footer className="site-footer">
      <div className="badges">
        <Img
          className="site-footer__marin-badges"
          fixed={data.marinBadge.childImageSharp.fixed}
        />
        <Img
          className="site-footer__sheriff-badge"
          fixed={data.sheriffBadge.childImageSharp.fixed}
        />
        <Img
          className="site-footer__oes-badge"
          fixed={data.oesBadge.childImageSharp.fixed}
        />
      </div>
      <p>Hosted by Marin County Sheriff’s Search and Rescue</p>
    </footer>
  )
}

export default Footer
