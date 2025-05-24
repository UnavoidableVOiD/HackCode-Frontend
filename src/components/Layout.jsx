import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-blue shadow-2xl border-b-4 border-white">
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;