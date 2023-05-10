import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import ProductDetails from './screen/ProductDetails';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='my-3'>
        <Container>
          <h1>Ecommerce</h1>
          {/* <HomeScreen /> */}
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/products/:id' element={<ProductDetails />} exact />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App