import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import "./sponsors.css"

const SponsorsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      jpmorgan: file(relativePath: { eq: "jpmc_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="Sponsors">
      <div className="sponsor-page page well">
        <h2>Sponsors</h2>
        <p>
          SAREX 2019 will be a superior learning and networking event thanks to
          generous contributions from the following organizations. Their
          contributions will allow us to provide an enhanced learning experience
          and reduce event costs for search and rescue volunteers from across
          the state of California. Thank you Sponsors!
        </p>
        <h3>Corporate Sponsor</h3>
        <Img
          fluid={data.jpmorgan.childImageSharp.fluid}
          alt="JPMorgan Chase & Co."
        />
        <hr />
        <p>
          <em>
            The Marin County Sheriff’s Office Search &amp; Rescue Unit is a
            501(c)3.
          </em>
        </p>
        <p>
          <em>
            If you interested in sponsorship of any kind, please contact April
            Kelly at{" "}
            <a href="aprilk@marinsar.org" title="April Kelly's email">
              aprilk@marinsar.org
            </a>
            .
          </em>
        </p>
        <p>
          <em>
            Additional information concerning sponsorship is available{" "}
            <a
              title="Additional sponsor information"
              href="/assets/docs/SAREX 2019 Sponsorship Program.pdf"
            >
              here
            </a>
            .
          </em>
        </p>
      </div>
    </Layout>
  )
}

export default SponsorsPage
