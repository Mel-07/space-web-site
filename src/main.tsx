import React from 'react'
import ReactDOM from 'react-dom/client'
import { lazy ,Suspense} from 'react'
const App = lazy(()=>import('./App.tsx'))
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home.tsx';
import Destination from './Pages/Destination.tsx';
import Crew from './Pages/Crew.tsx';
import Technology from './Pages/Technology.tsx';
import { Provider } from "react-redux"
import { store } from './Redux/Store.ts';
import Loading from './Pages/Loading.tsx';

const routes = createBrowserRouter ([
  {
    path:'/',
    element:<Suspense fallback={<Loading/>}>
    <App />
    </Suspense>,
    errorElement:<div>Error</div>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path:'/destination',
        element:<Destination/>
      },
      {
        path:'/crew',
        element:<Crew/>
      },
      {
        path:'/technology',
        element:<Technology/>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}/>
    </Provider>
  </React.StrictMode>,
)
