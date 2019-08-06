import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Slideshow from "../components/Slideshow"
import "./index.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allTracksJson {
        edges {
          node {
            name
          }
        }
      }

      honeaPortrait: file(relativePath: { eq: "kory.jpg" }) {
        childImageSharp {
          fixed(height: 350, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      walkerCreek: file(relativePath: { eq: "walker_creek.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const trackNames = data.allTracksJson.edges.map(({ node: { name } }) => name)

  return (
    <Layout title="Home">
      <div className="home-page">
        <section className="splash">
          <Slideshow />
          <div className="blurb">
            <p>
              California State SAREX 2019 will be held{" "}
              <b>October 4th, 5th, and 6th</b> at{" "}
              <a
                title="map of Walker Creek Ranch"
                href="https://goo.gl/maps/WbWf3mAGTm72"
              >
                Walker Creek Ranch
              </a>{" "}
              in West Marin.
            </p>
            <div className="break"></div>
            <p>
              <b>Stay in the loop with email updates.</b>
            </p>
            <form
              action="https://marinsar.us20.list-manage.com/subscribe/post?u=50044d9940d4cc2b7e494e167&amp;id=326cadd680"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div className="form-group">
                <label htmlFor="mce-EMAIL">Email Address </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  defaultValue=""
                />
              </div>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_50044d9940d4cc2b7e494e167_326cadd680"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>
              <input
                type="submit"
                value="Subscribe to updates"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </form>
          </div>
        </section>
        <section className="keynote">
          <div className="row jc-c">
            <h2>Keynote speaker</h2>
          </div>
          <div className="row ai-c bio-and-picture">
            <div className="blurb well">
              <p>
                We are honored to announce Sheriff Kory L. Honea as Keynote
                Speaker for SAREX 2019.
              </p>
              <p>
                Kory L. Honea became the 31st Sheriff of Butte County in May
                2014.
              </p>
              <p>
                During his law enforcement career, Sheriff Honea held
                assignments in corrections, patrol and investigations. In 2000,
                Sheriff Honea transferred to the District Attorney's Office as
                an investigator where he promoted through the ranks and became
                Chief Investigator in 2008. Sheriff Honea held that position
                until his return to the Butte County Sheriff's Office as
                Undersheriff in 2010.
              </p>
              <p>
                Sheriff Honea holds a Juris Doctorate from the Taft School of
                Law and is a member of the State Bar of California.
              </p>
              <p>
                Sheriff Honea and the Butte County Sheriff’s Office managed two
                of the largest recent disasters in California, the near Oroville
                Dam failure evacuation and the Camp Fire. The Camp Fire involved
                the largest SAR response in California history. Sheriff Honea’s
                leadership was instrumental in responding to these disasters.
              </p>
              <p>We look forward to hosting Sheriff Honea at SAREX 2019!</p>
            </div>
            <Img
              fixed={data.honeaPortrait.childImageSharp.fixed}
              alt="Picture of Sheriff Kory L. Honea"
            />
          </div>
        </section>
        <section className="tracks" id="tracks">
          <div className="row jc-c">
            <h2>Tracks & Courses</h2>
          </div>
          <div className="well">
            <p>
              SAREX 2019 have a number of different course tracks, including:
            </p>
            <ul>
              {trackNames.map(name => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <p>
              For complete course information, check out the{" "}
              <Link to="/tracks" title="Schedule & Classes">
                Schedule & Classes page
              </Link>
              .{" "}
            </p>
            <p>
              For an event overview, take a look at the{" "}
              <a
                href="/SAREX 2019 Master Schedule.pdf"
                title="SAREX 2019 Master Schedule"
              >
                SAREX 2019 Master Schedule (pdf)
              </a>
              .
            </p>
          </div>
        </section>
        <section className="location">
          <div className="row jc-c">
            <h2>Location</h2>
          </div>
          <p className="well">
            SAREX 2019 will be held at{" "}
            <a
              title="map of Walker Creek Ranch"
              href="https://goo.gl/maps/WbWf3mAGTm72"
            >
              Walker Creek Ranch
            </a>{" "}
            in West Marin.{" "}
            <Link
              to="/location"
              title="page with more information about Walker Creek Ranch"
            >
              Details &raquo;
            </Link>
          </p>
          <Img
            className="walker-creek-picture"
            fluid={data.walkerCreek.childImageSharp.fluid}
            alt="Picture of Walker Creek Ranch"
          />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
