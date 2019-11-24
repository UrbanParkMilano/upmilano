import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Carousel } from 'react-bootstrap';
import headerindexStyle from "./headerindex.module.scss"
import Logoindex from "./indexfooter"
import Homepagecarouselimg from "./homepagecarouselimg"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
        query {
            allContentfulShows ( sort: { fields: showDate, order: ASC } limit:4 
              filter: {title:{ne:"ttt"} }) {
                edges {
                    node {
                      title
                      slug
                      showDate(formatString: "DD / MM / YYYY")
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
    <Carousel className={headerindexStyle.carousel}>
      <Carousel.Item>
          
            <Homepagecarouselimg />
 
          <Carousel.Caption className={headerindexStyle.carouselcaptionlogo }>
            <div className={headerindexStyle.carousellogo }>
             <Logoindex/>
            </div>
          </Carousel.Caption>
      </ Carousel.Item>  
      {data.allContentfulShows.edges.map((edge) => {
      return (
      
      <Carousel.Item className={headerindexStyle.carouselitem}>
        <div>
          <img
            src={edge.node.image.file.url}
            alt={edge.node.title}
          />
        </div>
        <Carousel.Caption className={headerindexStyle.carouselcaption }>
          <h2 className={headerindexStyle.contbackground}><Link  className={headerindexStyle.showslink} to={`/shows/${edge.node.slug}`}>{edge.node.title}</Link></h2> <br />
          <h5 className={headerindexStyle.contbackground}><Link  className={headerindexStyle.showslink} to={`/shows/${edge.node.slug}`}><i>{edge.node.showDate}</i></Link></h5>
        </Carousel.Caption>
      </Carousel.Item>
        )
    })} 
       
    </Carousel>
    // <Carousel className={headerindexStyle.carousel}>
    //   {data.allContentfulCarousel.edges.map((edge) => {
    //   return ( 
    //   <Carousel.Item className={headerindexStyle.carouselitem }>
    //     <div >
    //       <img
    //         src={edge.node.image.file.url}
    //         alt={edge.node.title}
    //       />
    //     </div>
    //     <Carousel.Caption className={headerindexStyle.carouselcaption }>
    //       <h2 className={headerindexStyle.titlecarousel}>{edge.node.title}</h2> <br />
    //       {/* <h5 className={headerindexStyle.contbackground}><Link  className={headerindexStyle.showslink} to={`/shows/${edge.node.slug}`}><i>{edge.node.showDate}</i></Link></h5> */}
    //     </Carousel.Caption>
    //     </Carousel.Item>
    //     )
    // })} 
    // </Carousel>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
