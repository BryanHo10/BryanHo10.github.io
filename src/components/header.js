import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigate from "./models/navigate"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#636363`,
      marginBottom: `1.45rem`,
      width:`100%`,
      position:`fixed`,
      zIndex:2
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <Navigate
        navInfo={{
          _Home:`Home`,
          _Work:`Work Experience`,
          _Project:`Projects`,
          _Contact:`Contact Me`
        }}
      />
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
