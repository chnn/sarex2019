import * as React from "react"
import { useEffect } from "react"

import Layout from "../components/Layout"
import useExpoScript from "../utils/useExpoScript"

const RegistrationPage = () => {
  const expoDiv = useExpoScript("9jQ7bXl")

  return (
    <Layout title="Register">
      <div className="page well registration">
        <h2>Register for SAREX 2019</h2>
        <p>
          Agencies that plan to pay for all their members and would prefer to
          pay by check, please E-mail{" "}
          <a href="sarex@marinsar.org">sarex@marinsar.org</a>. We will issue you
          a special code to register all of your members and then invoice your
          agency. This must be completed by the early registration deadline,
          August 13th, 2019.
        </p>
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

export default RegistrationPage
