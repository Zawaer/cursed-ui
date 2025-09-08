"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [mouse_position, set_mouse_position] = useState({ x: 0, y: 0 });
  const [dark_mode_enabled, set_dark_mode_enabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handle_mouse_move = (e: MouseEvent) => {
      set_mouse_position({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handle_mouse_move);
    return () => window.removeEventListener("mousemove", handle_mouse_move);
  }, []);

  const handle_forgot_username = () => {
    router.push('/forgot-username');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col gap-2 p-8 rounded-lg">
          <input className="p-1 border" placeholder="Username"></input>
          <input
            className="p-1 border"
            type="password"
            placeholder="Password"
          ></input>
          <button className="bg-blue-400 rounded-md">Login</button>
          
          {/* Authentication links */}
          <div className="flex flex-col gap-2 mt-4 text-sm">
            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <button className="text-blue-500 hover:text-blue-700 hover:underline">
                Sign in
              </button>
            </div>
            
            <div className="flex justify-between">
              <button 
                className="text-blue-500 hover:text-blue-700 hover:underline"
                onClick={handle_forgot_username}
              >
                Forgot username
              </button>
              <button className="text-blue-500 hover:text-blue-700 hover:underline">
                Forgot password
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Dark mode */}
      <button
        className="absolute px-4 py-2 text-white bg-gray-700 rounded cursor-pointer bottom-4 right-4 hover:bg-gray-800"
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
