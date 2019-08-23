const axios = require("axios")
const path = require("path")
const fs = require("fs")

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const BASE_URL = "https://api.airtable.com/v0/appFOosWCNWqmeJo1"
const SPONSORS_ENDPOINT = "/Sponsors"
const VENDORS_ENDPOINT = "/Vendors"
const RAFFLE_DONORS_ENDPOINT = "/Raffle%20Donors"

async function fetchTable(endpointURL) {
  const resp = await axios.get(`${BASE_URL}${endpointURL}`, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  })

  return resp.data.records
}

async function downloadImage(url, imagePath) {
  const writer = fs.createWriteStream(path.resolve(__dirname, imagePath))

  const resp = await axios({ url, method: "GET", responseType: "stream" })

  resp.data.pipe(writer)

  return new Promise((res, rej) => {
    writer.on("finish", res)
    writer.on("error", rej)
  })
}

async function downloadImages(endpoint, folderPath, registry) {
  const records = await fetchTable(endpoint)

  records
    .filter(r => r.fields.Logo)
    .forEach(({ id, fields: { Name, Link, Logo } }) => {
      const { url, filename } = Logo[0]
      const fileParts = filename.split(".")
      const fileExtension = fileParts[fileParts.length - 1]

      registry.push({ id, name: Name, url: Link })

      downloadImage(url, `${folderPath}/${id}.${fileExtension}`)
    })
}

async function main() {
  const registry = []

  await downloadImages(SPONSORS_ENDPOINT, "src/images/sponsors", registry)
  await downloadImages(VENDORS_ENDPOINT, "src/images/vendors", registry)
  await downloadImages(RAFFLE_DONORS_ENDPOINT, "src/images/raffle", registry)

  console.log(JSON.stringify(registry))
}

main()
