import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app.tsx'
import './index.css'
import { CartProvider } from './app/context/cart.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
