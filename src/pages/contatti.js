import React from "react"
import { Row, Col } from 'react-bootstrap';
import Layout from "../components/layout"
import SEO from "../components/seo"
import contattiStyle from "./contatti.module.scss"

const Contatti = () => (
  <Layout>
    <Row className={contattiStyle.cont}>
      <Col xs={12}>
        <h1 className={contattiStyle.underline}>Contatti</h1>
        <br/>
      </Col>
      <Col xs={12}>
        <div className={contattiStyle.conttext}><hr />
        <h4 className={contattiStyle.contbackground}><a  href="info@urbanparkmilano.com">info@urbanparkmilano.com</a></h4><hr />
        <h4 className={contattiStyle.contbackground}><a  href="promozione@urbanparkmilano.com">promozione@urbanparkmilano.com</a></h4><hr />
        <h4 className={contattiStyle.contbackground}><a  href="produzione@urbanparkmilano.com">produzione@urbanparkmilano.com</a></h4><hr />
        </div>
      </Col>
    </Row>
  </Layout>
)

export default Contatti
