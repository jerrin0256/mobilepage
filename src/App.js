import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero">
        <Hero />
      </div>
      <div className="features">
        <Features />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      <div className="faq">
        <FAQ />
      </div>
    </div>
  );
}

export default App;