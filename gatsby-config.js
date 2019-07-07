module.exports = {
  siteMetadata: {
    title: "SAREX 2019",
    description: "California State SAREX 2019",
    author: "Hosted by Marin County Sheriff's Search and Rescue Team",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143393938-1",
        head: false,
        respectDNT: true,
      },
    },
  ],
}
