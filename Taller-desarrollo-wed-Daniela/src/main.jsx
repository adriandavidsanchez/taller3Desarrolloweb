import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListaEmpleados from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaEmpleados />
  </StrictMode>,
)
