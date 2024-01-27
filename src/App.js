import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Log from './Components/Log';
import Register from './Components/Register';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
      <Log/>
      <Register/>
      <Footer />
    </>
  );
}

export default App;
