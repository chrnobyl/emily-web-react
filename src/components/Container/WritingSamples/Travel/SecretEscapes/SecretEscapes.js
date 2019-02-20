import React from 'react'
import { List } from 'semantic-ui-react'
import Sample from '../../Sample/Sample'

const SecretEscapes = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'Hacienda Encantada'} images={['Hacienda_Encantada']} extension={'.png'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Sirtaj Hotel'} images={['Sirtaj_Hotel']} extension={'.png'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Chicago Athletic Association Hotel'} images={['Chicago_Athletic_Association_Hotel']} extension={'.png'}/>
      </List.Item>
    </List>
  )
}

export default SecretEscapes
