import logo from './logo.svg';
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import Products from './Components/Products';
import ProductForm from './Components/ProductForm';

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/services" element={<Services />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/product" element={<Products />}/>
      <Route path="/products/create" element={<ProductForm />} />
      <Route path="/products/edit/:id" element={<ProductForm />} />
      <Route path="*" element={<Navigate to ="/" />}/>

    </Routes>
    <Footer />
    </>
  );
}

export default App;
