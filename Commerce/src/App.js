import React from 'react'
import './App.css'
import { Button, Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Abdullah Store</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App