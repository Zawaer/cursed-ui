"use client";

import { useState, useEffect } from 'react';

export default function AnnoyingUI() {
  const [cookie_banner_visible, set_cookie_banner_visible] = useState(false);
  const [cookie_banner_closing, set_cookie_banner_closing] = useState(false);
  const [popup_visible, set_popup_visible] = useState(false);
  const [confetti_pieces, set_confetti_pieces] = useState<Array<{id: number, x: number, delay: number}>>([]);

  // Random cursor setup
  useEffect(() => {
    const cursors = [
      'pointer', 'crosshair', 'move', 'text', 'wait', 'help', 'progress',
      'not-allowed', 'context-menu', 'cell', 'vertical-text', 'alias',
      'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize',
      'row-resize', 'n-resize', 's-resize', 'e-resize', 'w-resize',
      'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize',
      'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out'
    ];

    const applyRandomCursors = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          const randomCursor = cursors[Math.floor(Math.random() * cursors.length)];
          el.style.cursor = randomCursor;
        }
      });
    };

    // Apply immediately and then every 5 seconds to catch new elements
    applyRandomCursors();
    const interval = setInterval(applyRandomCursors, 5000);

    return () => clearInterval(interval);
  }, []);

  // Cookie banner logic
  useEffect(() => {
    const timer = setTimeout(() => {
      set_cookie_banner_visible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Random popup logic
  useEffect(() => {
    const schedule_popup = () => {
      const delay = Math.random() * 10000 + 10000; // 1-2 minutes
      setTimeout(() => {
        set_popup_visible(true);
        // Generate confetti
        const pieces = Array.from({length: 50}, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 2
        }));
        set_confetti_pieces(pieces);
        
        // Schedule next popup
        schedule_popup();
      }, delay);
    };

    schedule_popup();
  }, []);

  const close_cookie_banner = () => {
    set_cookie_banner_closing(true);
    setTimeout(() => {
      set_cookie_banner_visible(false);
      set_cookie_banner_closing(false);
    }, 500);
  };

  const close_popup = () => {
    set_popup_visible(false);
    set_confetti_pieces([]);
  };

  return (
    <>
      {/* Cookie Banner */}
      {cookie_banner_visible && (
        <div 
          className={`fixed top-0 left-0 right-0 z-50 bg-red-600 text-white p-6 shadow-lg transition-transform duration-500 ${
            cookie_banner_closing ? 'transform -translate-y-full' : 'transform translate-y-0'
          }`}
          style={{
            animation: cookie_banner_closing ? 'slideUp 0.5s ease-in' : 'slideDown 0.5s ease-out'
          }}
        >
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="text-2xl font-bold">
              🍪 THIS SITE USES COOKIES. IS THAT A PROBLEM? 🍪
            </div>
            <div className="flex gap-4">
              <button 
                className="px-2 py-1 text-xs bg-gray-500 rounded hover:bg-gray-600"
                onClick={() => {/* Does nothing */}}
              >
                yes
              </button>
              <button 
                className="px-8 py-3 text-xl font-bold bg-green-500 rounded hover:bg-green-600"
                onClick={close_cookie_banner}
              >
                NOT AT ALL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {popup_visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Confetti */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {confetti_pieces.map(piece => (
              <div
                key={piece.id}
                className="absolute w-2 h-2 bg-yellow-400 rounded"
                style={{
                  left: `${piece.x}%`,
                  animation: `fall 3s linear infinite`,
                  animationDelay: `${piece.delay}s`
                }}
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-8 rounded-lg border-4 border-yellow-300 max-w-md mx-4 text-center relative animate-pulse">
            <button 
              className="absolute top-2 right-2 text-white hover:text-gray-300"
              onClick={close_popup}
            >
              ✕
            </button>
            
            <div className="text-4xl font-bold text-white mb-4 animate-bounce">
              🎉 CONGRATULATIONS! 🎉
            </div>
            
            <div className="text-2xl font-bold text-white mb-2">
              YOU WON A FREE
            </div>
            
            <div className="text-5xl font-extrabold text-yellow-300 mb-4 animate-pulse">
              iPHONE 19 PRO MAX!
            </div>
            
            <div className="text-lg text-white mb-6">
              You are our 1,000,000th visitor!
              <br />
              Click below to claim your prize NOW!
            </div>
            
            <button 
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl font-bold py-4 px-8 rounded-full border-4 border-yellow-300 animate-bounce hover:scale-110 transform transition-transform"
              onClick={() => {
                close_popup();
              }}
            >
              🎁 CLAIM PRIZE!!! 🎁
            </button>
            
            <div className="text-xs text-white mt-4 opacity-75">
              *Offer expires in 00:59 seconds
            </div>
          </div>
        </div>
      )}

      {/* Push content down when cookie banner is visible */}
      {cookie_banner_visible && !cookie_banner_closing && (
        <div className="h-24"></div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { transform: translateY(0); }
          to { transform: translateY(-100%); }
        }
        
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
    </>
  );
}
