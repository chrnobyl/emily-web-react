import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import styles from './ImageCarousel.module.css'
import { Divider } from 'semantic-ui-react'
import CustomButtonGroup from '../CustomButtonGroup/CustomButtonGroup'

const ImageCarousel = (props) => (
  <CarouselProvider className={styles['carousel']} naturalSlideWidth={1} naturalSlideHeight={2} totalSlides={props.images.length}>
  {console.log(`../${props.location}/${props.images[0] + props.extension}`)}

    <CustomButtonGroup slides={props.images.length} />
    <Divider />
    <Slider>
      {
        props.images.map((name, index) => (
        <Slide tag='a' index={index} key={index}>
          <Image src={require(`../${props.location}/${name + props.extension}`)} />
        </Slide>
        )
      )}
    </Slider>
  </CarouselProvider>
)

export default ImageCarousel
