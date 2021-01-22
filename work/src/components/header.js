import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header 
      id="home-modal"
    >
      <div
        className="title"
      >
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
        <h2
          className="tagline"
        ><Link
          to="/"
        >&#65310; Frontend Developer / Aspiring Programmer / Wannabe Storyteller
        </Link>
        </h2>
      </div>

    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
