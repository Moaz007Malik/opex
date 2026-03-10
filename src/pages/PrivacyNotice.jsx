import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';

export function PrivacyNotice() {
  return (
    <>
      <Helmet>
        <title>Privacy Notice — OpEx6</title>
        <meta name="description" content="OpEx6 privacy notice. How we collect, use, and protect your personal data." />
      </Helmet>

      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Privacy Notice</h1>
          <p className="text-text-secondary text-sm mb-8">Last updated: [TO BE INSERTED BY CLIENT BEFORE LAUNCH]</p>

          <div className="prose prose-invert max-w-none space-y-6 text-text-secondary text-sm">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">1. Who we are</h2>
              <p>
                OpEx6 Ltd ('OpEx6', 'we', 'us', 'our') operates the website at opex6.com and is developing the Exec App operational intelligence platform. We are the data controller for personal data collected through this website.
              </p>
              <p>
                Contact: <a href="mailto:sales@opex6.com" className="text-accent hover:underline">sales@opex6.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">2. What personal data we collect</h2>
              <p>
                When you register your interest through this website, we collect: full name, work email address, job title, and company name. We may also collect limited technical data such as the date and time of your submission. Subject to your cookie preferences, we may collect technical data via cookies — see our <Link to="/cookie-notice" className="text-accent hover:underline">Cookie Notice</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">3. How we use your personal data</h2>
              <p>
                We use your personal data to: respond to your interest registration; contact you with information about the Exec App launch and early access offer where you have consented to this contact; send product updates and launch communications, only if you have separately opted in; and to maintain records of interest registrations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">4. Legal basis for processing</h2>
              <p>
                We process your personal data on the following bases: consent — where you have expressly provided it, including for the required contact permission and any optional marketing opt-in; and legitimate interests — in developing, promoting, and communicating about the Exec App to relevant audiences.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">5. Retention</h2>
              <p>
                We will retain your personal data for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Interest registration data will be reviewed at 24 months from the date of submission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">6. Sharing your data</h2>
              <p>
                We do not sell your personal data. We may share it with trusted service providers involved in operating this website or managing communications, subject to appropriate data processing terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">7. Your rights</h2>
              <p>
                Under UK GDPR, you have rights to: access, correct, or delete your data; object to or restrict processing; withdraw consent at any time; and lodge a complaint with the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ico.org.uk</a>. To exercise any of these rights, contact us at <a href="mailto:sales@opex6.com" className="text-accent hover:underline">sales@opex6.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">8. Cookies</h2>
              <p>
                Please refer to our <Link to="/cookie-notice" className="text-accent hover:underline">Cookie Notice</Link> for details of how we use cookies on this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">9. Changes</h2>
              <p>
                We may update this Privacy Notice from time to time. The date at the top of this page reflects the most recent update.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
