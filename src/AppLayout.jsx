import { Outlet } from 'react-router-dom';
import './App.css'

// components
import HeaderComponent from './components/HeaderComponent';
import Navbar from './components/Navbar.jsx';
import CategoryComponent from './components/CategoryComponent.jsx'

// axios
import axios from 'axios';
import FooterComponent from './components/FooterComponent.jsx';

axios.defaults.baseURL = 'https://dummyjson.com';

function AppLayout() {
  return (
    <div>
      {/* Header info */}
      <HeaderComponent />
      {/* Navbar component */}
      <Navbar />
      {/* Category */}
      <CategoryComponent />
      {/* Main content */}
      <Outlet />
      {/* Footer component */}
      <FooterComponent />
    </div>
  )
}

export default AppLayout;
