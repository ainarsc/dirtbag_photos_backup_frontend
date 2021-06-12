
import React from "react"
import GlobalStyles from "./globalStyles"
import PropTypes from "prop-types"
import NavBar from "./navBar"
import Footer from "./footer"


const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyles />
    {/* <NavBar /> */}
    <Main>{children}</Main>
    {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout