const axios = require('axios')

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const BASE_URL = 'https://api.airtable.com/v0/appFOosWCNWqmeJo1'
const PEOPLE_ENDPOINT = '/People?maxRecords=3&view=Grid%20view'
const COURSES_ENDPOINT = '/Courses?maxRecords=3&view=Grid%20view'
const TRACKS_ENDPOINT = '/Tracks?maxRecords=3&view=Grid%20view'

function fetchRecords(endpointURL) {
  return axios.get(`${BASE_URL}${endpointURL}`, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`
    }
  })
}

fetchRecords(PEOPLE_ENDPOINT).then(r => console.log(r.data))
