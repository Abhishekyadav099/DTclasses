import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-nav border-t border-brand-accent/20 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">DTClassess</span>
            <p className="mt-4 text-brand-muted text-sm">
              Empowering individuals with professional stock market education, daily analysis, and profitable signals.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-text tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/courses" className="text-base text-brand-muted hover:text-brand-accent transition-smooth">Courses</Link></li>
              <li><Link to="/signals" className="text-base text-brand-muted hover:text-brand-accent transition-smooth">Trading Signals</Link></li>
              <li><Link to="/analysis" className="text-base text-brand-muted hover:text-brand-accent transition-smooth">Market Analysis</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-text tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-brand-muted hover:text-brand-accent transition-smooth">About Us</Link></li>
              <li><Link to="/blog" className="text-base text-brand-muted hover:text-brand-accent transition-smooth">Blog</Link></li>
              <li><Link to="/contact" className="text-base text-brand-muted hover:text-brand-accent transition-smooth">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-text tracking-wider uppercase">Communities</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="https://t.me/telegram" target="_blank" rel="noopener noreferrer" className="flex items-center text-base text-brand-muted hover:text-[#0088cc] transition-smooth">Telegram Group ↗</a></li>
              <li><a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-base text-brand-muted hover:text-[#25D366] transition-smooth">WhatsApp Community ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-brand-accent/20 pt-8 flex items-center justify-between">
          <p className="text-base text-brand-muted">
            &copy; 2026 DTClassess. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
