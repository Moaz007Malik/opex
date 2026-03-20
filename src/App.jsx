import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/layout/BaseLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomepageSpec } from './pages/HomepageSpec';
import { ExecApp } from './pages/ExecApp';
import { HowItWorks } from './pages/HowItWorks';
import { KPIsDashboards } from './pages/KPIsDashboards';
import { Pricing } from './pages/Pricing';
import { Resources } from './pages/Resources';
import { UseCases } from './pages/UseCases';
import { UseCasePackagingMargin } from './pages/UseCasePackagingMargin';
import { UseCasePrecisionDowntime } from './pages/UseCasePrecisionDowntime';
import { UseCaseChemicalsQuality } from './pages/UseCaseChemicalsQuality';
import { RegisterInterest } from './pages/RegisterInterest';
import { Support } from './pages/Support';
import { FAQ } from './pages/FAQ';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { KpiDetail } from './pages/KpiDetail';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomepageSpec />} />
          <Route path="exec-app" element={<ExecApp />} />
          <Route path="kpis" element={<KPIsDashboards />} />
          <Route path="kpis-dashboards" element={<KPIsDashboards />} />
          <Route path="kpis/:categoryId/:kpiSlug" element={<KpiDetail />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resources" element={<Resources />} />
          <Route path="use-cases" element={<UseCases />} />
          <Route path="use-cases/packaging-group-margin-visibility" element={<UseCasePackagingMargin />} />
          <Route path="use-cases/precision-engineering-downtime-reduction" element={<UseCasePrecisionDowntime />} />
          <Route path="use-cases/chemicals-quality-and-compliance" element={<UseCaseChemicalsQuality />} />
          <Route path="register-interest" element={<RegisterInterest />} />
          <Route path="support" element={<Support />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
