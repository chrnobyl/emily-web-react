import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Lisbon from './Lisbon/Lisbon'
import Gdansk from './Gdansk/Gdansk'
import Paris from './Paris/Paris'
import Stockholm from './Stockholm/Stockholm'
import Phuket from './Phuket/Phuket'
import ImageCarousel from '../ImageCarousel'
import FeatureGuidesCarousel from './FeatureGuidesCarousel/FeatureGuidesCarousel'
import '../../../../App.css'

// const lisbon = ['lisbon_1', 'lisbon_2', 'lisbon_3', 'lisbon_4', 'lisbon_5',
//                 'lisbon_6', 'lisbon_7', 'lisbon_8', 'lisbon_9', 'lisbon_10',
//                 'lisbon_11']

const FeatureGuides = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Lisbon />
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Gdansk: The 50 Hour Guide</a>} basic>
          <Header content='Gdansk: The 50 Hour Guide' />
          <Modal.Content>
            <FeatureGuidesCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Paris: Hotel Neighborhood Guide</a>} basic>
          <Header content='Paris: Hotel Neighborhood Guide' />
          <Modal.Content>
            <FeatureGuidesCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Stockholm: Fika Neighborhood Guide</a>} basic>
          <Header content='Stockholm: Fika Neighborhood Guide' />
          <Modal.Content>
            <FeatureGuidesCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Phuket: Private Paradise</a>} basic>
          <Header content='Phuket: Private Paradise' />
          <Modal.Content>
            <FeatureGuidesCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
    </List>
  )
}

export default FeatureGuides
