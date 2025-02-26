import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/signup';
import Home from './home/home';
import Welcome from './welcome/welcome';
import Product from './product/product';
import Footer from './footer/footer';
function App() {
  return (
    <><HashRouter>


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />

        <Route path="/product/:id" element={<Product />} />

      </Routes>

    </HashRouter><Footer /></>
  );
}

export default App;
