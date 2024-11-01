import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';

import './index.css'
import 'normalize.css'
import Home from './Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Home />
  </MantineProvider>
)
