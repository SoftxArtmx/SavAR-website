import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'normalize.css'
import Home from './Home/Home.jsx'
import Footer from './Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Footer/>
  </StrictMode>,
)
