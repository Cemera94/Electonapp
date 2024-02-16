import { Outlet } from 'react-router-dom';
import './App.css'

// components
import HeaderComponent from './components/HeaderComponent';
import Navbar from './components/Navbar.jsx';

function AppLayout() {

  return (
    <div>
      {/* Header info */}
      <HeaderComponent />
      {/* Navbar component */}
      <Navbar />
      <Outlet />
      {/* Footer component */}
    </div>
  )
}

export default AppLayout;
