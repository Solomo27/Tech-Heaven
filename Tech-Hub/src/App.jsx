import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.scss'
import { AppContextProvider } from './Components/Global';

import Navbar from './Components/navbar/Navbar'
import Home from './Components/homePage/Home'
import ProductPage from './Components/productPage/ProductPage'
import Shop from './Components/shopPage/Shop'
import Cart from './Components/cartPage/Cart'
import Footer from './Components/footer/Footer'


const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/product/:id' element={<ProductPage />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Footer />
        </div>
      </AppContextProvider>
    </Router>
  )
}

export default App
