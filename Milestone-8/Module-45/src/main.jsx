import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './Contact'
import Form from './Form'
import Users from './Users'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UsersDetails from './UsersDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/form",
        element: <Form></Form>,
      },
      {
        path: "/users",
        loader: ()=>fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/users/:usersDetails",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.usersDetails}`),
        element: <UsersDetails></UsersDetails>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
