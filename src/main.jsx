import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './utilities/Routers.jsx'
import AuthProvider from './utilities/providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={routers} ></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
