import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';

export function CookieNotice() {
  return (
    <>
      <Helmet>
        <title>Cookie Notice — OpEx6</title>
        <meta name="description" content="OpEx6 cookie notice. What cookies we use and how to manage your preferences." />
      </Helmet>

      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Cookie Notice</h1>
          <p className="text-text-secondary text-sm mb-8">Last updated: [TO BE INSERTED BY CLIENT BEFORE LAUNCH]</p>

          <div className="prose prose-invert max-w-none space-y-6 text-text-secondary text-sm">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">1. What are cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help sites function and may be used to remember preferences or gather usage information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">2. Cookies we use</h2>
              <p>
                <strong className="text-text-primary">Essential / Functional Cookies:</strong> These are necessary for the website to operate correctly. They include session handling and form functionality. These cannot be disabled.
              </p>
              <p>
                <strong className="text-text-primary">Analytics and Marketing Cookies:</strong> At the time of launch, this website does not use analytics, advertising, or marketing tracking cookies. If this changes in future, this notice will be updated, and appropriate consent will be obtained before any such cookies are set.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">3. Managing your preferences</h2>
              <p>
                Because this site currently uses only essential cookies, no consent is required for the cookies in use. If you wish to disable cookies entirely, you can do so through your browser settings, though this may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">4. Contact</h2>
              <p>
                If you have any questions about our use of cookies, contact us at <a href="mailto:sales@opex6.com" className="text-accent hover:underline">sales@opex6.com</a>.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
