import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../../Sample/Sample'

const JerusalemPost = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'Riding High'} images={['jp_riding_high']} extension={'.pdf'}/>
      </List.Item>
      <List.Item>
        <Sample title={"Tel Aviv's New Home Away From Home"} images={['jp_tel_aviv_home_away']} extension={'.pdf'}/>
      </List.Item>
      <List.Item>
        <Sample title={'No Smoking...!'} images={['jp_no_smoking']} extension={'.pdf'}/>
      </List.Item>
    </List>
  )
}

export default JerusalemPost
