import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './routes/App'
import Cart from './routes/Cart'
import Discover from './routes/Discover'
import './index.css'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
)
