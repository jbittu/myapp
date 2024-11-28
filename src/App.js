import React from 'react'
import Header from './Header';
import Content from './Content';
import Footor from './Footer';
import Cart from './Cart';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
import Admin from './Admin';

export default function App() {
  return (
    <div>
        <Header></Header>
        <BrowserRouter>
        <Navbar></Navbar>
        <hr></hr>
        <Routes>
          <Route index element={<Content />} />
          <Route path="content" element={<Content />} />
          <Route path="cart" element={<Cart />} />
          <Route path="Login" element ={<Login/>}/>
          <Route path="Signup" element ={<Signup/>}/>
          <Route path="Admin" element ={<Admin/>}/>

        </Routes>
      </BrowserRouter>
        {/* <Content></Content> */}
        <Footor></Footor>
    </div>
  )
}

