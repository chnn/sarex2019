import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

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
          <Link to={to} activeClassName="active">
            {name}
          </Link>
        ))}
      </div>
    </section>
  )
}

const Nav = ({}) => {
  return (
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
        ]}
      />
      <Link to="/register" className="button" activeClassName="active">
        <button>Register</button>
      </Link>
    </nav>
  )
}

export default Nav
