import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../../Sample/Sample'

const Buzzfeed = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'What It Feels Like To Be Single In New York During The Spring'} images={['buzzfeed_single_in_ny']} extension={'.pdf'}/>
      </List.Item>
    </List>
  )
}

export default Buzzfeed
