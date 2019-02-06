import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../Sample'
import ImageCarousel from '../ImageCarousel'
import * as Constants from '../imageNames'

const FeatureGuides = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'Lisbon: The Best of the Best'} images={Constants.lisbonImages} extension={'.JPG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Gdansk: The 50 Hour Guide'} images={Constants.gdanskImages} extension={'.JPG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Paris: Hotel Neighborhood Guide'} images={Constants.parisImages} extension={'.JPG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Stockholm: Fika Neighborhood Guide'} images={Constants.stockholmImages} extension={'.JPG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Phuket: Private Paradise'} images={Constants.phuketImages} extension={'.JPG'}/>
      </List.Item>
    </List>
  )
}

export default FeatureGuides
