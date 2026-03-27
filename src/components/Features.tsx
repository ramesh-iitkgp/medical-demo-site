import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();
  const revealRef4 = useScrollReveal();
  const revealRef5 = useScrollReveal();
  const revealRef6 = useScrollReveal();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.children;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section className="lg:py-32 bg-slate-50/50 w-full z-10 border-slate-100 border-t pt-24 pb-24 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute top-0 bottom-0 left-[6%] w-[1px] bg-slate-200/50"></div>
        <div className="absolute top-0 bottom-0 left-[28%] w-[1px] bg-slate-200/50"></div>
        <div className="absolute top-0 bottom-0 left-[62%] w-[1px] bg-slate-200/50"></div>
        <div className="absolute top-0 bottom-0 right-[6%] w-[1px] bg-slate-200/50"></div>
      </div>

      <div className="relative z-10 lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
        <div className="mb-20 lg:mb-24 max-w-4xl">
          <h2 ref={revealRef1} className="lg:text-7xl text-4xl font-medium text-slate-900 tracking-tight mb-8 scroll-reveal">
            Holistic Health
            <span className="text-slate-300"> Infrastructure.</span>
          </h2>
          <div ref={revealRef2} className="scroll-reveal delay-100 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              From primary care to advanced specialized treatments, VITALIS
              bridges the gap between patient comfort and medical innovation.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {/* Card 1 */}
          <div ref={revealRef3} className="scroll-reveal delay-200 col-span-1 lg:col-span-2 group hover:bg-white transition-all duration-300 flex flex-col hover:border-slate-300 h-full border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md">
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)',
                zIndex: 0,
              }}
            ></div>

            <div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-8 relative z-10">
              <Icon icon="solar:stethoscope-linear" className="w-6 h-6" />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Primary Care
              </h3>
              <p className="text-sm text-slate-500 font-normal leading-relaxed">
                Comprehensive annual checkups, preventative screenings, and
                personalized health plans.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={revealRef4} className="scroll-reveal delay-300 col-span-1 lg:col-span-2 group hover:bg-white transition-all duration-300 flex flex-col hover:border-slate-300 h-full border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md">
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)',
                zIndex: 0,
              }}
            ></div>

            <div className="h-12 w-12 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 mb-8 relative z-10">
              <Icon icon="solar:document-medicine-linear" className="w-6 h-6" />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Digital Records
              </h3>
              <p className="text-sm text-slate-500 font-normal leading-relaxed">
                Secure, instant access to your medical history, lab results, and
                prescriptions via our portal.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div ref={revealRef5} className="scroll-reveal delay-500 col-span-1 lg:col-span-2 group hover:bg-white transition-all duration-300 flex flex-col hover:border-slate-300 h-full border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md">
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)',
                zIndex: 0,
              }}
            ></div>

            <div className="h-12 w-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-8 relative z-10">
              <Icon icon="solar:test-tube-linear" className="w-6 h-6" />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                Advanced Diagnostics
              </h3>
              <p className="text-sm text-slate-500 font-normal leading-relaxed">
                State-of-the-art imaging and on-site laboratory for rapid,
                accurate diagnosis.
              </p>
            </div>
          </div>

          {/* Card 4: Wide */}
          <div ref={revealRef6} className="scroll-reveal delay-200 col-span-1 lg:col-span-3 group hover:bg-white transition-all duration-300 flex flex-col min-h-[300px] hover:border-slate-300 border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md">
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)',
                zIndex: 0,
              }}
            ></div>

            <div className="absolute top-8 right-8 text-slate-200 group-hover:text-teal-100 transition-colors">
              <Icon icon="solar:monitor-camera-linear" className="w-16 h-16" />
            </div>

            <div className="mt-auto relative z-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                Telemedicine Integration
              </h3>
              <p className="text-sm text-slate-500 font-normal leading-relaxed max-w-md">
                Connect with your doctor from the comfort of your home.
                High-definition video consultations allow for routine follow-ups
                without the commute.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="text-xs font-mono text-teal-700 bg-teal-50 border border-teal-100 px-2 py-1 rounded">
                  HIPAA Compliant
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Encrypted Video
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Wide */}
          <div className="scroll-reveal delay-300 col-span-1 lg:col-span-3 group hover:bg-white transition-all duration-300 flex flex-col min-h-[300px] hover:border-slate-300 border-slate-200 border rounded-sm p-8 relative bg-white/40 backdrop-blur-sm justify-between overflow-hidden shadow-sm hover:shadow-md">
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(15, 23, 42, 0.03), transparent 40%)',
                zIndex: 0,
              }}
            ></div>

            <div className="absolute top-8 right-8 text-slate-200 group-hover:text-sky-100 transition-colors">
              <Icon icon="solar:users-group-two-rounded-linear" className="w-16 h-16" />
            </div>

            <div className="mt-auto relative z-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                Specialist Network
              </h3>
              <p className="text-sm text-slate-500 font-normal leading-relaxed max-w-md">
                Direct referrals to the top specialists in the region. Our
                coordinated care model ensures your entire medical team is on
                the same page.
              </p>
              <div className="mt-8 flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                  alt=""
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=2070&auto=format&fit=crop"
                  alt=""
                />
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-600">
                  +12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
