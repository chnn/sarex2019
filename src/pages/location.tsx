import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

const LocationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      layout: file(relativePath: { eq: "walker_creek_buildings.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      map: file(relativePath: { eq: "walker_creek_area.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Location" />
      <div className="location-page page well">
        <h2>Location</h2>
        <p>
          SAREX 2019 will be held at{" "}
          <a
            title="map of Walker Creek Ranch"
            href="https://goo.gl/maps/WbWf3mAGTm72"
          >
            Walker Creek Ranch
          </a>{" "}
          in West Marin. More info coming soon!
        </p>
        <Img
          fluid={data.layout.childImageSharp.fluid}
          alt="layout of buildings at Walker Creek Ranch"
        />
        <Img
          fluid={data.map.childImageSharp.fluid}
          alt="map of surrounding arae at Walker Creek Ranch"
        />
      </div>
    </Layout>
  )
}

export default LocationPage
