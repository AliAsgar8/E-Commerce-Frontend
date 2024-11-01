import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from './component/Footer'
import SearchBar from './component/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <ToastContainer/>
    <Navbar />
    <SearchBar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collections/>}/> 
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/order' element={<Order/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
