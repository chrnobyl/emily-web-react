import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import { Divider } from 'semantic-ui-react'
import IMG_0849 from '../IMG_0849.JPG'
import IMG_0850 from '../IMG_0850.JPG'
import IMG_0851 from '../IMG_0851.JPG'
import CustomDotGroup from './CustomDotGroup'
import '../App.css'

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={2}
    totalSlides={3}
  >
    <Slider>
      <Slide tag='a' index={0}>
        <Image src={IMG_0849} />
      </Slide>
      <Slide tag='a' index={1}>
        <Image src={IMG_0850} />
      </Slide>
      <Slide tag='a' index={2}>
        <Image src={IMG_0851} />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
)

export default ImageCarousel;
