import React, { Component } from 'react';
// import NavBar from './NavBar'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container style={{position: 'relative'}}/>
        <Footer />
      </div>
    );
  }
}

export default App;
