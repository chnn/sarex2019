import * as React from "react"
import { useEffect } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import useExpoScript from "../utils/useExpoScript"

const VendorRegistrationPage = () => {
  const expoDiv = useExpoScript("bjElEeZ")

  return (
    <Layout>
      <SEO title="Vendor Registration" />
      <div className="page well registration">
        <h2>SAREX 2019 Vendor Registration</h2>
        {expoDiv}
        <h3>Disclaimer</h3>
        <p>
          In the event that a Major Incident forces the cancellation of SAREX
          2019, we cannot guarantee that refunds will be available to
          participants who have purchased attendance packages. Marin SAR, as
          SAREX 2019 host, will make every effort to maximize potential refunds
          in such an event, however, the total funds available for refunds will
          be dictated, among other things, by how much of the expenses already
          paid for by MarinSAR for the event are recoverable.
        </p>
      </div>
    </Layout>
  )
}

export default VendorRegistrationPage
