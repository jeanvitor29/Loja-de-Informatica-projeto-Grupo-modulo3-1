import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
// páginas
import Home from './routes/Home';
import Compu from './component/produtos/Computadores';
import Perifericos from './component/produtos/Perifericos';
import Imp from './component/produtos/Impressoras'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
     {
       path: "/",
       element: <Home />
     },
     {
       path: "/Computadores",
       element: <Compu />
     },
     {
      path: "/periféricos",
      element: <Perifericos />
     },
     {
      path:"/impressoras",
      element: <Imp />
     },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
