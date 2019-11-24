import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layoutindex"
import Indeximage from "../components/indeximage"
import SEO from "../components/seo"
import { Row, Col, Image, Button } from 'react-bootstrap';
import indexStyle from "./index.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons'

import {  graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
        query {
            allContentfulNews ( sort: { fields: publishedDate, order: DESC } limit:4) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"DD / MM / YYYY")
                        image {
                          file {
                              url
                          }    
                        }
                    }
                }
            }
        
        
        allContentfulShows ( sort: { fields: showDate, order: ASC } limit:12
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
                    showDate(formatString:"DD / MM / YYYY")
                    tiketLink
                    image {
                      file {
                          url
                      }    
                    }
                }
            }
        }
    

        allContentfulSponsors 
        {
          edges {
            node {
              sponsor {
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
      <Col sm={12} md={12} lg={12}>
        <h1 className={indexStyle.underline + ' ' + indexStyle.colored}>Shows</h1>
          <div className={indexStyle.shows}>
          
            {data.allContentfulShows.edges.map((edge) => {
              return (
             
              <div className={indexStyle.blockshows}>
              <Row>
                <Col sm={3} xs={0} md={3} lg={2}>
                    <Image className={indexStyle.roundimage} src={edge.node.image.file.url} alt={edge.node.title} />
                </Col>
                
                <Col sm={9} xs={12} md={9} lg={10}className={indexStyle.showsindex}>
                <Link className={indexStyle.showslink} to={`/shows/${edge.node.slug}`}><h3><strong>{edge.node.title} </strong> | <small>{edge.node.support}</small> | <small>{edge.node.support2}</small> | <small>{edge.node.support3}</small> | <small>{edge.node.support4}</small> </h3></Link>
                  <hr/>
                  <p><i>{edge.node.showDate}</i></p>
                  <hr />
                  <Button className={indexStyle.btn}><a href={edge.node.tiketLink}><FontAwesomeIcon icon={faTicketAlt} /> Acquista Biglietto</a></Button>
                  <Link className={indexStyle.showslinkext} to={`/shows/${edge.node.slug}`}> {' '} <FontAwesomeIcon icon={faExternalLinkAlt} /> Dettagli</Link>
                </Col>
              </Row>
              <hr />
              </div> 
              )
            })}
          </div>
      </Col>
      <Col className={indexStyle.parnersblock}>
        {/* <h1 className={indexStyle.underline + ' ' + indexStyle.colored}>Partners</h1> */}
            {data.allContentfulSponsors.edges.map(({ node }, i) =>(
              <Row  key={i}>
                {node.sponsor.map(sponsor => (
                <Col xs={6} sm={3} >
                 <Image src={sponsor.file.url} />
                </Col>
                ))}
              </Row>
            ))}
      </Col>
    </Row>
  </Layout>
  )
}

export default IndexPage


