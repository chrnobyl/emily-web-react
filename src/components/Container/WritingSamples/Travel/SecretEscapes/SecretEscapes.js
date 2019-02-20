import React from 'react'
import { List } from 'semantic-ui-react'
import Sample from './Sample/Sample'

const SecretEscapes = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Sample title={'Hacienda Encantada'} image={'Hacienda_Encantada_narrow'} extension={'.png'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Sirtaj Hotel'} image={'Sirtaj_Hotel_narrow'} extension={'.png'}/>
      </List.Item>
      <List.Item>
        <Sample title={'Chicago Athletic Association Hotel'} image={'Chicago_Athletic_Association_Hotel_narrow'} extension={'.png'}/>
      </List.Item>
    </List>
  )
}

export default SecretEscapes
