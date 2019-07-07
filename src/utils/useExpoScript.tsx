import * as React from "react"
import { useEffect } from "react"

import LoadingText from "../components/LoadingText"

const useExpoScript = key => {
  useEffect(() => {
    const js = document.createElement("script")

    js.id = "expo_js"
    js.src = "https://go.regform.com/_assets/scripts/expo.js"
    js.onload = function() {
      ;(window as any).showForm("IframeDivId", key)
    }

    document.body.appendChild(js)
  }, [])

  return (
    <div id="IframeDivId">
      <LoadingText text="Loading registration form" />
    </div>
  )
}

export default useExpoScript
