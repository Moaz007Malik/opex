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

      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">
            Anonymised illustrative customer use case
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
            Improving quality, deviation visibility, and operational control in batch manufacturing
          </h1>
          <p className="text-lg text-text-secondary mb-2">
            A specialty chemicals manufacturer needed better visibility into batch deviations, quality loss, downtime, and operating
            discipline. OpEx6 was configured to support more structured plant reviews and faster escalation of issues with commercial and
            compliance impact.
          </p>
          <p className="text-sm text-text-secondary mb-4">
            Executive sponsor: Plant Director, specialty chemicals manufacturer.
          </p>
          <p className="text-xs text-text-secondary mb-6">
            These are anonymised illustrative customer use cases based on common manufacturing scenarios. They are provided for general
            information and do not represent a named customer endorsement or guarantee of results.
          </p>

          <div className="border-l-4 border-accent bg-card-bg/60 p-4 rounded-md mb-8">
            <p className="text-text-secondary text-sm italic">
              &ldquo;The biggest change was not one KPI. It was having one place to see quality, performance, and operational exceptions
              together instead of across disconnected spreadsheets and departmental reports.&rdquo;
            </p>
            <p className="text-[11px] text-text-secondary mt-2">
              — Plant Director, specialty chemicals manufacturer (anonymised illustrative scenario)
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Deviation response time
              </p>
              <p className="text-xl font-semibold text-text-primary">-62%</p>
              <p className="text-[10px] text-text-secondary mt-1">Average reduction, illustrative scenario.</p>
            </Card>
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Quality-related rework
              </p>
              <p className="text-xl font-semibold text-text-primary">-17%</p>
              <p className="text-[10px] text-text-secondary mt-1">Illustrative scenario, not a guarantee.</p>
            </Card>
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Batch release delay incidents
              </p>
              <p className="text-xl font-semibold text-text-primary">-28%</p>
              <p className="text-[10px] text-text-secondary mt-1">Illustrative scenario, not a guarantee.</p>
            </Card>
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Management reporting prep time
              </p>
              <p className="text-xl font-semibold text-text-primary">-70%</p>
              <p className="text-[10px] text-text-secondary mt-1">Illustrative reduction in time spent preparing reports.</p>
            </Card>
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Estimated annualised value
              </p>
              <p className="text-xl font-semibold text-text-primary">£690,000</p>
              <p className="text-[10px] text-text-secondary mt-1">Illustrative value model only.</p>
            </Card>
          </div>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Challenge
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            The plant had multiple reporting streams — batch performance reports, quality/deviation logs, maintenance summaries, and manual
            management updates. That made it difficult to identify repeat patterns quickly, connect quality loss to operating conditions,
            and maintain a consistent management view.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Leadership questions behind the project
          </h2>
          <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 mb-4">
            <li>Which deviations are taking too long to surface or escalate?</li>
            <li>Where is rework driving commercial loss alongside operational disruption?</li>
            <li>Which issues matter most to leadership, not just departmental reporting?</li>
            <li>How quickly can plant teams move from exception logging to structured review?</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            What was implemented
          </h2>
          <p className="text-text-secondary text-sm mb-2">
            In this illustrative scenario, the Exec App is configured to:
          </p>
          <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 mb-4">
            <li>Provide batch and shift-level exception dashboards.</li>
            <li>Surface deviation and rework trends over time.</li>
            <li>Offer structured management reporting views.</li>
            <li>Enable cross-functional operational review dashboards.</li>
            <li>Provide exportable views for leadership and governance discussions.</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Time to rollout
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            Illustratively 7 weeks from scoping to first structured quality and deviation review, depending on connectivity to existing
            systems and the level of data standardisation already in place.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Results
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            In this anonymised example, average deviation response time reduced by 62%, quality-related rework reduced by 17%, batch release
            delay incidents reduced by 28%, and reporting preparation time reduced by 70%. Exception visibility improved and escalation
            became more consistent across teams.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            ROI story
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            Illustratively, the annualised value model for this scenario is built from: rework and quality-loss reduction (approximately
            £310,000), avoided release-delay and disruption cost (approximately £250,000), and reporting / admin time saved (approximately
            £130,000). Together these give an estimated annualised total value of around £690,000. This is a scenario only and not a
            guarantee of results; actual outcomes would depend on each customer&apos;s baseline and follow-through.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Why it mattered
          </h2>
          <p className="text-text-secondary text-sm mb-6">
            The plant gained faster escalation of quality-related issues, a more disciplined review structure, better alignment between
            plant operations and leadership oversight, and better visibility across quality, performance, and compliance-relevant signals.
          </p>

          <Button to="/register-interest">
            Register Interest in the Exec App
          </Button>
        </div>
      </Section>
    </>
  );
}


