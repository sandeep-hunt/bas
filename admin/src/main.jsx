import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import './index.css';  // Tailwind CSS
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
