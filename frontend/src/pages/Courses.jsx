import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  // Mock data for UI presentation
  const mockCourses = [
    {
      id: 1,
      title: "Beginner Price Action Strategy",
      description: "Learn the fundamentals of reading naked charts, support & resistance, and basic candlestick patterns.",
      price: "$49.99",
      instructor: "Trading Guru",
      tags: ["Beginner", "Price Action"]
    },
    {
      id: 2,
      title: "Advanced Risk Management",
      description: "Protect your capital. Learn position sizing, portfolio risk, and psychological discipline.",
      price: "$79.99",
      instructor: "Trading Guru",
      tags: ["Advanced", "Psychology"]
    },
    {
      id: 3,
      title: "Intraday Options Masterclass",
      description: "Master the art of options buying. Option greeks, delta neutral strategies, and expiry day trading.",
      price: "$149.99",
      instructor: "Options Master",
      tags: ["Intermediate", "Options"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-text mb-4">Premium Trading Courses</h1>
        <p className="text-xl text-brand-muted max-w-2xl mx-auto">
          Enroll in our expertly crafted courses and take your trading skills to the next level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCourses.map(course => (
          <div key={course.id} className="bg-brand-nav rounded-2xl overflow-hidden border border-brand-accent/20 flex flex-col hover:border-brand-primary/50 transition-smooth glow-effect shadow-lg">
            <div className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 h-48 w-full flex items-center justify-center">
              <span className="text-5xl">📊</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex space-x-2 mb-3">
                {course.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-2 py-1 bg-brand-dark text-brand-accent rounded-full border border-brand-accent/30">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2 line-clamp-2">{course.title}</h3>
              <p className="text-brand-muted text-sm mb-6 flex-grow line-clamp-3">{course.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-accent/10">
                <span className="text-2xl font-bold text-brand-text">{course.price}</span>
                <Link to={`/courses/${course.id}`} className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-smooth">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
