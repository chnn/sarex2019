import * as React from "react"

import "./LoadingText.css"

const LoadingText = ({ text = "Loading" }) => {
  return <div className="loading-text">{text}</div>
}

export default LoadingText
