import * as React from "react"
import Img from "gatsby-image"

import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"
import "./Layout.css"

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
