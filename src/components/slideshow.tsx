import * as React from "react"
import { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useInterval from "@rooks/use-interval"

const Slideshow = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "slideshow" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const nodes = data.allFile.edges.map(edge => edge.node)

  const [index, nextIndex] = useReducer(state => (state + 1) % nodes.length, 0)

  useInterval(nextIndex, 4000, true)

  return (
    <div className="slideshow">
      <Img
        fluid={nodes[index].childImageSharp.fluid}
        className="slideshow-image"
      />
    </div>
  )
}

export default Slideshow
