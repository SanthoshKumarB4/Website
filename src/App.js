import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Login from './login/login';
import Home from './home/home';
import ProductList from './productlist/productlist';
import ProductDetails from './product/product';
import Navbar from './navbar/navbar';
import Footer from './footer/footer'; 
function App() {
  return (
    <>
    <HashRouter>
    <Navbar/>

      <Routes>
        { <Route path="/login" element={<Login />} /> }
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
       <Footer/> 

    </HashRouter>
   </>
  );
}

export default App;
