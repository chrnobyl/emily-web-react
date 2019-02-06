import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import { Divider } from 'semantic-ui-react'
// import IMG_0849 from '../../../../IMG_0849.JPG'
// import IMG_0850 from '../../../../IMG_0850.JPG'
// import IMG_0851 from '../../../../IMG_0851.JPG'
// import IMG_0852 from '../../../../IMG_0852.JPG'
// import IMG_0853 from '../../../../IMG_0853.JPG'
// import IMG_0854 from '../../../../IMG_0854.JPG'
// import IMG_0855 from '../../../../IMG_0855.JPG'
// import IMG_0856 from '../../../../IMG_0856.JPG'
// import IMG_0857 from '../../../../IMG_0857.JPG'
// import IMG_0858 from '../../../../IMG_0858.JPG'
// import IMG_0859 from '../../../../IMG_0859.JPG'
import CustomDotGroup from '../../CustomDotGroup/CustomDotGroup'
// import '../../../../App.css'

const AppCurationCarousel = () => (
  <CarouselProvider naturalSlideWidth={1} naturalSlideHeight={2} totalSlides={11}>
    <Slider>

    </Slider>

    <Divider />
    <CustomDotGroup slides={11} />
  </CarouselProvider>
)

export default AppCurationCarousel
