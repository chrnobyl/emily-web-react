import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../../Sample/Sample'
import * as Constants from '../../imageNames'

const FabFitFun = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'15 Secret Starbucks Frappes You Should Order On National Coffee Day'} images={Constants.fabFitFun} extension={'.jpg'}/>
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

export default FabFitFun
