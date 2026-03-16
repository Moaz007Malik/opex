import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';

export function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — OpEx6</title>
        <meta name="description" content="Information about how OpEx6 uses cookies and similar technologies on this website." />
      </Helmet>

      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Cookie Policy</h1>
          <p className="text-text-secondary text-sm mb-8">Last updated: [TO BE INSERTED BY CLIENT BEFORE LAUNCH]</p>

          <div className="prose prose-invert max-w-none space-y-6 text-text-secondary text-sm">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">1. Overview</h2>
              <p>
                This site currently uses only strictly necessary cookies and similar technologies that are required for basic site
                functionality (for example, remembering that you have dismissed the cookie banner). We do not use analytics, advertising, or
                other non-essential tracking cookies at launch.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">2. Cookie categories and purpose</h2>
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-border py-2 pr-4">Category</th>
                    <th className="border-b border-border py-2 pr-4">Purpose</th>
                    <th className="border-b border-border py-2 pr-4">Provider</th>
                    <th className="border-b border-border py-2 pr-4">Example name / duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-border py-2 pr-4 align-top">Strictly necessary</td>
                    <td className="border-b border-border py-2 pr-4 align-top">
                      Used to remember choices you make that are essential to how the site functions, such as whether you have dismissed
                      the cookie banner.
                    </td>
                    <td className="border-b border-border py-2 pr-4 align-top">OpEx6 (first-party)</td>
                    <td className="border-b border-border py-2 pr-4 align-top">
                      <code>opex6_cookie_banner_dismissed</code> — stored in local storage to remember that you have seen the banner
                      (persistently until you clear your browser storage).
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">3. Non-essential cookies</h2>
              <p>
                At launch, we do not set analytics, advertising, or other non-essential cookies. If we introduce non-essential cookies in
                future, we will update this policy and present a cookie banner that allows you to choose to accept all, reject all, or
                manage your preferences before any non-essential cookies are set.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">4. How to withdraw or change your preferences</h2>
              <p>
                Because only strictly necessary cookies are currently used, there is no separate preference panel at launch. If we add
                analytics or other non-essential cookies in future, we will provide a way to reopen the cookie banner or preferences from
                this page or from the footer so you can change your choices at any time.
              </p>
              <p>
                You can also control cookies and local storage more generally through your browser settings, for example by clearing stored
                data or blocking certain types of cookies. For more detail, see your browser&apos;s help documentation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">5. More information</h2>
              <p>
                For more information about how we handle personal data more broadly, please see our{' '}
                <Link to="/privacy" className="text-accent hover:underline">Privacy Notice</Link>.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

