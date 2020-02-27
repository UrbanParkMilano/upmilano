/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Container } from 'react-bootstrap'
import Header from "./headerindex"
import Navigation from "./navbar"
import Footer from "./footer"
import layoutStyle from "./layout.module.scss"
import CookieConsent from "react-cookie-consent"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <>
      <Container>
  
          <Navigation></Navigation>

      </Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>

          <div className={layoutStyle.maincontainer} >
            <main>{children}</main>
          </div>

      </Container>
      <CookieConsent
        location="bottom"
        buttonText="Capisco"
        style={{ background: "#2B373B", fontSize: "12px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
        expires={150}
      >
        Questo sito utilizza i cookies per agevolare la navigazione, la prosecuzione della navigazione comporta la prestazione del consenso all'uso dei cookie.{" "}
        <Link to={"/privacycookyepolicy"}>
          <span style={{ color: "white", fontSize: "12px", textDecoration: "underline" }} >
           Clicca qui per avere maggiori informazioni
          </span>
        </Link>
    </CookieConsent>
      <Footer></Footer>
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout