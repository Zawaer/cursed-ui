"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [mouse_position, set_mouse_position] = useState({ x: 0, y: 0 });
  const [dark_mode_enabled, set_dark_mode_enabled] = useState(false);

  useEffect(() => {
    const handle_mouse_move = (e: MouseEvent) => {
      set_mouse_position({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handle_mouse_move);
    return () => window.removeEventListener('mousemove', handle_mouse_move);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Main content */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-amber-50 p-8 rounded-lg">
          <button 
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4 block"
            onClick={() => alert('Button clicked!')}
          >
            Test Button
          </button>
          
          <button 
            className="cursor-pointer bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
            onClick={() => set_dark_mode_enabled(!dark_mode_enabled)}
          >
            {dark_mode_enabled ? 'Disable' : 'Enable'} Dark Mode
          </button>
        </div>
      </div>

      {/* Dark overlay with circular reveal following the cursor */}
      {dark_mode_enabled && (
        <div 
          className="absolute inset-0 bg-black pointer-events-none"
          style={{
            maskImage: `radial-gradient(circle 100px at ${mouse_position.x}px ${mouse_position.y}px, transparent 10%, black 100%)`,
            WebkitMaskImage: `radial-gradient(circle 100px at ${mouse_position.x}px ${mouse_position.y}px, transparent 10%, black 100%)`,
          }}
        />
      )}
    </div>
  );
}
