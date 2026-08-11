import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store JWT token
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        // Redirect or update app state here
        window.location.href = '/dashboard'; // Temp redirect
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login. Please check if the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-brand-nav p-8 rounded-2xl border border-brand-accent/20 shadow-2xl glow-effect">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-brand-text">Welcome Back</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Sign in to access your dashboard and courses
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <div className="p-3 rounded bg-red-500/10 border border-red-500/50 text-red-500 text-sm text-center">{error}</div>}
          <div>
            <label className="block text-sm font-medium text-brand-text mb-2">Email Address</label>
            <input 
              name="email" 
              type="email" 
              required 
              onChange={handleChange}
              className="appearance-none block w-full px-4 py-3 border border-brand-muted/30 rounded-lg bg-brand-dark text-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-smooth" 
              placeholder="you@example.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text mb-2">Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              onChange={handleChange}
              className="appearance-none block w-full px-4 py-3 border border-brand-muted/30 rounded-lg bg-brand-dark text-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-smooth" 
              placeholder="••••••••" 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-600 text-brand-primary focus:ring-brand-primary bg-brand-dark" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-brand-muted">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-brand-primary hover:text-brand-accent transition-smooth">Forgot your password?</a>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-smooth ${loading ? 'bg-brand-muted cursor-not-allowed' : 'bg-brand-primary hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary'}`}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-brand-muted">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-brand-primary hover:text-brand-accent transition-smooth">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
