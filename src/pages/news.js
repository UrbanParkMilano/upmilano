import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Card, CardDeck } from 'react-bootstrap';
import Layout from '../components/layout'
import newsStyle from "./news.module.scss"


const News = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulNews ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                      title
                      slug
                      publishedDate(formatString: "DD / MM / YYYY")
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
            <h1 className={newsStyle.underline}>News</h1>
            <CardDeck>
            {data.allContentfulNews.edges.map((edge) => {
                    return (
            <Card className={newsStyle.card}>
                <Link to={`/news/${edge.node.slug}`}>
                    <Card.Img variant="top" src={edge.node.image.file.url} />
                </Link>    
                <Card.Body>
                <Card.Title><Link to={`/news/${edge.node.slug}`}>{edge.node.title}</Link></Card.Title>
                {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text> */}
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"> {edge.node.publishedDate}</small>
                </Card.Footer>
            </Card>
                )
            })}
            </CardDeck>
        </Layout>
    )
}

export default News