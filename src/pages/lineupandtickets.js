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
                      support2
                      support3
                      support4
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
          <SEO title="Line Up and Ticket"  description="La nostra programmazione sempre aggiornata - link per l'aquisto dei biglietti"/>
          <Row>
            <Col xs={12}>
            <h1 className={lineupandtiketsStyle.underline}>Shows</h1>
            <Table responsive className={lineupandtiketsStyle.table}>
              <thead>
                <tr>
                  <th><FontAwesomeIcon icon={faCalendarAlt}  size="2x"/>  <span>Data</span></th>
                  <th><FontAwesomeIcon icon={faDrum}  size="2x"/>  <span>Shows</span></th>
                  <th><FontAwesomeIcon icon={faTicketAlt}  size="2x"/> <span>Tickets</span></th>
                </tr>
              </thead>
              <tbody>
              {data.allContentfulShows.edges.map((edge) => {
                return (
                <tr>
                  <td>{edge.node.showDate}</td>
                  <td><Link to={`/shows/${edge.node.slug}`}><strong>{edge.node.title}</strong> <small>{edge.node.support}</small> <small>{edge.node.support2}</small> <small>{edge.node.support3}</small> <small>{edge.node.support4}</small></Link></td>
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