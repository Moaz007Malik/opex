import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';

export function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Notice — OpEx6</title>
        <meta name="description" content="How OpEx6 collects, uses, and protects personal data, and the rights available to individuals." />
      </Helmet>

      {/* HERO */}
      <motion.section
        className="py-28 border-b border-border bg-background"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            LEGAL
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Privacy Notice
          </h1>

          <p className="text-text-secondary text-lg">
            How OpEx6 collects, uses, and protects personal data, and the rights available to individuals.
          </p>

          <p className="text-base text-text-secondary mt-4">
            Last updated: [TO BE INSERTED BY CLIENT BEFORE LAUNCH]
          </p>

        </div>
      </motion.section>


      {/* CONTENT */}
      <Section className="bg-background">

        <div className="max-w-4xl mx-auto px-6">

          <div className="space-y-8 text-base leading-relaxed">

            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">1. Who we are</h2>

              <p className="text-text-secondary">
                OpEx6 Technologies Ltd (&quot;OpEx6&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates this website and is
                developing the Exec App operational intelligence platform. For personal data collected through this website, OpEx6
                Technologies Ltd is the data controller.
              </p>

              <p className="text-text-secondary mt-3">
                Contact: <a href="mailto:[email]" className="text-accent hover:underline underline-offset-4">[email]</a>
              </p>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">2. What data we collect</h2>

              <p className="text-text-secondary">
                Depending on how you interact with this site, we may collect:
              </p>

              <ul className="list-disc list-inside mt-3 space-y-2 text-text-secondary">
                <li>Contact details you provide, such as name, work email address, company, and any message you choose to send.</li>
                <li>Marketing preferences, such as whether you have opted in to receive product updates and marketing emails.</li>
                <li>KPI category selections, business problem selections, and dashboard preferences submitted through the KPI discovery journey.</li>
                <li>
                  Technical data such as IP address, browser type, and device information, and cookie preferences — subject to your cookie
                  settings. For more detail, see our{' '}
                  <Link to="/cookies" className="text-accent hover:underline underline-offset-4">Cookie Notice</Link>.
                </li>
              </ul>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">3. How we use your data</h2>

              <p className="text-text-secondary">We may use your personal data to:</p>

              <ul className="list-disc list-inside mt-3 space-y-2 text-text-secondary">
                <li>Respond to enquiries and manage early-access registrations for the Exec App.</li>
                <li>
                  Send you a personalised confirmation email containing your KPI selections and recommended dashboards where you have
                  completed the KPI discovery journey.
                </li>
                <li>Send you product updates and marketing emails where you have explicitly opted in to receive them.</li>
                <li>Maintain records of interest registrations, support enquiries, and consent preferences.</li>
                <li>Operate, secure, and improve this website, including understanding how it is used.</li>
                <li>Comply with legal and regulatory obligations that apply to us.</li>
              </ul>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">4. Lawful basis</h2>

              <p className="text-text-secondary">
                The appropriate lawful basis for each processing activity (for example, legitimate interests or contract for enquiry
                handling) should be determined and finalised in the legal copy for launch. Marketing communications must rely on valid
                consent — for example, an unticked opt-in box that you choose to select.
              </p>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">5. Who we share data with</h2>

              <p className="text-text-secondary">
                We do not sell your personal data. We may share it with trusted service providers who help us operate this website, manage
                forms and communications, or provide analytics and security services. Where we use service providers, we will ensure
                appropriate data protection terms are in place.
              </p>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">6. International transfers</h2>

              <p className="text-text-secondary">
                Some of our service providers may be located outside the UK or European Economic Area. Where personal data is transferred
                internationally, appropriate safeguards (such as standard contractual clauses) should be used, and these will be confirmed
                in the final legal copy.
              </p>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">7. Data retention</h2>

              <p className="text-text-secondary">
                We will not keep personal data longer than necessary for the purposes described above. Interest registration and enquiry
                data will typically be reviewed after 24 months, and may be archived or deleted unless we need to keep it for legal or
                regulatory reasons.
              </p>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">8. Your rights</h2>

              <p className="text-text-secondary">
                Depending on where you are based, you may have rights under UK GDPR or other data protection laws to:
              </p>

              <ul className="list-disc list-inside mt-3 space-y-2 text-text-secondary">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>Object to or request restriction of certain types of processing.</li>
                <li>Withdraw consent at any time where processing is based on consent.</li>
              </ul>

              <p className="text-text-secondary mt-3">
                To exercise any of these rights, contact us at <a href="mailto:[email]" className="text-accent hover:underline underline-offset-4">[email]</a>.
              </p>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">9. ICO complaint route</h2>

              <p className="text-text-secondary">
                If you have concerns about how we handle your personal data, we would encourage you to contact us first so we can try to
                resolve the issue. You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO)
                at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">ico.org.uk</a>.
              </p>
            </div>


            <div className="border border-border rounded-xl p-6 bg-card-bg">
              <h2 className="text-xl font-semibold text-text-primary mb-3">10. Cookies</h2>

              <p className="text-text-secondary">
                For information about how we use cookies and similar technologies, please see our{' '}
                <Link to="/cookies" className="text-accent hover:underline underline-offset-4">Cookie Notice</Link>.
              </p>
            </div>

          </div>

        </div>

      </Section>
    </>
  );
}