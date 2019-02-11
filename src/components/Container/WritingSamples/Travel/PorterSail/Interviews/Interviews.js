import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../../../Sample/Sample'
import * as Constants from '../imageNames'

const Interviews = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'Masi Oka Profile (Tokyo)'} images={Constants.masiOkaImages} extension={'.JPG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Stellan Skarsgård Profile (Stockholm)'} images={Constants.stellanImages} extension={'.JPG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Steve Zahn Profile (Lexington)'} images={Constants.steveZahnImages} extension={'.PNG'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Flower Power (Poznan)'} images={Constants.flowerPowerImages} extension={'.png'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Style Secrets of the French (Paris)'} images={Constants.styleSecretsImages} extension={'.png'}/>
      </List.Item>
    </List>
  )
}

export default Interviews
