import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Particles from '../ui/Particles';
import CursorEffect from '../ui/CursorEffect';

const Layout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-bg-dark bg-stars">
      <Particles />
      <CursorEffect />
      <Navbar />
      <main className="pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;