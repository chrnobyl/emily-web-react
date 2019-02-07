import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import styles from './Logos.module.css'

const Logos = (props) => {
  return (
    <div className={styles['logo-grid']}>
      <div className={styles['logo-intro']}>
        I've written for these companies:
      </div>
      <div className={styles['redfin']} onClick={()=> window.open('https://www.redfin.com/blog/author/emily-hochbergredfin-com', '_blank')}>
      </div>
      <div className={styles['mtv']} onClick={()=> window.open('http://www.mtv.com/news/author/emilyhochberg/', '_blank')}>
      </div>
      <div className={styles['jerusalem-post']}>
      </div>
      <div className={styles['grey']}>
      </div>
      <div className={styles['xfinity']} onClick={()=> window.open('https://es.xfinity.com/sdmy/blogs/tv/author/emilyhochberg/page/1/', '_blank')}>
      </div>
      <div className={styles['portersail']}>
      </div>
      <div className={styles['fabfitfun']}>
      </div>
      <div className={styles['secret-escapes']}>
      </div>
      <div className={styles['people']}>
      </div>
      <div className={styles['buzzfeed']}>
      </div>
    </div>
  )
}

export default Logos
