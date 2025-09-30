"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthSelect() {
  const router = useRouter();
  const [mouse_position, set_mouse_position] = useState({ x: 0, y: 0 });
  const [dark_mode_enabled, set_dark_mode_enabled] = useState(false);

  useEffect(() => {
    const handle_mouse_move = (e: MouseEvent) => set_mouse_position({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle_mouse_move);
    return () => window.removeEventListener("mousemove", handle_mouse_move);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-start gap-6 p-8">
        <h2 className="text-lg font-semibold">Select Birth date</h2>

        <div className="flex items-start gap-4">
          <div className="pt-2 text-sm">month</div>

          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="w-24 h-56 overflow-y-auto bg-white border border-gray-300"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <div className="px-2">
                  {months.map((m, i) => (
                    <div
                      key={i}
                      className="py-3 text-left text-sm font-medium break-all"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => router.back()}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => router.push('/')}
          >
            Done
          </button>
        </div>
      </div>

      {/* Dark mode toggle kept for consistency */}
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
