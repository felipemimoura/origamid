import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import NaoEncontrada from './NaoEncontrada'
import Header from './Header'
import Login from './Login'
import Produto from './Produto'

function App() {
  return (
    <BrowserRouter >
    <Header />
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route path="sobre" element={<Sobre />} />
      <Route path="login" element={<Login />} />
      <Route path="produto/:id" element={<Produto />} />
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
