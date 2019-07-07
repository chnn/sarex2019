import * as React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const LodgingPage = () => {
  return (
    <Layout>
      <SEO title="Lodging & Meals" />
      <div className="lodging-page page well">
        <h2>Lodging & Meals</h2>
        <p>
          Walker Creek Ranch has several accomodations available for SAREX 2019
          participants. All accomodations will include access to restrooms and
          showers and potable water. All meals are provided by Walker Creek
          Ranch. Most dietary restrictions can be accoomdated. Please see the{" "}
          <Link to="/faq" title="FAQ">
            FAQ
          </Link>{" "}
          for more details regarding dietary concerns.
        </p>
        <h3>Tent Camping</h3>
        <p>
          Tent camping will be available in designated sites throughout Walker
          Creek Ranch. All campers will have access to restrooms (plumbed or
          porta-potties) and a bath house for showers.
        </p>
        <p>
          <em>
            Total cost per person (full weekend, including all meals, taxes &
            fees): $138, or $148 After August 13.
          </em>
        </p>
        <h3>RVs/Campers</h3>
        <p>
          RV/Camper camper parking is limited. Registration will be 1st come 1st
          serve. Access to restrooms and showers is same as for tent campers.
          Oversized campers will have an extra fee due to limited space.
        </p>
        <p>
          <em>
            Total cost per person (full weekend, including all meals, taxes &
            fees): $138, or $148 after August 13.
          </em>
        </p>
        <p>
          <em>
            Oversized RV/Campers (vehicles AND trailers over 20 ft) an
            additional $20.
          </em>
        </p>
        <h3>Bunkhouse Cabins</h3>
        <p>
          Bunkhouse cabins are dormitory style rooms with bunk beds. There are
          15 cabins available. Linens will not be provided, so plan to bring
          your own. Discount available for teams booking 8 or more people in a
          bunk house. If interested in the group rate, please contact us at
          sarex@marinsar.org BEFORE registering any members.
        </p>
        <p>
          <em>
            Total cost per person (full weekend, including all meals, taxes &
            fees): $220, or $230 after August 13.
          </em>
        </p>
        <p>
          <em>
            Group rate available at $190; please contact{" "}
            <a href="mailto:sarex@marinsar.org">sarex@marinsar.org</a> BEFORE
            each person in the group registers.
          </em>
        </p>
        <h3>Semi-private lodging</h3>
        <p>
          Semi-private rooms accomodate 2-4 people in single beds that include
          all linens and shared bathroom and shower.{" "}
        </p>
        <p>
          <em>
            Total cost per person (full weekend, including all meals, taxes &
            fees): $311, or $321 after August 13.
          </em>
        </p>
      </div>
    </Layout>
  )
}

export default LodgingPage
