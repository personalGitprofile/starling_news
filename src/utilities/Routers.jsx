import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
              path: "/",
              element: <Home />,
            },
        ]
    }
])

export default routers;