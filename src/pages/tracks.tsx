import * as React from "react"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import ScheduleTable from "../components/ScheduleTable"
import CourseCard from "../components/CourseCard"
import Alert from "../components/Alert"
import sortBy from "../utils/sortBy"
import "./tracks.css"

const TIME_SLOTS = [
  "Friday Evening",
  "Saturday Morning",
  "Saturday Afternoon",
  "Saturday Night",
  "Sunday Morning",
]

const sortByTimeSlot = courses => {
  const result = [...courses]

  result.sort((a, b) => {
    return TIME_SLOTS.indexOf(a.timeSlot) - TIME_SLOTS.indexOf(b.timeSlot)
  })

  return result
}

const TracksPage = () => {
  const {
    allTracksJson: { nodes: tracks },
  } = useStaticQuery(graphql`
    query {
      allTracksJson {
        nodes {
          id
          name
          leader {
            affiliation
            bio
            id
            name
          }
          courses {
            description
            id
            timeSlot
            title
            track
            instructors {
              affiliation
              bio
              id
              name
            }
          }
        }
      }
    }
  `)

  return (
    <Layout title="Schedule & Classes">
      <div className="tracks-page page well">
        <h2>Schedule</h2>
        <Alert>
          For a complete event overview, take a look at the{" "}
          <a
            href="/SAREX 2019 Master Schedule.pdf"
            title="SAREX 2019 Master Schedule"
          >
            SAREX 2019 Master Schedule (pdf)
          </a>
          .
        </Alert>
        <div className="schedule">
          {TIME_SLOTS.map(timeSlot => (
            <ScheduleTable key={timeSlot} timeSlot={timeSlot} tracks={tracks} />
          ))}
          <Alert heading="* Note">
            The Friday K9 and USAR courses will require special pre-conference
            registration.
          </Alert>
        </div>
        <h2 className="all-courses">All Courses</h2>
        {sortBy(tracks, "name").map(track => (
          <Fragment key={track.id}>
            <h3 className="track-name" id={`${track.name}`}>
              <a className="anchor" href={`/tracks#${track.name}`}>
                {track.name}
              </a>
            </h3>
            {sortByTimeSlot(track.courses).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Fragment>
        ))}
      </div>
    </Layout>
  )
}

export default TracksPage
