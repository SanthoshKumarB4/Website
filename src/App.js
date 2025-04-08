import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
// import Login from './login/login';
import Home from './home/home';
import ProductList from './productlist/productlist';
import ProductDetails from './product/product';
import Navbar from './navbar/navbar';
import Footer from './footer/footer'; 
import Issue from './issue/issue';
import Admin from './admin/admin';
import './App.css';
import Services from './services/services';
import Contact from './contact/contact';

function App() {
  return (
    <>
    <div className='allpage'>
    <HashRouter>
    <Navbar/>

      <Routes>
        {/* { <Route path="/login/:id" element={<Login />} /> } */}
        <Route path="/" element={<Home />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
       <Footer/> 

    </HashRouter>
    </div>
   </>
  );
}

export default App;
