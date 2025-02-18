import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// controls the information that the board displays and highlights the active board on the sidemenu

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
        <App /> 
  </StrictMode>,
)
