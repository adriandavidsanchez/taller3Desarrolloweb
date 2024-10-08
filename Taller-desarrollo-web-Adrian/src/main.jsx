import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TablaEmpleados from './TablaEmpleado.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TablaEmpleados />
  </StrictMode>,
)
