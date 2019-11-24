import React from "react"
import { Row, Col } from 'react-bootstrap';
import Layout from "../components/layout"
import SEO from "../components/seo"
import forzeroforStyle from "./404.module.scss"
import { Link } from "gatsby"
import Logo404 from "../components/404img"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Row>
        <div class="col-md-12">
            <div className={forzeroforStyle.errortemplate}>
                <h1>Oops!</h1>
                <Logo404/>
                <h2>Il contenuto che stai cercando non è disponibile</h2>
                <h4>Ti consigliamo di ripartire dalla nostra <Link className={forzeroforStyle.linkcolored}to="/" >Home Page</Link></h4>
                 
            </div>
        </div>
    </Row>
  </Layout>
)

export default NotFoundPage
