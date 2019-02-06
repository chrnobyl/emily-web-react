import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../Sample'
import * as Constants from '../imageNames'
import '../../../../App.css'

const VenueWriteUps = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'Le Richer (Paris)'} images={Constants.leRicherImages} extension={'.PNG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Weranda Caffe (Poznan)'} images={Constants.werandaImages} extension={'.PNG'}/>
      </List.Item>
    </List>
  )
}

export default VenueWriteUps
