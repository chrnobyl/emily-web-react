import React, { Component } from 'react'
import { Image, Transition } from 'semantic-ui-react'
import styles from './Logos.module.css'

export default class Logos extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <div className={styles['logo-grid']}>
        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['logo-intro']}>
            I've written for these companies:
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['redfin']} onClick={()=> window.open('https://www.redfin.com/blog/author/emily-hochbergredfin-com', '_blank')}>
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['mtv']} onClick={()=> window.open('http://www.mtv.com/news/author/emilyhochberg/', '_blank')}>
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['jerusalem-post']}>
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['grey']}>
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['xfinity']} onClick={()=> window.open('https://es.xfinity.com/sdmy/blogs/tv/author/emilyhochberg/page/1/', '_blank')}>
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['portersail']}>
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['fabfitfun']}>
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['secret-escapes']}>
          </div>
        </Transition>

        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['people']}>
          </div>
        </Transition>
        
        <Transition visible={visible} animation='fade' duration={800}>
          <div className={styles['buzzfeed']}>
          </div>
        </Transition>
      </div>
    )
  }
}
