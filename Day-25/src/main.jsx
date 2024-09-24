import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductContextProvider from './contexts/ProductContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </StrictMode>
)
