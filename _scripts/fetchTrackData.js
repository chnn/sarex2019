const axios = require('axios')

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const BASE_URL = 'https://api.airtable.com/v0/appFOosWCNWqmeJo1'
const PEOPLE_ENDPOINT = '/People?view=Grid%20view'
const COURSES_ENDPOINT = '/Courses?view=Grid%20view'
const TRACKS_ENDPOINT = '/Tracks?view=Grid%20view'

async function fetchTable(endpointURL) {
  const resp = await axios.get(`${BASE_URL}${endpointURL}`, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`
    }
  })

  return resp.data.records
}

function collectRecordsByID(records) {
  return records.reduce(
    (acc, record) => ({
      ...acc,
      [record.id]: {
        id: record.id,
        ...record.fields
      }
    }),
    {}
  )
}

async function fetchAndParseRecords() {
  const [peopleResp, coursesResp, tracksResp] = await Promise.all([
    fetchTable(PEOPLE_ENDPOINT),
    fetchTable(COURSES_ENDPOINT),
    fetchTable(TRACKS_ENDPOINT)
  ])

  const peopleByID = collectRecordsByID(peopleResp)
  const coursesByID = collectRecordsByID(coursesResp)
  const tracksByID = collectRecordsByID(tracksResp)

  const result = Object.values(tracksByID).map(track => ({
    ...track,
    Leader: peopleByID[track.Leader[0]],
    Courses: (track.Courses || []).map(courseID => ({
      ...coursesByID[courseID],
      Instructors: (coursesByID[courseID].Instructors || []).map(
        instructorID => peopleByID[instructorID]
      )
    }))
  }))

  return result
}

fetchAndParseRecords().then(result => console.log(JSON.stringify(result)))
