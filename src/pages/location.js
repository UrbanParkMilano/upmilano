import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel } from 'react-bootstrap';
import Logoindex from "../components/indexfooter"
import locationStyle from "./location.module.scss"
import locationimg1 from "../images/location/location-1.png"
import locationimg2 from "../images/location/location-2.png"
import locationimg3 from "../images/location/location-3.png"
import locationimg4 from "../images/location/location-4.png"
import locationimg5 from "../images/location/location-5.png"
console.log(locationimg1)
console.log(locationimg2)
console.log(locationimg3)
console.log(locationimg4)
console.log(locationimg5)

const Location = () => {
  return (
  <Layout>
    <Carousel className={locationStyle.carousel}>
      <Carousel.Item>
        <img src={locationimg1} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
            <div>
             <Logoindex/>
            </div>
          </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item>
      <img src={locationimg2} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
            <div>
             <Logoindex/>
            </div>
          </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item>
      <img src={locationimg3} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
            <div>
             <Logoindex/>
            </div>
          </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item>
      <img src={locationimg4} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
            <div>
             <Logoindex/>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={locationimg5} alt="location img"/>
          <Carousel.Caption className={locationStyle.carouselcaptionlogo }>
            <div>
             <Logoindex/>
            </div>
          </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
  </Layout>
  )
}

export default Location


