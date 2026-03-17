import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function UseCaseChemicalsQuality() {
  return (
    <>
      <Helmet>
        <title>Chemicals — Quality & Deviation Use Case | OpEx6</title>
        <meta
          name="description"
          content="An anonymised illustrative use case showing how a specialty chemicals manufacturer could use OpEx6 to improve quality, deviation visibility, and operational control in batch manufacturing."
        />
      </Helmet>

      {/* HERO */}
      <section className="py-28 border-b border-black/10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            Anonymised illustrative customer use case
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Improving quality, deviation visibility, and operational control in batch manufacturing
          </h1>

          <p className="text-lg text-black/70 mb-3">
            A specialty chemicals manufacturer needed better visibility into batch deviations, quality loss, downtime, and operating
            discipline. OpEx6 was configured to support more structured plant reviews and faster escalation of issues with commercial and
            compliance impact.
          </p>

          <p className="text-sm text-black/70 mb-3">
            Executive sponsor: Plant Director, specialty chemicals manufacturer.
          </p>

          <p className="text-xs text-black/60">
            These are anonymised illustrative customer use cases based on common manufacturing scenarios. They are provided for general
            information and do not represent a named customer endorsement or guarantee of results.
          </p>

        </div>
      </section>



      <Section>

        <div className="max-w-4xl mx-auto">


          {/* QUOTE */}
          <div className="border border-black/10 bg-white rounded-xl p-6 mb-10">
            <p className="text-black/70 italic text-sm">
              &ldquo;The biggest change was not one KPI. It was having one place to see quality, performance, and operational exceptions
              together instead of across disconnected spreadsheets and departmental reports.&rdquo;
            </p>

            <p className="text-xs text-black/60 mt-3">
              — Plant Director, specialty chemicals manufacturer (anonymised illustrative scenario)
            </p>
          </div>



          {/* KPI CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Deviation response time
              </p>
              <p className="text-xl font-semibold text-black">-62%</p>
              <p className="text-[10px] text-black/60 mt-1">
                Average reduction, illustrative scenario.
              </p>
            </Card>

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Quality-related rework
              </p>
              <p className="text-xl font-semibold text-black">-17%</p>
              <p className="text-[10px] text-black/60 mt-1">
                Illustrative scenario, not a guarantee.
              </p>
            </Card>

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Batch release delay incidents
              </p>
              <p className="text-xl font-semibold text-black">-28%</p>
              <p className="text-[10px] text-black/60 mt-1">
                Illustrative scenario, not a guarantee.
              </p>
            </Card>

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Management reporting prep time
              </p>
              <p className="text-xl font-semibold text-black">-70%</p>
              <p className="text-[10px] text-black/60 mt-1">
                Illustrative reduction in time spent preparing reports.
              </p>
            </Card>

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Estimated annualised value
              </p>
              <p className="text-xl font-semibold text-black">£690,000</p>
              <p className="text-[10px] text-black/60 mt-1">
                Illustrative value model only.
              </p>
            </Card>

          </div>



          {/* CONTENT SECTIONS */}

          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Challenge
          </h2>

          <p className="text-black/70 text-sm mb-6">
            The plant had multiple reporting streams — batch performance reports, quality/deviation logs, maintenance summaries, and manual
            management updates. That made it difficult to identify repeat patterns quickly, connect quality loss to operating conditions,
            and maintain a consistent management view.
          </p>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Leadership questions behind the project
          </h2>

          <ul className="list-disc list-inside text-black/70 text-sm space-y-1 mb-6">
            <li>Which deviations are taking too long to surface or escalate?</li>
            <li>Where is rework driving commercial loss alongside operational disruption?</li>
            <li>Which issues matter most to leadership, not just departmental reporting?</li>
            <li>How quickly can plant teams move from exception logging to structured review?</li>
          </ul>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            What was implemented
          </h2>

          <p className="text-black/70 text-sm mb-3">
            In this illustrative scenario, the Exec App is configured to:
          </p>

          <ul className="list-disc list-inside text-black/70 text-sm space-y-1 mb-6">
            <li>Provide batch and shift-level exception dashboards.</li>
            <li>Surface deviation and rework trends over time.</li>
            <li>Offer structured management reporting views.</li>
            <li>Enable cross-functional operational review dashboards.</li>
            <li>Provide exportable views for leadership and governance discussions.</li>
          </ul>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Time to rollout
          </h2>

          <p className="text-black/70 text-sm mb-6">
            Illustratively 7 weeks from scoping to first structured quality and deviation review, depending on connectivity to existing
            systems and the level of data standardisation already in place.
          </p>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Results
          </h2>

          <p className="text-black/70 text-sm mb-6">
            In this anonymised example, average deviation response time reduced by 62%, quality-related rework reduced by 17%, batch release
            delay incidents reduced by 28%, and reporting preparation time reduced by 70%. Exception visibility improved and escalation
            became more consistent across teams.
          </p>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            ROI story
          </h2>

          <p className="text-black/70 text-sm mb-6">
            Illustratively, the annualised value model for this scenario is built from: rework and quality-loss reduction (approximately
            £310,000), avoided release-delay and disruption cost (approximately £250,000), and reporting / admin time saved (approximately
            £130,000). Together these give an estimated annualised total value of around £690,000. This is a scenario only and not a
            guarantee of results; actual outcomes would depend on each customer&apos;s baseline and follow-through.
          </p>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Why it mattered
          </h2>

          <p className="text-black/70 text-sm mb-10">
            The plant gained faster escalation of quality-related issues, a more disciplined review structure, better alignment between
            plant operations and leadership oversight, and better visibility across quality, performance, and compliance-relevant signals.
          </p>


          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            KPI areas that mattered most in this scenario
          </h2>
          <p className="text-black/70 text-sm mb-3">
            This quality and deviation scenario relied most on the Quality, Safety &amp; Risk, Compliance &amp; Audit, and Margin Intelligence
            KPI areas within the Exec App framework.
          </p>
          <ul className="list-disc list-inside text-black/70 text-sm space-y-1 mb-10">
            <li><strong>Quality</strong> — deviation trends, rework, scrap, and right-first-time performance.</li>
            <li><strong>Safety &amp; Risk</strong> — incident, near-miss, and risk control visibility tied to operations.</li>
            <li><strong>Compliance &amp; Audit</strong> — non-conformances, corrective actions, and audit follow-up.</li>
            <li><strong>Margin Intelligence</strong> — cost of poor quality and commercial impact where data allows.</li>
          </ul>



          {/* CTA */}
          <div className="text-center">

            <Button to="/register-interest">
              Register Interest in the Exec App
            </Button>

          </div>

        </div>

      </Section>
    </>
  );
}