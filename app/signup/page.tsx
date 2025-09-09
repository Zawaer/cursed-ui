"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const col1 = ["j", "nov", "dec", "febr", "m", "sept"];
const col2 = ["octo", "em", "uly", "a", "une", "an"];
const col3 = ["ber", "y", "uary", "rch", "pril", "ugust"];

export default function SignupMonthPicker() {
  const router = useRouter();
  const [mouse_position, set_mouse_position] = useState({ x: 0, y: 0 });
  const [dark_mode_enabled, set_dark_mode_enabled] = useState(false);

  const [sel1, set_sel1] = useState<number | null>(null);
  const [sel2, set_sel2] = useState<number | null>(null);
  const [sel3, set_sel3] = useState<number | null>(null);

  useEffect(() => {
    const handle_mouse_move = (e: MouseEvent) => set_mouse_position({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle_mouse_move);
    return () => window.removeEventListener("mousemove", handle_mouse_move);
  }, []);

  const assembled = `${sel1 !== null ? col1[sel1] : ""}${sel2 !== null ? col2[sel2] : ""}${sel3 !== null ? col3[sel3] : ""}`;
  const [selected_month, set_selected_month] = useState<string | null>(null);
  const [error, set_error] = useState<string | null>(null);
  const [month_confirmed, set_month_confirmed] = useState(false);
  const [birth_date, set_birth_date] = useState('');

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-start gap-6 p-8">
        <h2 className="text-lg font-semibold">Select Birth date</h2>

        <div className="flex items-start gap-4">
          <div className="pt-2 text-sm">month</div>

          <div className="flex gap-2">
            {/* Column 1 */}
            <div className="w-24 h-56 overflow-y-auto bg-white border border-gray-300">
              <div className="px-2">
                {col1.map((part, i) => (
                  <button
                    key={i}
                    onClick={() => set_sel1(i)}
                    className={`w-full text-left py-3 text-sm font-medium break-all ${sel1 === i ? 'bg-blue-500 text-white' : ''}`}
                  >
                    {part}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-24 h-56 overflow-y-auto bg-white border border-gray-300">
              <div className="px-2">
                {col2.map((part, i) => (
                  <button
                    key={i}
                    onClick={() => set_sel2(i)}
                    className={`w-full text-left py-3 text-sm font-medium break-all ${sel2 === i ? 'bg-blue-500 text-white' : ''}`}
                  >
                    {part}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-24 h-56 overflow-y-auto bg-white border border-gray-300">
              <div className="px-2">
                {col3.map((part, i) => (
                  <button
                    key={i}
                    onClick={() => set_sel3(i)}
                    className={`w-full text-left py-3 text-sm font-medium break-all ${sel3 === i ? 'bg-blue-500 text-white' : ''}`}
                  >
                    {part}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm">Preview:</div>
          <div className="px-3 py-2 border rounded-md min-w-[160px]">{assembled || <span className="text-gray-400">(pick three pieces)</span>}</div>
        </div>

        {/* Confirmation picker - alphabetical month list */}
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Confirm month by selecting from the list</h3>
          <div className="w-40 h-56 overflow-y-auto bg-white border border-gray-300">
            <div className="px-2">
              {["April", "August", "December", "February", "January", "July", "June", "March", "May", "November", "October", "September"].map((month, i) => (
                <button
                  key={i}
                  onClick={() => set_selected_month(month)}
                  className={`w-full text-left py-3 text-sm font-medium ${selected_month === month ? 'bg-blue-500 text-white' : ''}`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="text-sm">Selected:</div>
            <div className="px-3 py-2 border rounded-md min-w-[160px]">{selected_month || <span className="text-gray-400">(select a month)</span>}</div>
          </div>
        </div>

        {/* Birth date input - appears after month confirmation */}
        {month_confirmed && (
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Enter birth date</h3>
            <input
              className="p-3 border rounded-md w-40"
              type="number"
              placeholder="Day (1-31)"
              value={birth_date}
              onChange={(e) => set_birth_date(e.target.value)}
              min="1"
              max="31"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          {error && <div className="text-red-600">{error}</div>}

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => router.back()}>
              Back
            </button>
            
            {!month_confirmed ? (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  // Validate match - check if assembled month matches selected month
                  if (assembled && selected_month && assembled.toLowerCase() === selected_month.toLowerCase()) {
                    set_error(null);
                    set_month_confirmed(true);
                  } else {
                    set_error('Month confirmation does not match. Please select the correct month.');
                  }
                }}
                disabled={!(sel1 !== null && sel2 !== null && sel3 !== null && selected_month !== null)}
              >
                Continue
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => {
                  if (birth_date && parseInt(birth_date) >= 1 && parseInt(birth_date) <= 31) {
                    // Complete signup process
                    alert(`Signup complete! Birth month: ${selected_month}, Birth date: ${birth_date}`);
                    router.push('/');
                  } else {
                    set_error('Please enter a valid birth date (1-31).');
                  }
                }}
                disabled={!birth_date}
              >
                Complete Signup
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Dark mode toggle kept for consistency */}
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
