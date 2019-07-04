import * as React from "react"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ScheduleTable from "../components/ScheduleTable"
import CourseCard from "../components/CourseCard"

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

  const timeSlots = [
    "Friday Evening",
    "Saturday Morning",
    "Saturday Afternoon",
    "Saturday Night",
    "Sunday Morning",
  ]

  return (
    <Layout>
      <SEO title="Schedule & Classes" />
      <div className="tracks-page page well">
        <h2>Schedule</h2>
        <div className="schedule">
          <ScheduleTable timeSlot="Friday Evening" tracks={tracks} />
          <ScheduleTable timeSlot="Saturday Morning" tracks={tracks} />
          <ScheduleTable timeSlot="Saturday Afternoon" tracks={tracks} />
          <ScheduleTable timeSlot="Saturday Night" tracks={tracks} />
          <ScheduleTable timeSlot="Sunday Morning" tracks={tracks} />
          <p className="alert">
            <span>* Note</span> The Friday K9 and USAR courses will require
            special pre-conference registration.
          </p>
        </div>
        <h2 className="all-courses">All Courses</h2>
        {tracks.map(track => (
          <Fragment key={track.id}>
            <h3 className="track-name" id={`${track.name}`}>
              <a className="anchor" href={`/tracks#${track.name}`}>
                {track.name}
              </a>
            </h3>
            {track.courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Fragment>
        ))}
      </div>
    </Layout>
  )
}

export default TracksPage
