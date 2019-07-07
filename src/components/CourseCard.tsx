import * as React from "react"
import { useState } from "react"
import * as Markdown from "react-markdown"

import "./CourseCard.css"

const CourseInstructor = ({ name, affiliation, bio }) => {
  const [showBio, setShowBio] = useState(false)
  const toggleShowBio = () => setShowBio(!showBio)
  const bioClass = bio ? "course-instructor--with-bio" : ""

  return (
    <div className={`course-instructor ${bioClass}`} onClick={toggleShowBio}>
      <span className="course-instructor__name">{name}</span>
      {affiliation && (
        <span className="course-instructor__affiliation">{affiliation}</span>
      )}
      {bio && showBio && (
        <>
          <div className="course-instructor__bio">
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
      <header className="course-card__header">
        <div
          className="course-card__title"
          id={`${encodeURIComponent(course.title)}`}
        >
          <h4>
            <a
              className="anchor"
              href={`/tracks#${encodeURIComponent(course.title)}`}
            >
              {course.title}
            </a>
          </h4>
          <div className="course-card__time">{course.timeSlot}</div>
        </div>
        {course.instructors.length > 0 && (
          <div className="course-card__instructors">
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
        <div className="course-card__description">
          <Markdown source={course.description} />
        </div>
      )}
    </div>
  )
}

export default CourseCard
