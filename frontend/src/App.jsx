import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';
import TradingSignals from './pages/TradingSignals';
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-dark text-brand-text selection:bg-brand-accent/30">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signals" element={<TradingSignals />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            {/* Future Routes:
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/analysis" element={<LiveAnalysis />} />
            */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
