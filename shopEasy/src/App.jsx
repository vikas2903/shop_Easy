import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import Singleproduct from './Singleproduct'
import About from './About'
import Cart from './Cart'
import Error from './Error'
import {GlobalStyle} from './GlobalStyle';
import  {ThemeProvider} from 'styled-components';
function App() {

  const theme ={
    colors:{
      bg: '#d29c19'
    },
    media:{
      mobile: '768',
      tab: '1024'

    }
  }
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/singleproduct/id' element={<Singleproduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App
