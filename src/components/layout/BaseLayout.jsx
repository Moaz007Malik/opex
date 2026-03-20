import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { RegisterInterestCTA } from '../RegisterInterestCTA';

export function BaseLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
        <RegisterInterestCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
