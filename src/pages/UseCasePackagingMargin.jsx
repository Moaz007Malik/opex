import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function UseCasePackagingMargin() {
  return (
    <>
      <Helmet>
        <title>Packaging — Margin Visibility Use Case | OpEx6</title>
        <meta
          name="description"
          content="An anonymised illustrative use case showing how a multi-site packaging group could use OpEx6 to improve margin visibility across three plants."
        />
      </Helmet>

      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">
            Anonymised illustrative customer use case
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
            From disconnected plant reports to one margin-led operating view across 3 sites
          </h1>
          <p className="text-lg text-text-secondary mb-2">
            A multi-site packaging manufacturer needed to stop running weekly performance reviews on spreadsheets, disconnected shift
            reports, and inconsistent site definitions. OpEx6 was configured to bring throughput, downtime, scrap, labour efficiency, and
            margin drivers into one structured executive view.
          </p>
          <p className="text-sm text-text-secondary mb-4">
            Executive sponsor: Operations Director, European packaging manufacturer.
          </p>
          <p className="text-xs text-text-secondary mb-6">
            These are anonymised illustrative customer use cases based on common manufacturing scenarios. They are provided for general
            information and do not represent a named customer endorsement or guarantee of results.
          </p>

          <div className="border-l-4 border-accent bg-card-bg/60 p-4 rounded-md mb-8">
            <p className="text-text-secondary text-sm italic">
              &ldquo;We did not have a data shortage. We had a visibility shortage. OpEx6 gave us one operating language across three plants
              and made our weekly reviews materially more useful.&rdquo;
            </p>
            <p className="text-[11px] text-text-secondary mt-2">
              — Operations Director, European packaging manufacturer (anonymised illustrative scenario)
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Sites in one framework
              </p>
              <p className="text-xl font-semibold text-text-primary">3</p>
            </Card>
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Reporting preparation time
              </p>
              <p className="text-xl font-semibold text-text-primary">-78%</p>
              <p className="text-[10px] text-text-secondary mt-1">From ~18 hours/week to ~4 hours/week.</p>
            </Card>
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Scrap cost change (6 months)
              </p>
              <p className="text-xl font-semibold text-text-primary">-11%</p>
              <p className="text-[10px] text-text-secondary mt-1">Illustrative scenario, not a guarantee.</p>
            </Card>
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Unplanned downtime change
              </p>
              <p className="text-xl font-semibold text-text-primary">-9%</p>
              <p className="text-[10px] text-text-secondary mt-1">Illustrative scenario, not a guarantee.</p>
            </Card>
            <Card>
              <p className="text-[11px] text-text-secondary mb-1 uppercase tracking-wider">
                Estimated annualised value
              </p>
              <p className="text-xl font-semibold text-text-primary">£1.18M</p>
              <p className="text-[10px] text-text-secondary mt-1">Illustrative value model only.</p>
            </Card>
          </div>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Challenge
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            Before rollout, each plant reported performance differently. Weekly leadership reviews were built manually from site
            spreadsheets, shift logs, maintenance summaries, and finance extracts. Site comparisons were inconsistent, downtime and scrap
            were discussed too late, and margin conversations were disconnected from operational drivers.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Leadership questions behind the project
          </h2>
          <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 mb-4">
            <li>Which lines, shifts, or sites are driving the most avoidable margin loss?</li>
            <li>How much scrap and downtime is actually hitting contribution?</li>
            <li>Which site-to-site comparisons are currently unreliable?</li>
            <li>How quickly can leadership move from weekly reporting to action?</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            What was implemented
          </h2>
          <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 mb-4">
            <li>Shared KPI definitions across plants.</li>
            <li>Site-level dashboards and group-level rollups.</li>
            <li>Downtime and scrap category mapping.</li>
            <li>Weekly executive pack views.</li>
            <li>Role-based visibility.</li>
            <li>Exportable structured reporting views.</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Time to rollout
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            Illustratively 8 weeks from scoping to first executive review with all three sites in a single framework, assuming data sources
            and costing assumptions are available. Actual timelines would depend on integration scope and data maturity.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Results
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            In this anonymised scenario, reporting preparation time fell from roughly 18 hours per week to 4 hours. Scrap cost reduced by
            11%, unplanned downtime reduced by 9%, schedule attainment improved from 86% to 92%, and labour-efficiency visibility improved
            enough to surface hidden underperformance patterns. Plants have a shared framework for discussing margin, not just volume and
            OEE.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            ROI story
          </h2>
          <p className="text-text-secondary text-sm mb-4">
            Illustratively, the annualised value model for this scenario is built from three components: scrap reduction benefit
            (approximately £540,000), downtime and output recovery benefit (approximately £470,000), and reporting / admin time saved
            (approximately £170,000). Together these give an estimated annualised total value of around £1.18M. This is a scenario only and
            not a guarantee of results; actual ROI would depend on each customer&apos;s baseline and execution.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Why it mattered
          </h2>
          <p className="text-text-secondary text-sm mb-6">
            The business gained one operating language across sites, faster escalation of issues, better linkage between operational
            variation and margin erosion, and a more structured basis for executive decision-making. The critical shift was from debating
            numbers to debating actions.
          </p>

          <Button to="/register-interest">
            Register Interest in the Exec App
          </Button>
        </div>
      </Section>
    </>
  );
}


