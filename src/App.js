import React, { Component } from 'react';
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
