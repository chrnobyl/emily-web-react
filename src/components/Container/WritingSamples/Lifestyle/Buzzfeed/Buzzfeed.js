import React, { Component } from 'react'
import { List, Modal, Header } from 'semantic-ui-react'
import Sample from '../../Sample/Sample'

const Buzzfeed = (props) => {
  return (
    <List size='medium' relaxed>
      <List.Item>
        <a target='_blank' href='https://www.buzzfeed.com/efh45/17-thoughts-all-casual-skiiers-know-to-be-true-8b8t'>17 Thoughts All Casual Skiiers Know To Be True</a>
      </List.Item>
      <List.Item>
        <a target='_blank' href='https://www.buzzfeed.com/efh45/jewelry-retailer-blocks-customer-for-instagramming-8b8t'>Jewelry Retailer Blocks Customer For Instagramming About Missing Christmas Package</a>
      </List.Item>
      <List.Item>
        <a target='_blank' href='https://www.buzzfeed.com/efh45/is-germanys-world-cup-coach-actually-friday-night-8b8t'>Is That Germany's World Cup Coach Or Is It Friday Night Lights' Coach Taylor?</a>
      </List.Item>
      <List.Item>
        <a target='_blank' href='https://www.buzzfeed.com/efh45/what-its-like-to-be-single-in-new-york-in-the-spr-8b8t'>What It Feels Like To Be Single In New York During The Spring</a>
      </List.Item>
    </List>
  )
}

export default Buzzfeed
