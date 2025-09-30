"use client";

import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabase_url, supabase_anon_key);

export default function ForgotUsername() {
  const [mouse_position, set_mouse_position] = useState({ x: 0, y: 0 });
  const [dark_mode_enabled, set_dark_mode_enabled] = useState(false);
  const [password, set_password] = useState('');
  const [loading, set_loading] = useState(false);
  const [result, set_result] = useState<string | null>(null);
  const [error, set_error] = useState<string | null>(null);

  useEffect(() => {
    const handle_mouse_move = (e: MouseEvent) => {
      set_mouse_position({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handle_mouse_move);
    return () => window.removeEventListener("mousemove", handle_mouse_move);
  }, []);

  const handle_search_username = async () => {
    if (!password.trim()) {
      set_error('Please enter your password');
      return;
    }

    set_loading(true);
    set_error(null);
    set_result(null);

    try {
      const { data, error } = await supabase
        .from('users')
        .select('username')
        .eq('password', password);

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        if (data.length === 1) {
          set_result(`Your username is: ${data[0].username}`);
        } else {
          const usernames = data.map(user => user.username).join(', ');
          set_result(`Found multiple accounts with usernames: ${usernames}`);
        }
      } else {
        set_error('No account found with that password');
      }
    } catch (err) {
      set_error('An error occurred while searching. Please try again.');
      console.error('Error searching for username:', err);
    } finally {
      set_loading(false);
    }
  };

  const handle_back = () => {
    window.history.back();
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col w-full max-w-md gap-4 p-8 rounded-lg">
          <h1 className="mb-4 text-2xl font-bold text-center">Forgot Username</h1>
          <p className="mb-4 text-center text-gray-600">
            Enter your password to find your username
          </p>
          
          <input
            className="p-3 border rounded-md"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => set_password(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handle_search_username()}
          />
          
          <button
            className="p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handle_search_username}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Find Username'}
          </button>

          {result && (
            <div className="p-3 text-green-700 bg-green-100 border border-green-400 rounded-md">
              {result}
            </div>
          )}

          {error && (
            <div className="p-3 text-red-700 bg-red-100 border border-red-400 rounded-md">
              {error}
            </div>
          )}

          <button
            className="mt-4 text-center text-blue-500 hover:text-blue-700 hover:underline"
            onClick={handle_back}
          >
            ← Back to Login
          </button>
        </div>
      </div>

      {/* Dark mode */}
      <button
        className="fixed px-4 py-2 text-white bg-gray-700 rounded cursor-pointer bottom-4 right-4 hover:bg-gray-800 z-40"
        onClick={() => set_dark_mode_enabled(!dark_mode_enabled)}
      >
        {dark_mode_enabled ? "Disable" : "Enable"} Dark Mode
      </button>

      {dark_mode_enabled && (
        <div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{
            maskImage: `radial-gradient(circle 150px at ${mouse_position.x}px ${mouse_position.y}px, transparent 0%, black 100%)`,
            WebkitMaskImage: `radial-gradient(circle 150px at ${mouse_position.x}px ${mouse_position.y}px, transparent 0%, black 100%)`,
          }}
        />
      )}
    </div>
  );
}
