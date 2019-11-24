import React from "react"
import footerStyle from "./footer.module.scss"
import { Container, Row, Col  } from 'react-bootstrap';
import Logofooter from "./logofooter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer =() => (
  <footer>
    <div className={footerStyle.footer}>
    <Container>
        <Row>
          <Col xs={10} sm={6} md={6} lg={4}>
          <div className={footerStyle.logofooter}>
            <Logofooter/>
          </div>  
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
          <div className={footerStyle.footercolumn}>
          <h3>Parco Esposizioni Novegro</h3>
          <h4>Via Novegro - 20900 Segrate</h4>
          <br/>
          <a><h3 className={footerStyle.underline}>info@urbanparkmilano.com</h3></a>
          <div className={footerStyle.socialblock}>
            <FontAwesomeIcon icon={faFacebook}  size="3x"/><FontAwesomeIcon className={footerStyle.icon} icon={faInstagram}  size="3x" /><FontAwesomeIcon className={footerStyle.icon} icon={faTwitter}  size="3x"/><FontAwesomeIcon className={footerStyle.icon} icon={faYoutube}  size="3x"/>
          </div>
          </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
          <div className={footerStyle.creditblock}>
            © {new Date().getFullYear()}, {` `} Urban Park Milano
          </div>
          </Col>
        </Row>
    </Container>
    </div>
  </footer>
)
export default Footer
