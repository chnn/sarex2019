import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import sortBy from "../utils/sortBy"
import "./ScheduleTable.css"

const ScheduleTable = ({ timeSlot, tracks }) => {
  const sortedTracks = [...tracks]

  sortedTracks.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <table id={timeSlot} className="schedule-table">
      <thead>
        <tr>
          <th colSpan={2} className="time-slot">
            <h3>
              <a
                className="anchor"
                href={`/tracks#${timeSlot}`}
                title={`${timeSlot} Schedule`}
              >
                {timeSlot}
              </a>
            </h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortBy(tracks, "name").map(track => {
          const courses = track.courses.filter(
            course => course.timeSlot === timeSlot
          )

          if (courses.length === 0) {
            return null
          }

          return (
            <tr key={track.name}>
              <td className="track-name">
                {track.name}
                {timeSlot === "Friday Evening" &&
                  (track.name === "K9" || track.name === "USAR") &&
                  "*"}
              </td>
              <td className="courses">
                {sortBy(courses, "title").map(course => (
                  <div key={course.title} className="track-course">
                    <a
                      href={`/tracks#${encodeURIComponent(course.title)}`}
                      title="Course Details"
                      className="anchor"
                    >
                      {course.title}
                    </a>
                  </div>
                ))}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ScheduleTable
