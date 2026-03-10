import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';

export function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Terms of Use — OpEx6</title>
        <meta name="description" content="Terms of use for the opex6.com website and Exec App pre-launch site." />
      </Helmet>

      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Terms of Use</h1>
          <p className="text-text-secondary text-sm mb-8">Last updated: [TO BE INSERTED BY CLIENT BEFORE LAUNCH]</p>

          <div className="prose prose-invert max-w-none space-y-6 text-text-secondary text-sm">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">1. Acceptance</h2>
              <p>
                By accessing and using the opex6.com website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">2. Nature of this website</h2>
              <p>
                This website is a pre-launch informational and interest registration site for the Exec App by OpEx6. The information on this website describes planned product capabilities and the pre-launch commercial structure. No live product access is provided through this website. The launch offer described on this site is subject to final terms to be confirmed at launch.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">3. Permitted use</h2>
              <p>
                This website is provided for informational purposes and to allow you to register interest in the Exec App. You may not use this website for any unlawful purpose or in a way that could damage or impair it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">4. Intellectual property</h2>
              <p>
                All content on this website, including text, graphics, logos, and design, is the property of OpEx6 Ltd and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use content without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">5. Accuracy of information</h2>
              <p>
                This website is provided in good faith. Information about planned product features, capabilities, and commercial terms is subject to change ahead of launch. Use case scenarios described on this website are illustrative examples of the type of operational challenges the Exec App is designed to help address. They are not representations of specific customers or confirmed deployment outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">6. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, OpEx6 Ltd shall not be liable for any indirect, incidental, or consequential loss arising from your use of this website or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">7. Governing law</h2>
              <p>
                These Terms of Use are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">8. Changes</h2>
              <p>
                We may update these Terms of Use at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">9. Contact</h2>
              <p>
                For any queries relating to these terms, contact us at <a href="mailto:sales@opex6.com" className="text-accent hover:underline">sales@opex6.com</a>.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
