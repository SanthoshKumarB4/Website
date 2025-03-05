import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Login from './login/login';
import Home from './home/home';
import ProductList from './productlist/productlist';
import ProductDetails from './product/product';
import Navbar from './navbar/navbar';
import Footer from './footer/footer'; 
import Mobilepage from './mobilepage/mobilepage';
import Laptoppage from './laptoppage/laptoppage';

function App() {
  return (
    <>
    <HashRouter>
    <Navbar/>

      <Routes>
        { <Route path="/login" element={<Login />} /> }
        <Route path="/" element={<Home />} />
        <Route path="/mobilepage" element={<Mobilepage />} />
        <Route path="/laptoppage" element={<Laptoppage />} />

        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
       <Footer/> 

    </HashRouter>
   </>
  );
}

export default App;
