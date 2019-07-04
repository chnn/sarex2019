import * as React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

const VendorsPage = () => {
  return (
    <Layout>
      <SEO title="Vendors" />
      <div className="vendors-page page well">
        <h2>Vendors</h2>
        <p>
          Thank you for your interest in being a vendor at this year’s
          California State Search and Rescue Exercise (SAREX) hosted by the
          Marin County Sheriff’s Office. SAREX 2019 will welcome up to 400
          participants, including SAR members, National Guard, CAL-OES, and
          personnel from the Marin County Sheriff’s Office. The event provides a
          broad array of courses to enhance the knowledge and skill of
          participants and help prepare them for effective and efficient
          response to search &amp; rescue emergencies and disasters within the
          state of California and beyond.
        </p>
        <p>
          SAREX 2019 will be held at Walker Creek Ranch in Marin County, October
          4-6, 2019. Walker Creek Ranch is in west Marin between Petaluma and
          Marshall at 1700 Marshall-Petaluma Rd.
        </p>
        <p>
          SAREX 2019 vendors will receive an outdoor booth spot near the main
          dining lodge, access to electricity and wi-fi, recognition via their
          logo in the event program and on the SAREX 2019 website, and a
          receptive audience for your products. Vendors are required to pay a
          $100 participation fee, provide an item for the raffle (minimum $100
          value), and pay the regular attendance fees to cover meals and lodging
          for each company representative onsite.
        </p>
        <p>
          On behalf of the SAREX 2019 team, thank you for your interest in this
          event and in supporting search and rescue in California!
        </p>
        <p>
          Please contact Sarah Loughran at (415) 717-8581 or{" "}
          <a title="Sarah's Email" href="mailto:sarahl@marinsar.org">
            sarahl@marinsar.org
          </a>{" "}
          with any questions or to sign up to be a vendor at SAREX 2019.
        </p>
        <p>
          Thank you! We look forward to seeing you at the 2019 California SAREX!
          The California SAREX 2019 Team
        </p>
      </div>
    </Layout>
  )
}

export default VendorsPage
