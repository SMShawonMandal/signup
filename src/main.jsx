import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../components/App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from '../components/Signup.jsx';
import Landing from '../components/Landing.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App/> ,
  },
  {
    path: "/",
    element: <Landing/> ,
  },
  {
    path: "/signup",
    element: <Signup/> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
