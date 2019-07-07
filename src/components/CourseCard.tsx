import * as React from "react"
import { useState } from "react"
import * as Markdown from "react-markdown"

const CourseInstructor = ({ name, affiliation, bio }) => {
  const [showBio, setShowBio] = useState(false)

  const toggleShowBio = () => setShowBio(!showBio)

  return (
    <div
      className={`instructor ${bio ? "has-bio" : ""}`}
      onClick={toggleShowBio}
    >
      <span className="name">{name}</span>
      {affiliation && <span className="affiliation">{affiliation}</span>}
      {bio && showBio && (
        <>
          <div className="bio">
            <Markdown source={bio} />
          </div>
        </>
      )}
    </div>
  )
}

const CourseCard = ({ course }) => {
  return (
    <div className="course-card" title={`${course.title}`}>
      <header>
        <div className="title" id={`${encodeURIComponent(course.title)}`}>
          <h4>
            <a
              className="anchor"
              href={`/tracks#${encodeURIComponent(course.title)}`}
            >
              {course.title}
            </a>
          </h4>
          <div className="time-slot">{course.timeSlot}</div>
        </div>
        {course.instructors.length > 0 && (
          <div className="instructors">
            {course.instructors.map(instructor => (
              <CourseInstructor
                key={instructor.id}
                name={instructor.name}
                bio={instructor.bio}
                affiliation={instructor.affiliation}
              />
            ))}
          </div>
        )}
      </header>
      {course.description && (
        <div className="description">
          <Markdown source={course.description} />
        </div>
      )}
    </div>
  )
}

export default CourseCard
