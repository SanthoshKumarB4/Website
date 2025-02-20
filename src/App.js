import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/signup';
import Home from './home/home';
// import Welcome from './welcome/welcome';
import ProductDetails from './product/product';
function App() {
  return (
    <HashRouter>
  
    {/* <Welcome/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
  

    </HashRouter>
    
  );
}

export default App;
