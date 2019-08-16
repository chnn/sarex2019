import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import "./Header.css"

const LinkGroup = ({ title, links }) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => setActive(!active)

  return (
    <section
      className={`link-group ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="title">{title} ▾</div>
      <div className="links">
        {links.map(({ to, name }) => (
          <Link key={name} to={to} activeClassName="active">
            {name}
          </Link>
        ))}
      </div>
    </section>
  )
}

const Nav = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">
          <Img fixed={data.logo.childImageSharp.fixed} />
        </Link>
      </div>
      <nav>
        <Link to="/" className="page-link" activeClassName="active">
          Home
        </Link>
        <Link to="/tracks" className="page-link" activeClassName="active">
          Schedule & Classes
        </Link>
        <LinkGroup
          title="Conference Details"
          links={[
            { to: "/codeofconduct", name: "Code of Conduct" },
            { to: "/location", name: "Location" },
            { to: "/lodging", name: "Lodging & Meals" },
            { to: "/faq", name: "FAQ" },
            { to: "/sponsors", name: "Sponsors" },
            { to: "/vendors", name: "Vendors" },
            { to: "/raffle", name: "Raffle" },
          ]}
        />
      </nav>
    </header>
  )
}

export default Nav
