import React from "react"
import PropTypes from "prop-types"
import Div100vh from 'react-div-100vh';

import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <Div100vh className="flex flex-col font-sans">
      {children}
      <Footer/>
    </Div100vh> 
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
