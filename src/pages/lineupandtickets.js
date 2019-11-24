import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Row, Col, Table, Button } from 'react-bootstrap';
import lineupandtiketsStyle from "./lineupandtickets.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt, faCalendarAlt, faDrum } from '@fortawesome/free-solid-svg-icons'


const Shows = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulShows ( sort: { fields: showDate, order: ASC } 
            filter: {title:{ne:"testpost"} }
             ) {
              edges {
                    node {
                      title
                      support
                      slug
                      showDate(formatString: "DD/MM/YYYY")
                      tiketLink
                      image {
                        file {
                            url
                        }
                      }
                    }  
                  }
                }
              }
    `)

    return (
        <Layout>
          <Row>
            <Col xs={12}>
            <h1 className={lineupandtiketsStyle.underline}>Shows</h1>
            <Table responsive className={lineupandtiketsStyle.table}>
              <thead>
                <tr>
                  <th><FontAwesomeIcon icon={faCalendarAlt}  size="2x"/>  Data</th>
                  <th><FontAwesomeIcon icon={faDrum}  size="2x"/>  Shows</th>
                  <th><FontAwesomeIcon icon={faTicketAlt}  size="2x"/>  Tikets</th>
                </tr>
              </thead>
              <tbody>
              {data.allContentfulShows.edges.map((edge) => {
                return (
                <tr>
                  <td>{edge.node.showDate}</td>
                  <td><Link to={`/shows/${edge.node.slug}`}><strong>{edge.node.title}</strong><strong>{edge.node.support}</strong></Link></td>
                  <td><Button className={lineupandtiketsStyle.btn}><a href={edge.node.tiketLink}>Acquista Biglietto</a></Button></td>
                </tr>
                )
              })}
              </tbody>
            </Table>
           </Col>
          </Row>
        </Layout>
    )
}

export default Shows