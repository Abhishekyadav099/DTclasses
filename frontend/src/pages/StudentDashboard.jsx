import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-text">My Learning Dashboard</h1>
        <p className="text-brand-muted">Welcome back, {user?.name || 'Student'}! Let's continue your trading journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-brand-nav p-6 rounded-xl border border-brand-accent/20 text-center">
          <h3 className="text-4xl font-bold text-brand-primary mb-2">3</h3>
          <p className="text-sm text-brand-muted font-medium uppercase tracking-wider">Courses Enrolled</p>
        </div>
        <div className="bg-brand-nav p-6 rounded-xl border border-brand-accent/20 text-center">
          <h3 className="text-4xl font-bold text-brand-accent mb-2">12</h3>
          <p className="text-sm text-brand-muted font-medium uppercase tracking-wider">Lessons Completed</p>
        </div>
        <div className="bg-brand-nav p-6 rounded-xl border border-brand-accent/20 text-center">
          <h3 className="text-4xl font-bold text-purple-500 mb-2">8</h3>
          <p className="text-sm text-brand-muted font-medium uppercase tracking-wider">Signals Hit</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-brand-text mb-6">Continue Learning</h2>
      
      <div className="bg-brand-nav rounded-2xl overflow-hidden border border-brand-accent/20 flex flex-col md:flex-row hover:border-brand-primary/50 transition-smooth">
        <div className="bg-brand-dark md:w-1/3 flex items-center justify-center p-8">
          <span className="text-6xl">📈</span>
        </div>
        <div className="p-8 md:w-2/3 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-brand-text mb-2">Beginner Price Action Strategy</h3>
          <p className="text-brand-muted mb-6">Module 3: Advanced Candlestick Context</p>
          
          <div className="w-full bg-brand-dark rounded-full h-2.5 mb-2 border border-brand-muted/20">
            <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <p className="text-xs text-brand-muted mb-6 text-right">45% Completed</p>
          
          <div>
            <Link to="/courses/1" className="bg-brand-primary hover:bg-brand-accent text-white px-6 py-3 rounded-lg text-sm font-bold transition-smooth inline-block glow-effect">
              Resume Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
