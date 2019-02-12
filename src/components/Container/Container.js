import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styles from './Container.module.css'
import Home from './Home/Home'
import About from './About/About'
import Travel from './WritingSamples/Travel/Travel'
import Lifestyle from './WritingSamples/Lifestyle/Lifestyle'
import Entertainment from './WritingSamples/Entertainment/Entertainment'
import Contact from './Contact/Contact'
import PropTypes from 'prop-types'

const Container = (props) => {
  return (
    <div className={styles['container']}>
      <Switch>
        <Route exact path = '/' render= {() =><Home />}/>
        <Route exact path = '/about' render= {() =><About />}/>
        <Route exact path = '/travel' render= {() =><Travel />}/>
        <Route exact path = '/lifestyle' render= {() =><Lifestyle />}/>
        <Route exact path = '/entertainment' render= {() =><Entertainment />}/>
        <Route exact path = '/contact' render= {() =><Contact env={props.env} />}/>
      </Switch>
    </div>
  )
}

export default Container
