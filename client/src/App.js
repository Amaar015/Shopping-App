import React from 'react'
// import Layout from './Components/Layout/Layout'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import PageNot from './Pages/PageNot'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNot />} />

      </Routes>
    </>
  )
}

export default App