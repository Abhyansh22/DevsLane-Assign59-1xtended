import React,{ useState } from 'react'
import './App.css'
import ProductList from "./ProductList"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Nav from "./Nav"
import Footer from './Footer'
import ProductDetail from './ProductDetail'

function App() {


  return (
    <div className="bg-gray-100 flex flex-col gap-20 overflow-x-clip">
      <Nav />
      <div className=' bg-white w-[75vw] self-center flex flex-col p-20 gap-5'>
        <div className='grow'>
          <Routes>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/ProductDetail/:id" element={<ProductDetail/>}></Route>
          </Routes>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default App