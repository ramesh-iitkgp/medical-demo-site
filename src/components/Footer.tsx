import React from 'react';
import { Icon } from '@iconify/react';

export function Footer() {
  return (
    <footer className="relative w-full border-t border-slate-100 bg-slate-50 z-20 pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[6%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 text-slate-900 mb-6">
              <div className="w-6 h-6 bg-slate-200 text-slate-700 rounded flex items-center justify-center">
                <Icon icon="solar:add-square-linear" className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold tracking-tight">VITALIS</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Reimagining the patient experience through technology, design, and
              compassion.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                  Primary Care
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                  Pediatrics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                  Urgent Care
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase mb-6">
              Patients
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                  Portal Login
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                  Pay Bill
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end items-start">
            <div className="bg-white border border-slate-200 p-6 rounded-sm w-full sm:w-64">
              <span className="block text-xs font-mono text-slate-400 mb-2">
                EMERGENCY CONTACT
              </span>
              <span className="block text-2xl font-semibold text-slate-900 mb-1">
                555-0123
              </span>
              <span className="block text-sm text-slate-500">24/7 Triage Line</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 gap-4">
          <p className="text-xs text-slate-400">
            © 2024 VITALIS Health Group. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Icon icon="ri:twitter-x-line" className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Icon icon="ri:facebook-circle-line" className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Icon icon="ri:instagram-line" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
