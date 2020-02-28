import React from "react"
import Layout from "../components/layout"
import { Row, Col, Carousel } from 'react-bootstrap';
import SEO from "../components/seo"
import locationStyle from "./location.module.scss"
import locationimg1 from "../images/location/location-1.png"
import locationimg2 from "../images/location/location-2.png"
import locationimg3 from "../images/location/location-3.png"
import locationimg4 from "../images/location/location-4.png"
import locationimg5 from "../images/location/location-5.png"
import locationimg6 from "../images/location/location-6.png"

const Location = () => {
  return (
  <Layout>
    <SEO title="Location"  description="Immagini del Parco e della struttura"/>

    <Carousel className={locationStyle.carousel} className="d-none d-sm-block">
      <Carousel.Item className={locationStyle.carouselitem}>
        <img src={locationimg1} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
          </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item className={locationStyle.carouselitem}>
          <img src={locationimg2} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
          </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item className={locationStyle.carouselitem}>
          <img src={locationimg3} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
          </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item className={locationStyle.carouselitem}>
          <img src={locationimg4} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={locationStyle.carouselitem}>
          <img src={locationimg5} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={locationStyle.carouselitem}>
          <img src={locationimg6} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
          </Carousel.Caption>
      </Carousel.Item>  
    </Carousel> 

    <Row>
      <Col xs={12} md={6} lg={4}>
        <img src={locationimg1} alt="location img"/>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <img src={locationimg2} alt="location img"/>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <img src={locationimg3} alt="location img"/>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <img src={locationimg4} alt="location img"/>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <img src={locationimg5} alt="location img"/>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <img src={locationimg6} alt="location img"/>
      </Col>
    </Row>
  </Layout>
  )
}

export default Location


