import React from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='my-3'>
        <Container>
          <h1>Ecommerce</h1>
          <Router path='/' component={<HomeScreen />} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App