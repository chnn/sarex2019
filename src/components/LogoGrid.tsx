import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./LogoGrid.css"

const LogoGrid = ({ data }) => {
  const {
    allImageLinksJson: { nodes: imageLinks },
  } = useStaticQuery(graphql`
    query MyQuery {
      allImageLinksJson {
        nodes {
          id
          name
          url
        }
      }
    }
  `)

  const images = data.allFile.edges.map(edge => edge.node)

  return (
    <div className="logo-grid">
      {images.map((node, i) => (
        <a
          className="logo-grid__image"
          key={i}
          href={imageLinks.find(d => d.id === node.name).url}
          title=""
        >
          <Img
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            fluid={node.childImageSharp.fluid}
          />
        </a>
      ))}
    </div>
  )
}

export default LogoGrid
