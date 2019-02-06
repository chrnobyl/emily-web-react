import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../Sample'
import * as Constants from '../imageNames'
import '../../../../App.css'

const PhotoEssays = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'Hotel De Nell (Paris)'} images={Constants.hotelDeNellImages} extension={'.JPG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Puro (Krakow)'} images={Constants.puroImages} extension={'.JPG'}/>
      </List.Item>
    </List>
  )
}

export default PhotoEssays
