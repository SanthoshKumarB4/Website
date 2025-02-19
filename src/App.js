import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/signup';
import Home from './home/home';
function App() {
  return (
    <HashRouter>
  
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>} />

      </Routes>
  

    </HashRouter>
    
  );
}

export default App;
