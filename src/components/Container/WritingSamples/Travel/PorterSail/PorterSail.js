import React from 'react'
import { List } from 'semantic-ui-react'
import FeatureGuides from './FeatureGuides/FeatureGuides'
import PhotoEssays from './PhotoEssays/PhotoEssays'
import AppCuration from './AppCuration/AppCuration'
import VenueWriteUps from './VenueWriteUps/VenueWriteUps'
import Interviews from './Interviews/Interviews'
import styles from './PorterSail.module.css'

const PorterSail = (props) => {
  return (
    <List size='medium'>
      <List.Item style={{padding: 0}}>
        <p className={styles['header']}>Hotel Photo Gallery Essays</p>
        <PhotoEssays />
      </List.Item>
      <List.Item>
        <p className={styles['header']}>Feature Guides</p>
        <FeatureGuides />
      </List.Item>
      <List.Item>
        <p className={styles['header']}>App Curation</p>
        <AppCuration />
      </List.Item>
      <List.Item>
        <p className={styles['header']}>Venue Write Ups</p>
        <VenueWriteUps />
      </List.Item>
      <List.Item>
        <p className={styles['header']}>Interviews</p>
        <Interviews />
      </List.Item>
      <List.Item>
        <a target='_blank' rel='noopener noreferrer' href='https://www.designhotels.com/mycommunity/blog/2019/02/06/paris-fashion-secrets-louis-vuittons-editorial-director#more-8506'>Paris according to Louis Vuitton’s editorial director</a>
      </List.Item>
    </List>
  )
}

export default PorterSail
