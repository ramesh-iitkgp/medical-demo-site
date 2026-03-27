import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactReport } from './components/ImpactReport';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-white text-slate-900 min-h-screen w-full selection:bg-teal-100 selection:text-teal-900 relative overflow-x-hidden antialiased">
      <Background />
      <Navbar />
      <Hero />
      <ImpactReport />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

