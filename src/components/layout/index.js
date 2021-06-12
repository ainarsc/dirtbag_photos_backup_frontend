
import React from "react"
import GlobalStyles from "./globalStyles"
import PropTypes from "prop-types"
import NavBar from "./navBar"
import Footer from "./footer"
import theme from './theme'


const Layout = ({ children }) => {
  return (
    <>
    
    {/* <NavBar /> */}
    <main>
    <GlobalStyles theme={theme}/>{children}</main>
    {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout