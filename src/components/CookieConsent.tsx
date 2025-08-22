'use client';
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (stored === 'true') setAccepted(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg">
      <p className="text-sm">We use cookies to improve the AI.</p>
      <button onClick={accept} className="btn-primary">Accept</button>
    </div>
  );
}
