import React from 'react'
import { List } from 'semantic-ui-react'
import Sample from '../../../Sample/Sample'
import * as Constants from '../imageNames'

const AppCuration = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'Poznan App Curation'} images={Constants.poznanFeed} extension={'.PNG'}/>
      </List.Item>
    </List>
  )
}

export default AppCuration
