import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BANNER_KEY = 'opex6_cookie_banner_dismissed';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(BANNER_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          This site uses essential cookies to support core functionality. No analytics or marketing cookies are used.{' '}
          <Link to="/cookie-notice" className="text-accent hover:underline">Read our Cookie Notice</Link> for details.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 font-semibold text-base px-6 py-2 rounded-lg bg-accent text-white hover:bg-indigo-500 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
}
