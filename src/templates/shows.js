import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faTicketAlt, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import showsStyle from "./shows.module.scss"



export const query = graphql`
  query($slug: String!) {
    contentfulShows(slug: { eq: $slug }) {
      title
      image {
        file {
            url
        }
      }
      showDate(
        formatString: "DD / MM / YYYY"
        locale: "it-IT"
        )
      showtime(
        formatString: "HH:mm"
      )
      showGate(
        formatString: "HH:mm"
      )
      tiketLink
      body {
        json
      }
    }
  }
`

const Shows = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Row>
      <Col  xs={12} >
        <div className={showsStyle.imgcont}>
          <Image src={props.data.contentfulShows.image.file.url}/>
        </div>
      </Col>
      </Row>
      <Row>
      <Col  xs={12} sm={12} md={12} lg={6} >
      <span><FontAwesomeIcon icon={faCalendarAlt}  size="2x"/></span><span className={showsStyle.info}> Data</span> <h4 className={showsStyle.dati}>{props.data.contentfulShows.showDate}</h4><hr />
      <span><FontAwesomeIcon icon={faDoorOpen}  size="2x"/></span><span className={showsStyle.info}> Apertura porte</span> <h4 className={showsStyle.dati}>{props.data.contentfulShows.showtime}</h4><hr />
      <span><FontAwesomeIcon icon={faClock}  size="2x"/></span><span className={showsStyle.info}> Inizio concerto</span> <h4 className={showsStyle.dati}>{props.data.contentfulShows.showtime}</h4><hr />
      <span><FontAwesomeIcon icon={faTicketAlt}  size="2x"/></span><span className={showsStyle.info}><Button className={showsStyle.btn}> <a href={props.data.contentfulShows.tiketLink}> Acquista biglietto</a></Button></span><hr /> 
      </Col>
      <Col  xs={12} sm={12} md={12} lg={6}  >
      <h1>{props.data.contentfulShows.title}</h1>
      <div className={showsStyle.mainbody}>
       {documentToReactComponents(props.data.contentfulShows.body.json, options)}
      </div>
      </Col>
      
      </Row>
    </Layout>
  )
}

export default Shows
