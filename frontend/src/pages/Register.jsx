import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: ''});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if(formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Registration successful! You can now login.');
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred during registration. Please check if the backend is running.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-brand-nav p-8 rounded-2xl border border-brand-accent/20 shadow-2xl glow-effect">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-brand-text">Create Account</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Join thousands of traders improving their edges today.
          </p>
        </div>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <div className="p-3 rounded bg-red-500/10 border border-red-500/50 text-red-500 text-sm text-center">{error}</div>}
          {success && <div className="p-3 rounded bg-green-500/10 border border-green-500/50 text-green-500 text-sm text-center">{success}</div>}
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1">Full Name</label>
            <input name="name" type="text" required onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-brand-muted/30 rounded-lg bg-brand-dark text-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-smooth" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1">Email Address</label>
            <input name="email" type="email" required onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-brand-muted/30 rounded-lg bg-brand-dark text-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-smooth" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1">Password</label>
            <input name="password" type="password" required onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-brand-muted/30 rounded-lg bg-brand-dark text-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-smooth" placeholder="••••••••" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1">Confirm Password</label>
            <input name="confirmPassword" type="password" required onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-brand-muted/30 rounded-lg bg-brand-dark text-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-smooth" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full flex justify-center py-3 px-4 mt-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-smooth">
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-brand-muted">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-brand-primary hover:text-brand-accent transition-smooth">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
