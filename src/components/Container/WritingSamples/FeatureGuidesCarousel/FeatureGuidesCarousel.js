import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import { Divider } from 'semantic-ui-react'
import IMG_0849 from '../../../../IMG_0849.JPG'
import IMG_0850 from '../../../../IMG_0850.JPG'
import IMG_0851 from '../../../../IMG_0851.JPG'
import IMG_0852 from '../../../../IMG_0852.JPG'
import IMG_0853 from '../../../../IMG_0853.JPG'
import IMG_0854 from '../../../../IMG_0854.JPG'
import IMG_0855 from '../../../../IMG_0855.JPG'
import IMG_0856 from '../../../../IMG_0856.JPG'
import IMG_0857 from '../../../../IMG_0857.JPG'
import IMG_0858 from '../../../../IMG_0858.JPG'
import IMG_0859 from '../../../../IMG_0859.JPG'
import CustomDotGroup from '../CustomDotGroup/CustomDotGroup'
import '../../../../App.css'

const FeatureGuidesCarousel = () => (
  <CarouselProvider naturalSlideWidth={1} naturalSlideHeight={2} totalSlides={11}>
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
      <Slide tag='a' index={3}>
        <Image src={IMG_0852} />
      </Slide>
      <Slide tag='a' index={4}>
        <Image src={IMG_0853} />
      </Slide>
      <Slide tag='a' index={5}>
        <Image src={IMG_0854} />
      </Slide>
      <Slide tag='a' index={6}>
        <Image src={IMG_0855} />
      </Slide>
      <Slide tag='a' index={7}>
        <Image src={IMG_0856} />
      </Slide>
      <Slide tag='a' index={8}>
        <Image src={IMG_0857} />
      </Slide>
      <Slide tag='a' index={9}>
        <Image src={IMG_0858} />
      </Slide>
      <Slide tag='a' index={10}>
        <Image src={IMG_0859} />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={11} />
  </CarouselProvider>
)

export default FeatureGuidesCarousel
