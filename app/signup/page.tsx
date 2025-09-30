"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const col1 = ["j", "nov", "dec", "febr", "m", "sept"];
const col2 = ["octo", "em", "uly", "a", "une", "an"];
const col3 = ["ber", "y", "uary", "rch", "pril", "ugust"];

// PASTE YOUR TERMS OF SERVICE TEXT HERE:
const TERMS_OF_SERVICE_TEXT = `TERMS OF SERVICE AGREEMENT

Last Updated: October 1, 2025

PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING OUR WEBSITE OR SERVICES. BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS.

1. ACCEPTANCE OF TERMS

By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.

2. DESCRIPTION OF SERVICE

Our service provides users with access to a rich collection of resources, including various communications tools, forums, shopping services, search services, and personalized content through its network of properties which may be accessed through any various medium or device now known or hereafter developed.

3. USER ACCOUNTS AND REGISTRATION

To access certain features of our service, you must register for an account. When you register for an account, you may be required to provide us with some information about yourself, such as your name, email address, or other contact information. You agree that the information you provide to us is accurate and that you will keep it accurate and up-to-date at all times.

4. PRIVACY POLICY

Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree that we can use your data in accordance with our Privacy Policy.

5. USER CONTENT AND CONDUCT

You are solely responsible for the content and information that you post, upload, or display on or through the service. You agree that you will not use the service to upload, post, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.

6. INTELLECTUAL PROPERTY RIGHTS

The service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.

7. PROHIBITED USES

You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction. You may not use our service to transmit, or procure the sending of, any advertising or promotional material without our prior written consent.

8. TERMINATION

We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.

9. DISCLAIMERS

The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms whether express or implied, statutory or otherwise.

10. LIMITATION OF LIABILITY

In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.

11. GOVERNING LAW

These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.

12. CHANGES TO TERMS

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.

13. CONTACT INFORMATION

Questions about the Terms of Service should be sent to us at legal@ourcompany.com.

14. ADDITIONAL TERMS FOR SPECIFIC SERVICES

Certain features or services may be subject to additional terms and conditions, which will be posted in connection with such features or services. Your use of such features or services is subject to those additional terms.

15. DIGITAL MILLENNIUM COPYRIGHT ACT

We respect the intellectual property rights of others and expect our users to do the same. We will respond to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act.

16. ELECTRONIC COMMUNICATIONS

When you use the service or send emails to us, you are communicating with us electronically. You consent to receive communications from us electronically, and you agree that all agreements, notices, disclosures, and other communications satisfy any legal requirement that such communications be in writing.

17. MOBILE SERVICES

Our service may include certain features that are available via your mobile device. These features may include the ability to upload content, receive messages, and download applications to your mobile device. Standard messaging, data, and other fees may apply.

18. THIRD-PARTY LINKS

Our service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.

19. INDEMNIFICATION

You agree to defend, indemnify, and hold harmless our company and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses.

20. SEVERABILITY

If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

21. WAIVER

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of our company.

22. ENTIRE AGREEMENT

These Terms constitute the entire agreement between you and our company regarding our service, and supersede and replace any prior agreements we might have between us regarding the service.

23. ASSIGNMENT

These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by us without restriction. Any attempted transfer or assignment in violation hereof shall be null and void.

24. SURVIVAL

All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.

25. FORCE MAJEURE

We shall not be liable for any failure to perform our obligations under these Terms if such failure results from circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, or natural disasters.

This agreement is effective unless and until terminated by either you or us. You may terminate this agreement at any time by discontinuing use of the service and destroying all materials obtained from it. We may terminate this agreement at any time without notice if we believe you have violated any provision of this agreement.

By continuing to use our service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.`;


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
  const [mind_reading, set_mind_reading] = useState(false);
  const [mind_read_complete, set_mind_read_complete] = useState(false);
  const [mind_read_text, set_mind_read_text] = useState('');
  const [mind_read_progress, set_mind_read_progress] = useState(0);
  const [guessed_number, set_guessed_number] = useState(0);
  const [terms_visible, set_terms_visible] = useState(false);
  const [terms_scroll_position, set_terms_scroll_position] = useState(0);
  const [terms_accepted, set_terms_accepted] = useState(false);
  const [phone_number, set_phone_number] = useState(5000000000);
  const [verification_code, set_verification_code] = useState('');
  const [generated_code, set_generated_code] = useState('');
  const [code_sent, set_code_sent] = useState(false);

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

        {/* Mind Reader Birth Date - appears after month confirmation */}
        {month_confirmed && !mind_read_complete && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4 text-purple-600">🧠 Mind Reader</h3>
            <p className="text-sm mb-4">Think of a number between 1 and 31...</p>
            
            {!mind_reading ? (
              <>
                <input
                  className="p-3 border rounded-md w-full mb-4"
                  type="text"
                  placeholder="Input date of birth (optional)"
                  value={birth_date}
                  onChange={(e) => set_birth_date(e.target.value)}
                />
                <button
                  className={`px-6 py-3 text-white rounded ${birth_date.trim() ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-400 cursor-not-allowed'}`}
                  disabled={!birth_date.trim()}
                  onClick={() => {
                    if (!birth_date.trim()) return;
                    
                    set_mind_reading(true);
                    set_mind_read_progress(0);
                    const messages = [
                      "Analyzing brain waves...",
                      "Scanning memories...", 
                      "Detecting neural patterns...",
                      "Reading electromagnetic fields...",
                      "Interpreting thought frequencies...",
                      "Accessing subconscious data...",
                      "Calculating probability matrices...",
                      "Finalizing mind reading process..."
                    ];
                    
                    let currentMessage = 0;
                    const interval = setInterval(() => {
                      if (currentMessage < messages.length) {
                        set_mind_read_text(messages[currentMessage]);
                        set_mind_read_progress((currentMessage + 1) * 12.5);
                        currentMessage++;
                      } else {
                        clearInterval(interval);
                        const userInput = birth_date.trim();
                        set_guessed_number(parseInt(userInput) || 0);
                        set_mind_read_text(`You thought of number ${userInput}!`);
                        set_mind_read_progress(100);
                        setTimeout(() => {
                          set_mind_read_complete(true);
                          // Keep the user's input as the birth_date
                        }, 2000);
                      }
                    }, 800);
                  }}
                >
                  🔮 Read My Mind
                </button>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-4 text-lg font-semibold text-purple-700">{mind_read_text}</div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div 
                    className="bg-purple-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${mind_read_progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600">{mind_read_progress.toFixed(0)}%</div>
              </div>
            )}
          </div>
        )}

        {/* Phone Number Slider - appears after mind reading */}
        {mind_read_complete && !code_sent && (
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Phone Number</h3>
            <div className="mb-4">
              <label className="block text-xs text-gray-600 mb-2">
                Current number: {phone_number.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
              </label>
              <input
                type="range"
                min="1000000000"
                max="9999999999"
                step="1"
                value={phone_number}
                onChange={(e) => set_phone_number(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-grab"
                style={{ background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((phone_number - 1000000000) / (9999999999 - 1000000000)) * 100}%, #e5e7eb ${((phone_number - 1000000000) / (9999999999 - 1000000000)) * 100}%, #e5e7eb 100%)` }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>(100) 000-0000</span>
                <span>(999) 999-9999</span>
              </div>
            </div>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => {
                const code = Math.floor(100000 + Math.random() * 900000).toString();
                set_generated_code(code);
                set_code_sent(true);
              }}
            >
              Send Verification Code
            </button>
          </div>
        )}

        {/* Verification Code - appears after phone number */}
        {code_sent && !terms_accepted && (
          <div className="mt-6">
            <div className="mb-4 p-4 bg-green-100 border border-green-400 rounded">
              <p className="text-green-700">
                We sent the verification code <strong>{generated_code}</strong> to your number {phone_number.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}.
                Please check your messages and input the verification code below:
              </p>
            </div>
            <input
              className="p-3 border rounded-md w-40"
              type="text"
              placeholder="000000"
              value={verification_code}
              onChange={(e) => set_verification_code(e.target.value)}
              maxLength={6}
            />
            <button
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                if (verification_code === generated_code) {
                  set_terms_visible(true);
                } else {
                  set_error('Invalid verification code. Please try again.');
                }
              }}
              disabled={verification_code.length !== 6}
            >
              Verify
            </button>
          </div>
        )}

        {/* Terms of Service Modal */}
        {terms_visible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <div 
                className="flex-1 overflow-hidden relative bg-gray-50 border rounded p-4"
                style={{ 
                  minHeight: '400px',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#6b7280 #e5e7eb'
                }}
                onWheel={(e) => {
                  e.preventDefault();
                  const delta = Math.sign(e.deltaY) * 1; // Very slow scroll - only 1px per wheel event
                  const newPosition = Math.max(0, Math.min(terms_scroll_position + delta, 2000)); // Increased max scroll
                  set_terms_scroll_position(newPosition);
                }}
                onScroll={(e) => {
                  // Prevent normal scrolling and use our custom slow scroll
                  e.preventDefault();
                }}
              >
                {/* Custom scrollbar track */}
                <div className="absolute right-2 top-2 bottom-2 w-3 bg-gray-300 rounded">
                  <div 
                    className="bg-gray-600 rounded w-full transition-all duration-100"
                    style={{ 
                      height: `${Math.max(10, (400 / 2400) * 100)}%`,
                      transform: `translateY(${(terms_scroll_position / 2000) * (400 - (400 / 2400) * 400)}px)`
                    }}
                  />
                </div>
                
                <div 
                  className="pr-6 transition-transform duration-100"
                  style={{ 
                    transform: `translateY(-${terms_scroll_position}px)`,
                    height: '2400px' // Much taller content to force scrolling
                  }}
                >
                  <div className="text-black text-sm leading-relaxed space-y-6 whitespace-pre-wrap">
                    {TERMS_OF_SERVICE_TEXT}
                    
                    <div style={{ height: '800px' }}></div> {/* Extra space to force more scrolling */}
                    
                    <p className="text-center font-bold text-lg mt-8">
                      {terms_scroll_position >= 1800 ? '✓ You have read all terms' : `Please scroll to continue (${Math.min(100, Math.floor((terms_scroll_position / 1800) * 100))}%)`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  className={`px-6 py-2 rounded ${terms_scroll_position >= 1800 ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  disabled={terms_scroll_position < 1800}
                  onClick={() => {
                    set_terms_accepted(true);
                    set_terms_visible(false);
                  }}
                >
                  I Accept
                </button>
              </div>
            </div>
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
                  if (terms_accepted && birth_date && verification_code === generated_code) {
                    // Complete signup process
                    alert('Something went wrong! Please try again.');
                    router.push('/');
                  } else {
                    set_error('Please complete all steps including accepting terms of service.');
                  }
                }}
                disabled={!terms_accepted}
              >
                Complete Signup
              </button>
            )}
          </div>
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
