import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// store
import store from './store/store.js'

// router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// pages/layout
import AppLayout from './AppLayout.jsx'
import HomePage from './pages/HomePage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'

// Clerk
import { ClerkProvider } from '@clerk/clerk-react'
import { Provider } from 'react-redux'
import CartPage from './pages/CartPage.jsx'

// Import your publishable key - CLERK
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <div>Error Page Electon</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'productDetails/:id',
        element: <ProductDetailsPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)
