import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/20 via-brand-dark to-brand-dark -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Master the Markets with <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">DTClassess</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-brand-muted mb-10">
          Professional trading courses, highly accurate trading signals, and daily live market analysis to help you become a consistently profitable trader.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/courses" className="bg-brand-primary hover:bg-brand-accent text-white px-8 py-4 rounded-lg text-lg font-bold transition-smooth glow-effect shadow-lg shadow-brand-primary/30">
            Explore Courses
          </Link>
          <a href="https://t.me/telegram" target="_blank" rel="noopener noreferrer" className="bg-[#0088cc]/10 text-[#0088cc] border border-[#0088cc]/30 hover:bg-[#0088cc]/20 px-8 py-4 rounded-lg text-lg font-bold transition-smooth">
            Join Telegram Free
          </a>
        </div>
      </section>

      {/* Why Learn Trading */}
      <section className="bg-brand-nav py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-text">Why Learn With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-dark p-8 rounded-2xl border border-brand-accent/10 hover:border-brand-accent/50 transition-smooth">
              <div className="h-12 w-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-4">Structured Curriculum</h3>
              <p className="text-brand-muted">From complete beginner to advanced price action strategies, our courses are designed step-by-step.</p>
            </div>
            <div className="bg-brand-dark p-8 rounded-2xl border border-brand-accent/10 hover:border-brand-accent/50 transition-smooth">
              <div className="h-12 w-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-4">Live Market Targets</h3>
              <p className="text-brand-muted">Get access to premium trading signals with exact entry points, stop loss, and targets.</p>
            </div>
            <div className="bg-brand-dark p-8 rounded-2xl border border-brand-accent/10 hover:border-brand-accent/50 transition-smooth">
              <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-4">Community Support</h3>
              <p className="text-brand-muted">Join thousands of students in our private WhatsApp and Telegram communities for daily discussions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-nav to-brand-dark border border-brand-accent/30 rounded-3xl p-12 text-center glow-effect">
          {isAuthenticated ? (
            <>
              <h2 className="text-3xl font-bold text-white mb-6">Welcome Back to DTClassess</h2>
              <p className="text-brand-muted mb-8 text-lg">Continue your learning journey and access premium market analysis.</p>
              <Link to="/dashboard" className="bg-brand-primary hover:bg-brand-accent text-white px-8 py-4 rounded-lg text-lg font-bold transition-smooth inline-block">
                Go to Dashboard
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Trading Journey?</h2>
              <p className="text-brand-muted mb-8 text-lg">Create a free account today and get access to free introductory lessons and daily market updates.</p>
              <Link to="/register" className="bg-brand-accent hover:bg-brand-primary text-white px-8 py-4 rounded-lg text-lg font-bold transition-smooth inline-block">
                Register Now - It's Free
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
