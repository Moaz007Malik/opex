import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';

export function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use — OpEx6</title>
        <meta name="description" content="Terms governing the use of the OpEx6 website and pre-launch Exec App marketing site." />
      </Helmet>

      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Terms of Use</h1>
          <p className="text-text-secondary text-sm mb-8">Last updated: [TO BE INSERTED BY CLIENT BEFORE LAUNCH]</p>

          <div className="prose prose-invert max-w-none space-y-6 text-text-secondary text-sm">
            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">1. Who we are</h2>
              <p>
                This website is operated by OpEx6 Technologies Ltd (&quot;OpEx6&quot;, &quot;we&quot;, &quot;us&quot;). We use this site
                to provide information about the Exec App and to collect early-access registrations from interested organisations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">2. Purpose of this site</h2>
              <p>
                This site is a pre-launch informational and registration site. It is intended to explain the problems OpEx6 is being built
                to address, outline planned product capabilities, and allow visitors to register interest in the Exec App. It is not a live
                product environment.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">3. No binding offer</h2>
              <p>
                Site content is for general information only. Product availability, roadmap items, integrations, and pricing may change.
                Nothing on this site forms a binding offer unless confirmed in a signed order form or commercial agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">4. Acceptable use</h2>
              <p>
                You may use this site only for lawful purposes and in a way that does not damage, disable, or impair the site. You must not
                attempt to gain unauthorised access to any part of the site, introduce malicious code, or use the site to transmit
                unsolicited communications.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">5. Intellectual property</h2>
              <p>
                Unless stated otherwise, all content on this site — including text, graphics, logos, and design — is owned by OpEx6
                Technologies Ltd and/or its licensors and is protected by applicable intellectual property laws. You may not reproduce,
                distribute, or adapt content without our prior written permission, other than for your own internal business evaluation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">6. Third-party trade marks</h2>
              <p>
                Any third-party names, trade marks, and logos referenced on this site are the property of their respective owners. They are
                used for identification purposes only and do not imply endorsement, partnership, or affiliation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">7. External links</h2>
              <p>
                This site may contain links to third-party websites. These links are provided for convenience only. We do not control and
                are not responsible for the content, privacy practices, or security of external sites, and linking to them does not imply
                endorsement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">8. No warranty</h2>
              <p>
                While we aim to keep information on this site accurate and up to date, it is provided &quot;as is&quot; without any
                warranty, representation, or guarantee (whether express or implied) as to its accuracy, completeness, or suitability for
                any particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">9. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, OpEx6 Technologies Ltd shall not be liable for any indirect, incidental, special, or
                consequential loss, or for any loss of profit, revenue, or data arising out of or in connection with your use of this site
                or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">10. Pricing and features</h2>
              <p>
                Any pricing, credit structures, feature descriptions, or roadmap items described on this site are indicative and may change.
                Final commercial terms, product features, and availability will be set out in the applicable order form or commercial
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">11. Governing law</h2>
              <p>
                The governing law and jurisdiction for these Terms of Use should be confirmed in the final legal copy. A common approach
                would be to specify the laws of England and Wales and the courts of England and Wales, but this should be agreed with legal
                advisers before launch.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mt-8 mb-2">12. Changes</h2>
              <p>
                We may update these Terms of Use from time to time. The date at the top of this page shows when they were last updated. Your
                continued use of the site after changes are posted will constitute acceptance of the updated terms.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

