import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import ImageCarousel from './ImageCarousel'
import '../App.css'

const PsInterviews = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <Modal trigger={<a>Masi Oka Profile (Tokyo)</a>} basic>
          <Header content='Masi Oka Profile (Tokyo)' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Stellan Skarsgård Profile (Stockholm)</a>} basic>
          <Header content='Stellan Skarsgård Profile (Stockholm)' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Steve Zahn Profile (Lexington)</a>} basic>
          <Header content='Steve Zahn Profile (Lexington)' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Flower Power (Poznan)</a>} basic>
          <Header content='Flower Power (Poznan)' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
      <List.Item>
        <Modal trigger={<a>Style Secrets of the French (Paris)</a>} basic>
          <Header content='Style Secrets of the French (Paris)' />
          <Modal.Content>
            <ImageCarousel className='carousel'/>
          </Modal.Content>
        </Modal>
      </List.Item>
    </List>
  )
}

export default PsInterviews
