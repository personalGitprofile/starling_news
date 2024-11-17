
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import LoginUser from './Authentication/LoginUser';
import Registration from './Authentication/Registration';
import NewsDetails from '../pages/NewsDetails/NewsDetails';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
              path: "/",
            element: <Home></Home>,
            loader: () => fetch('/news.json'),
            
          },
          {
            path: '/news/:id',
            element: <NewsDetails></NewsDetails>,
            loader:()=>fetch('/news.json')
            
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/career",
              element: <Career></Career>,
            },
            {
              path: "/login",
              element: <LoginUser></LoginUser>,
            },
            {
              path: "/registration",
              element: <Registration></Registration>,
            },
        ]
    }
])

export default routers;