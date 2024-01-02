import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import('bootstrap/dist/js/bootstrap.js')
import { FurnitContextProvider } from './context';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FurnitContextProvider>
        <App />
      </FurnitContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
