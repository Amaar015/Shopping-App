import React from 'react'
import './App.css'
import { Button, Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Ecommerce</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App