import * as React from "react"
import { useEffect } from "react"

import Layout from "../components/Layout"

const RegistrationPage = () => {
  return (
    <Layout title="Register">
      <div className="page well registration">
        <h2>Register for SAREX 2019</h2>
        <p>
          We have reached capcity for SAREX 2019 and registration is now closed.
          If you would like to make the case to attend, please email{" "}
          <a href="mailto:sarex@marinsar.org" title="SAREX 2019 email">
            sarex@marinsar.org
          </a>
          .
        </p>
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

export default RegistrationPage
