import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import '../../../../App.css';

const Logos = (props) => {
  return (
    <div className='logo-grid'>
      <div className='logo-intro'>
        I've written for these companies:
      </div>
      <div className='redfin' onClick={()=> window.open('https://www.redfin.com/blog/author/emily-hochbergredfin-com', '_blank')}>
      </div>
      <div className='mtv' onClick={()=> window.open('http://www.mtv.com/news/author/emilyhochberg/', '_blank')}>
      </div>
      <div className='jerusalem-post'>
      </div>
      <div className='grey'>
      </div>
      <div className='xfinity' onClick={()=> window.open('https://es.xfinity.com/sdmy/blogs/tv/author/emilyhochberg/page/1/', '_blank')}>
      </div>
      <div className='portersail'>
      </div>
      <div className='fabfitfun'>
      </div>
      <div className='secret-escapes'>
      </div>
      <div className='people'>
      </div>
      <div className='buzzfeed'>
      </div>
    </div>
  )
}

export default Logos
