import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';

import './index.css'
import 'normalize.css'
import Home from './Home/Home.jsx'
import Team from './AboutUs/Team/Team.jsx';
import AboutUs from './AboutUs/aboutUS.jsx';
import HomeContact from './HomeContact/HomeContact.jsx'
// Rutas de la pagina
const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home/> ),
  },
  {
    path: "/aboutus",
    element: ( <AboutUs/> ),
  },
  {
    path: "/help",
    element: (<HomeContact/>)
  },
  { 
    path: "/team",
    element: (<Team/>)
  }
])
createRoot(document.getElementById('root')).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <RouterProvider router = {router}/>
  </MantineProvider>
)
