import * as React from "react"

import "./Alert.css"

const Alert = ({ heading = "", children }) => {
  return (
    <p className="alert">
      {heading && <span className="alert__heading">{heading}</span>} {children}
    </p>
  )
}

export default Alert
