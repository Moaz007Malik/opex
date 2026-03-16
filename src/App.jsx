import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/layout/BaseLayout';
import { Homepage } from './pages/Homepage';
import { ExecApp } from './pages/ExecApp';
import { HowItWorks } from './pages/HowItWorks';
import { KPIsDashboards } from './pages/KPIsDashboards';
import { Pricing } from './pages/Pricing';
import { Resources } from './pages/Resources';
import { UseCases } from './pages/UseCases';
import { RegisterInterest } from './pages/RegisterInterest';
import { Support } from './pages/Support';
import { FAQ } from './pages/FAQ';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyNotice } from './pages/PrivacyNotice';
import { CookieNotice } from './pages/CookieNotice';
import { TermsOfUse } from './pages/TermsOfUse';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Homepage />} />
        <Route path="exec-app" element={<ExecApp />} />
        <Route path="kpis-dashboards" element={<KPIsDashboards />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="resources" element={<Resources />} />
        <Route path="use-cases" element={<UseCases />} />
        <Route path="register-interest" element={<RegisterInterest />} />
        <Route path="support" element={<Support />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-notice" element={<PrivacyNotice />} />
        <Route path="cookie-notice" element={<CookieNotice />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
      </Route>
    </Routes>
  );
}

export default App;
