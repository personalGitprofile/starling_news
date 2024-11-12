import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/career",
              element: <Career />,
            },
        ]
    }
])

export default routers;