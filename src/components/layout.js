/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container  } from 'react-bootstrap';
import Navigation from "./navbar"
import Footer from "./footer"
import layoutStyle from "./layout.module.scss"


const Layout = ({ children }) => {

  
  return (
    <>
      <Container>
        <Navigation></Navigation>
      </Container>
      
      <Container>
        <div className={layoutStyle.maincontainer} >
          <main>{children}</main>
        </div>
      </Container>
      <Footer></Footer>
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
