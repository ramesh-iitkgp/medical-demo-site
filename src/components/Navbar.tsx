import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col pt-32 px-8 border-b border-slate-100 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-6 text-slate-500 hover:text-slate-900"
        >
          <Icon icon="solar:close-circle-linear" className="w-8 h-8" />
        </button>
        <nav className="flex flex-col gap-8 text-2xl font-medium tracking-tight">
          <a href="#" className="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4">
            Services
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4">
            Specialists
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4">
            Research
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4">
            Patients
          </a>
        </nav>
        <div className="mt-auto mb-12">
          <a
            href="#"
            className="flex w-full items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider bg-slate-900 text-white py-4 rounded hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 w-full h-[80px] lg:h-[100px] flex items-center justify-between px-6 lg:px-[6%] border-b border-slate-100 bg-white/70 backdrop-blur-md animate-reveal sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-50 text-teal-600 rounded flex items-center justify-center">
            <Icon icon="solar:add-square-linear" className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            VITALIS
          </span>
        </div>

        <div className="hidden md:flex text-sm font-medium text-slate-500 gap-x-8 items-center">
          <a href="#" className="hover:text-slate-900 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Specialists
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Research
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Patients
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white py-2.5 px-5 rounded hover:bg-slate-800 transition-all shadow-md shadow-slate-200 hover:shadow-lg"
          >
            Book Consultation
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Icon icon="solar:hamburger-menu-linear" className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </>
  );
}
