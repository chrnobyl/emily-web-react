import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Lisbon from './Lisbon/Lisbon'
import Gdansk from './Gdansk/Gdansk'
import Paris from './Paris/Paris'
import Stockholm from './Stockholm/Stockholm'
import Phuket from './Phuket/Phuket'
import ImageCarousel from '../ImageCarousel'

const FeatureGuides = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Lisbon />
      </List.Item>
      <List.Item>
        <Gdansk />
      </List.Item>
      <List.Item>
        <Paris />
      </List.Item>
      <List.Item>
        <Stockholm />
      </List.Item>
      <List.Item>
        <Phuket />
      </List.Item>
    </List>
  )
}

export default FeatureGuides
