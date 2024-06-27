import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Home from './Pages/Home.jsx'
import SignInPage from './Pages/Auth/SignIn.jsx'
import Dashboard from './Pages/Dashboard.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {

    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
