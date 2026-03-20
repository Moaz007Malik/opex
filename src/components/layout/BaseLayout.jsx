import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { RegisterInterestCTA } from '../RegisterInterestCTA';

export function BaseLayout() {
  const location = useLocation();
  const path = location.pathname;

  const hideRegisterInterestCTA =
    path === '/support' ||
    path === '/faq' ||
    path === '/privacy' ||
    path === '/cookies' ||
    path === '/terms' ||
    path === '/contact' ||
    path === '/use-cases' ||
    path.startsWith('/use-cases/');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
        {!hideRegisterInterestCTA && <RegisterInterestCTA />}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
