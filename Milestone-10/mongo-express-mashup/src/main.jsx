import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './Users.jsx';
import UpdatedUsers from './UpdatedUsers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    loader: ()=> fetch("http://localhost:5000/users"),
    element: <Users></Users>,
  },
  {
    path:"/users/:id",
    loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`),
    element: <UpdatedUsers></UpdatedUsers>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
