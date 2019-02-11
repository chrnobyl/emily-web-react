import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../../Sample/Sample'

const JerusalemPost = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <a target='_blank' href='https://www.jpost.com/Travel/Around-Israel/Riding-high'>Riding High</a>
      </List.Item>
      <List.Item>
        <a target='_blank' href='https://www.jpost.com/Local-Israel/Tel-Aviv-And-Center/No-smoking-166424'>No Smoking...!</a>
      </List.Item>
      <List.Item>
        <a target='_blank' href='https://www.jpost.com/Local-Israel/Recycling-Hanukka'>Recycling Hanukka</a>
      </List.Item>
    </List>
  )
}

export default JerusalemPost
