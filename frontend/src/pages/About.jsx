import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-4">About DTclasses</h1>
        <p className="text-xl text-brand-muted max-w-3xl mx-auto">
          We are dedicated to providing the highest quality stock market education and tools to help you succeed in the financial markets.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-brand-nav p-8 rounded-2xl border border-brand-accent/20 glow-effect">
          <h2 className="text-2xl font-bold text-brand-text mb-4">Our Mission</h2>
          <p className="text-brand-muted leading-relaxed mb-6">
            Trading the financial markets can be daunting. Our mission is to demystify the stock market and provide structured, actionable education. Whether you are a complete beginner or an experienced trader looking to refine your edge, DTclasses offers the resources you need.
          </p>
          <ul className="space-y-3 text-brand-muted">
            <li className="flex items-center"><span className="text-brand-accent mr-3">✓</span> Expert-led curriculum</li>
            <li className="flex items-center"><span className="text-brand-accent mr-3">✓</span> Data-driven trading signals</li>
            <li className="flex items-center"><span className="text-brand-accent mr-3">✓</span> Highly engaged community</li>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="bg-brand-dark p-6 rounded-xl border border-brand-primary/20">
            <h3 className="text-xl font-bold text-brand-text mb-2">10K+ Students</h3>
            <p className="text-brand-muted text-sm">Join a thriving community of traders sharing insights daily.</p>
          </div>
          <div className="bg-brand-dark p-6 rounded-xl border border-brand-accent/20">
            <h3 className="text-xl font-bold text-brand-text mb-2">85% Accuracy</h3>
            <p className="text-brand-muted text-sm">Our premium trading signals maintain high win rates across market conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
