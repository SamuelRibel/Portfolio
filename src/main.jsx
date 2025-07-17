import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Header.css'
import './Hero.css'
import './Projects.css'
import './Stack.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
