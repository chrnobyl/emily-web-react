import React from 'react'
import { List } from 'semantic-ui-react'
import FeatureGuides from './FeatureGuides/FeatureGuides'
import PhotoEssays from './PhotoEssays/PhotoEssays'
import AppCuration from './AppCuration/AppCuration'
import VenueWriteUps from './VenueWriteUps/VenueWriteUps'
import Interviews from './Interviews/Interviews'

const PorterSail = (props) => {
  return (
    <List size='medium'>
      <List.Item>
        <p>Hotel Photo Gallery Essays</p>
        <PhotoEssays />
      </List.Item>
      <List.Item>
        <p>Feature Guides</p>
        <FeatureGuides />
      </List.Item>
      <List.Item>
        <p>App Curation</p>
        <AppCuration />
      </List.Item>
      <List.Item>
        <p>Venue Write Ups</p>
        <VenueWriteUps />
      </List.Item>
      <List.Item>
        <p>Interviews</p>
        <Interviews />
      </List.Item>
      <List.Item>
        <a target='_blank' rel='noopener noreferrer' href='https://www.designhotels.com/mycommunity/blog/2019/02/06/paris-fashion-secrets-louis-vuittons-editorial-director#more-8506'>Paris according to Louis Vuitton’s editorial director</a>
      </List.Item>
    </List>
  )
}

export default PorterSail
