import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <nav className="bg-brand-nav border-b border-brand-accent/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              DTclasses
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <Link to="/" className="text-brand-text hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-smooth">Home</Link>
            <Link to="/courses" className="text-brand-muted hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-smooth">Courses</Link>
            <Link to="/blog" className="text-brand-muted hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-smooth">Blog</Link>
            <Link to="/signals" className="text-brand-muted hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-smooth">Signals</Link>
            <Link to="/about" className="text-brand-muted hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-smooth">About</Link>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-brand-muted hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <button onClick={handleLogout} className="bg-red-500/10 text-red-500 hover:bg-red-500/20 px-4 py-2 rounded-md text-sm font-medium transition-smooth">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-brand-text hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-smooth">Login</Link>
                <Link to="/register" className="bg-brand-primary hover:bg-brand-accent text-white px-4 py-2 rounded-md text-sm font-medium transition-smooth glow-effect">Get Started</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
