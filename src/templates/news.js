import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from 'react-bootstrap';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD / MM / YYYY")
      body {
        json
        
      }
    }
  }
`

const News = props => {
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
      <Col lg={{ span: 8, offset: 2 }}>
      <h1>{props.data.contentfulNews.title}</h1>
      <p><i>{props.data.contentfulNews.publishedDate}</i></p>
      {documentToReactComponents(props.data.contentfulNews.body.json, options)}
      </Col>
      </Row>
    </Layout>
  )
}

export default News
