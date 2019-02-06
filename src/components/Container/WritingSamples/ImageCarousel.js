import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import { Divider } from 'semantic-ui-react'
import CustomDotGroup from './CustomDotGroup/CustomDotGroup'

const ImageCarousel = (props) => (
  <CarouselProvider naturalSlideWidth={1} naturalSlideHeight={2} totalSlides={props.images.length}>
    <Slider>
      {
        props.images.map((name, index) => (
        <Slide tag='a' index={index} key={index}>
          <Image src={require(`${props.location}/${name + props.extension}`)} />
        </Slide>
        )
      )}
    </Slider>

    <Divider />
    <CustomDotGroup slides={props.images.length} />
  </CarouselProvider>
)

export default ImageCarousel
