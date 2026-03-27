import React from 'react';

export function Background() {
  return (
    <>
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] bg-sky-50 rounded-full blur-[80px] lg:blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-teal-50 rounded-full blur-[80px] lg:blur-[120px] opacity-60"></div>
      </div>

      {/* Global Grid System */}
      <div className="fixed inset-0 z-0 pointer-events-none hidden lg:block h-screen">
        <div className="grid-line-v" style={{ left: 'var(--gx-1)' }}></div>
        <div className="grid-line-v" style={{ left: 'var(--gx-2)' }}>
          <div className="beam-v" style={{ animation: 'beam-v 6s infinite 1s' }}></div>
        </div>
        <div className="grid-line-v" style={{ left: 'var(--gx-3)' }}>
          <div className="beam-v" style={{ animation: 'beam-v 7s infinite 3s' }}></div>
        </div>
        <div className="grid-line-v" style={{ left: 'var(--gx-4)' }}></div>

        <div className="grid-line-h" style={{ top: 'var(--gy-1)' }}></div>
        <div className="grid-line-h" style={{ top: '35%' }}></div>
        <div className="grid-line-h" style={{ top: '75%' }}></div>
      </div>
    </>
  );
}
