const axios = require("axios")

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const BASE_URL = "https://api.airtable.com/v0/appFOosWCNWqmeJo1"
const PEOPLE_ENDPOINT = "/People"
const COURSES_ENDPOINT = "/Courses"
const TRACKS_ENDPOINT = "/Tracks"

async function fetchTable(endpointURL) {
  const resp = await axios.get(`${BASE_URL}${endpointURL}`, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  })

  return resp.data.records
}

function camelCaseFields(fields) {
  return Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [
      key[0].toLowerCase() + key.substring(1).replace(/ /g, ""),
      value,
    ])
  )
}

function collectRecordsByID(records) {
  return records.reduce(
    (acc, record) => ({
      ...acc,
      [record.id]: {
        id: record.id,
        ...camelCaseFields(record.fields),
      },
    }),
    {}
  )
}

async function fetchAndParseRecords() {
  const [peopleResp, coursesResp, tracksResp] = await Promise.all([
    fetchTable(PEOPLE_ENDPOINT),
    fetchTable(COURSES_ENDPOINT),
    fetchTable(TRACKS_ENDPOINT),
  ])

  const peopleByID = collectRecordsByID(peopleResp)
  const coursesByID = collectRecordsByID(coursesResp)
  const tracksByID = collectRecordsByID(tracksResp)

  const result = Object.values(tracksByID).map(track => ({
    ...track,
    leader: peopleByID[track.leader[0]],
    courses: (track.courses || []).map(courseID => ({
      ...coursesByID[courseID],
      instructors: (coursesByID[courseID].instructors || []).map(
        instructorID => peopleByID[instructorID]
      ),
    })),
  }))

  return result
}

fetchAndParseRecords().then(result => console.log(JSON.stringify(result)))
