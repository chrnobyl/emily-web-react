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
        <List.Header>Hotel Photo Gallery Essays</List.Header>
        <PhotoEssays />
      </List.Item>
      <List.Item>
        <List.Header>Feature Guides</List.Header>
        <FeatureGuides />
      </List.Item>
      <List.Item>
        <List.Header>App Curation</List.Header>
        <AppCuration />
      </List.Item>
      <List.Item>
        <List.Header>Venue Write Ups</List.Header>
        <VenueWriteUps />
      </List.Item>
      <List.Item>
        <List.Header>Interviews</List.Header>
        <Interviews />
      </List.Item>
      <List.Item>
        <a target='_blank' rel='noopener noreferrer' href='https://www.designhotels.com/mycommunity/blog/2019/02/06/paris-fashion-secrets-louis-vuittons-editorial-director#more-8506'>Paris according to Louis Vuitton’s editorial director</a>
      </List.Item>
    </List>
  )
}

export default PorterSail
