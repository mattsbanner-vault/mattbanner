import React from "react"
import PropTypes from "prop-types"
import Div100vh from 'react-div-100vh';

import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <Div100vh className="flex flex-col p-4 font-sans">
      <main className={`max-w-3xl mx-auto w-full flex-grow flex items-center tracking-tight`}>{children}</main>
      <Footer/>
    </Div100vh> 
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
