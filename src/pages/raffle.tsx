import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import LogoGrid from "../components/LogoGrid"

const RafflePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "raffle" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout title="Raffle">
      <div className="page well">
        <h2>Raffle</h2>
        <p>
          The SAREX 2019 raffle is possible in part due to these generous
          donors:
        </p>
        <LogoGrid data={data} />
        <p>Thank you donors!</p>
      </div>
    </Layout>
  )
}

export default RafflePage
