import React from "react"
import PropTypes from "prop-types"
import Div100vh from 'react-div-100vh';
import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "./footer"

const Layout = ({ entry, children }) => {
  return (
    <Div100vh className="flex flex-col font-sans tracking-tight">
      <SEO title={entry.title} description={entry.summary} />

      <Header entry={entry}/>

      {children}

      <Footer/>
    </Div100vh> 
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
