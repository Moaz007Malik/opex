import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function UseCasePrecisionDowntime() {
  return (
    <>
      <Helmet>
        <title>Precision Engineering — Downtime Reduction Use Case | OpEx6</title>
        <meta
          name="description"
          content="An anonymised illustrative use case showing how a precision engineering manufacturer could use OpEx6 to reduce recurring downtime and improve schedule attainment in a high-mix environment."
        />
      </Helmet>


      {/* HERO */}
      <section className="py-28 border-b border-black/10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            Anonymised illustrative customer use case
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Reducing downtime visibility gaps in a high-mix precision engineering environment
          </h1>

          <p className="text-lg text-black/70 mb-3">
            A precision engineering manufacturer needed better visibility into machine downtime, changeovers, schedule adherence, and output
            reliability across a complex production environment. OpEx6 was configured to help the leadership team move from reactive
            reporting to structured operational review.
          </p>

          <p className="text-sm text-black/70 mb-3">
            Executive sponsor: Chief Operating Officer, UK precision engineering manufacturer.
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
              &ldquo;We knew where we were hurting, but we did not have one disciplined way to see it across shifts and machines. OpEx6 helped
              us move from anecdotal firefighting to structured action.&rdquo;
            </p>

            <p className="text-xs text-black/60 mt-3">
              — COO, UK precision engineering manufacturer (anonymised illustrative scenario)
            </p>

          </div>



          {/* KPI CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Recurring downtime change
              </p>
              <p className="text-xl font-semibold text-black">-14%</p>
              <p className="text-[10px] text-black/60 mt-1">
                Illustrative scenario, not a guarantee.
              </p>
            </Card>

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Schedule attainment
              </p>
              <p className="text-xl font-semibold text-black">81% → 90%</p>
            </Card>

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Changeover overrun change
              </p>
              <p className="text-xl font-semibold text-black">-21%</p>
              <p className="text-[10px] text-black/60 mt-1">
                Average over illustrative period.
              </p>
            </Card>

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                On-time delivery change
              </p>
              <p className="text-xl font-semibold text-black">+8 pts</p>
              <p className="text-[10px] text-black/60 mt-1">
                Illustrative scenario, not a guarantee.
              </p>
            </Card>

            <Card className="border border-black/10 p-4">
              <p className="text-[11px] text-black/60 uppercase tracking-wider mb-1">
                Estimated annualised value
              </p>
              <p className="text-xl font-semibold text-black">£860,000</p>
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
            The business produced high-mix, lower-volume work with frequent setup changes. Recurring downtime was hidden inside broad
            reason codes, changeover overruns were not surfaced consistently, and weekly reporting arrived too late to drive action.
          </p>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Leadership questions behind the project
          </h2>

          <ul className="list-disc list-inside text-black/70 text-sm space-y-1 mb-6">
            <li>Which changeovers are drifting furthest from standard?</li>
            <li>Which downtime reasons are recurring but still buried in broad categories?</li>
            <li>Where is schedule underperformance becoming customer-delivery risk?</li>
            <li>How much productive capacity is being lost without a disciplined visibility model?</li>
          </ul>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            What was implemented
          </h2>

          <p className="text-black/70 text-sm mb-3">
            In this illustrative scenario, the Exec App is configured to provide:
          </p>

          <ul className="list-disc list-inside text-black/70 text-sm space-y-1 mb-6">
            <li>Machine-level downtime views.</li>
            <li>Reason-code rollups for leadership.</li>
            <li>Shift-by-shift schedule attainment views.</li>
            <li>Delivery risk dashboards.</li>
            <li>Exception-focused weekly review dashboards.</li>
            <li>Structured export views for operations meetings.</li>
          </ul>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Time to rollout
          </h2>

          <p className="text-black/70 text-sm mb-6">
            Illustratively 6 weeks from scoping to first structured downtime and schedule review, depending on the availability of downtime
            data, tagging standards, and cell connectivity.
          </p>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Results
          </h2>

          <p className="text-black/70 text-sm mb-6">
            In this anonymised example, recurring downtime reduced by 14%, schedule attainment improved from 81% to 90%, average changeover
            overrun reduced by 21%, on-time delivery improved by 8 percentage points, and weekly reporting preparation time reduced by
            around 65%. Leadership gains line-of-sight to where capacity is being lost and how that relates to missed schedule.
          </p>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            ROI story
          </h2>

          <p className="text-black/70 text-sm mb-6">
            Illustratively, the annualised value model for this scenario is built from: recovered productive capacity (approximately
            £410,000), lower expediting and delivery penalties (approximately £260,000), reduced reporting and admin effort (approximately
            £90,000), and changeover efficiency gains (approximately £100,000). Together these give an estimated annualised total value of
            around £860,000. This is a scenario only and not a guarantee of results; actual ROI would vary by customer and execution.
          </p>



          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            Why it mattered
          </h2>

          <p className="text-black/70 text-sm mb-10">
            The business gained faster visibility into recurring losses, clearer issue prioritisation, more disciplined weekly reviews, and
            a better connection between shop-floor loss and customer-delivery performance. A structured downtime view helped protect
            schedule reliability by focusing effort on the specific machines and causes that most threatened delivery.
          </p>


          <h2 className="text-xl font-semibold text-black mt-6 mb-3">
            KPI areas that mattered most in this scenario
          </h2>
          <p className="text-black/70 text-sm mb-3">
            This precision engineering downtime scenario drew primarily on the Downtime &amp; Reliability, Maintenance, Production, and
            Delivery &amp; Service KPI areas within the Exec App framework.
          </p>
          <ul className="list-disc list-inside text-black/70 text-sm space-y-1 mb-10">
            <li><strong>Downtime &amp; Reliability</strong> — recurring stoppages, availability, and root-cause breakdowns.</li>
            <li><strong>Maintenance</strong> — planned vs reactive work, backlog, and asset criticality coverage.</li>
            <li><strong>Production</strong> — schedule attainment, changeover performance, and throughput.</li>
            <li><strong>Delivery &amp; Service</strong> — OTIF/OTD and delivery risk linked back to operational loss.</li>
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