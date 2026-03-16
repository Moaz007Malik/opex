import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const WHAT_IT_HELPS_LEADERS_SEE = [
  'See real-time OEE, throughput, and downtime patterns across plants and lines.',
  'Compare shift performance and bottlenecks across sites in one structured view.',
  'Track scrap, rework, and first-pass yield before they erode margin.',
  'See safety incidents, near misses, and compliance status in a single leadership view.',
  'Understand where WIP, inventory, and schedule volatility are tying up cash.',
];

const HOW_IT_SUPPORTS_DECISIONS = [
  'Bring leadership reporting out of spreadsheets and into one structured operating view.',
  'Surface the operational signals that affect cost, risk, and execution so they are not missed.',
  'Link downtime, speed loss, and quality escapes to contribution and margin impact.',
  'Support board and exec reviews with consistent, repeatable operational packs.',
  'Help CI, operations, and finance teams work from the same performance reality.',
];

const OPERATIONAL_COMMERCIAL_LINKAGE = [
  'Translate OEE, availability, and speed losses into estimated margin impact where data allows.',
  'Highlight where scrap, rework, and yield losses are quietly distorting product economics.',
  'Show how schedule adherence, changeover performance, and WIP affect working capital.',
  'Give finance and operations a shared view of where cost and performance are diverging.',
];

const USE_CASES = [
  {
    title: 'Multi-site OEE and downtime review',
    body: 'A manufacturing director uses the Exec App to compare OEE, availability, and top downtime causes across three plants. Patterns that were previously buried in local reports become visible in one structured view, guiding where to focus reliability effort.',
  },
  {
    title: 'Connecting losses to margin',
    body: 'A finance director and COO review how scrap, rework, and minor stoppages on a flagship line are impacting cost per unit. The Exec App helps connect operational losses to margin erosion, supporting an aligned improvement plan.',
  },
  {
    title: 'Board-ready operational pack',
    body: 'A CEO prepares for a board meeting using Exec App dashboards instead of manually assembled spreadsheets. Performance, risk, and margin signals are presented in a consistent format, with the same numbers the plants and functional teams see.',
  },
];

export function ExecApp() {
  return (
    <>
      <Helmet>
        <title>Exec App — OpEx6 | One Dashboard Framework. Every KPI That Matters.</title>
        <meta name="description" content="The Exec App is the operational intelligence platform being built for manufacturing and industrial executives. Single, structured view of every metric that matters." />
      </Helmet>

      {/* Section 2.1 — Hero — what it is */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">The Exec App by OpEx6</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            One structured operating view for manufacturing leadership.
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            The Exec App is the operational intelligence platform being built to give manufacturing leaders a single, structured view of performance, downtime, margin, safety, and execution.
          </p>
          <p className="text-sm text-text-secondary mb-8">
            OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots, integrations, availability, and pricing may change before general release.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/register-interest">
              Register Interest in the Exec App
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2.2 — Why it matters — leadership outcomes */}
      <Section className="bg-secondary/50">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Why it matters for manufacturing leadership.
        </h2>
        <p className="text-text-secondary max-w-3xl mb-6">
          Most leadership teams still rely on siloed reports, last week&apos;s spreadsheets, and disconnected local dashboards to understand how operations are performing. The Exec App is being built to bring that picture together — so decisions about cost, risk, and execution are made from a shared, current reality.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold text-lg text-text-primary mb-2">Faster visibility</h3>
            <p className="text-text-secondary text-sm">
              See OEE, throughput, downtime, and yield patterns across plants without waiting for end-of-week or month-end packs.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg text-text-primary mb-2">Aligned decisions</h3>
            <p className="text-text-secondary text-sm">
              Give operations, finance, and CI teams the same structured view of performance so trade-offs are made from shared data.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg text-text-primary mb-2">Board-ready clarity</h3>
            <p className="text-text-secondary text-sm">
              Move leadership reporting out of ad hoc spreadsheets and into a repeatable, board-ready operating view.
            </p>
          </Card>
        </div>
      </Section>

      {/* Section 2.3 — What it helps leaders see */}
      <Section>
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          What the Exec App is being built to help leaders see.
        </h2>
        <ul className="space-y-3 max-w-3xl">
          {WHAT_IT_HELPS_LEADERS_SEE.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 2.4 — How it supports decision-making */}
      <Section className="bg-secondary/50">
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          How it supports executive decision-making.
        </h2>
        <ul className="space-y-3 max-w-3xl">
          {HOW_IT_SUPPORTS_DECISIONS.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 2.5 — Operational to commercial narrative */}
      <Section>
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          Operational problems become financial problems faster than most reports show
        </h2>
        <p className="text-text-secondary max-w-3xl mb-4">
          A 30-minute stoppage is not just a production event. A weak BOM assumption is not just a finance issue. Rework, delay, consumables, and schedule drift do not stay inside operations — they compound into margin erosion, cash pressure, and slower decision-making.
        </p>
        <ul className="space-y-3 max-w-3xl">
          <li className="flex items-start gap-3 text-text-secondary">
            <span className="text-accent mt-1 shrink-0">•</span>
            <span>connect downtime to lost output and contribution risk</span>
          </li>
          <li className="flex items-start gap-3 text-text-secondary">
            <span className="text-accent mt-1 shrink-0">•</span>
            <span>connect rework and scrap to margin erosion</span>
          </li>
          <li className="flex items-start gap-3 text-text-secondary">
            <span className="text-accent mt-1 shrink-0">•</span>
            <span>connect WIP and delay to cash pressure</span>
          </li>
          <li className="flex items-start gap-3 text-text-secondary">
            <span className="text-accent mt-1 shrink-0">•</span>
            <span>connect shop-floor reality to leadership reporting</span>
          </li>
          <li className="flex items-start gap-3 text-text-secondary">
            <span className="text-accent mt-1 shrink-0">•</span>
            <span>connect operations to more disciplined executive decisions</span>
          </li>
        </ul>
      </Section>

      {/* Section 2.6 — Use case / proof framing */}
      <Section className="bg-secondary/50">
        <h2 className="text-3xl font-bold text-text-primary mb-8">
          Illustrative executive use cases.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {USE_CASES.map((u, i) => (
            <Card key={i}>
              <h3 className="font-semibold text-lg text-text-primary mb-2">{u.title}</h3>
              <p className="text-text-secondary text-sm">{u.body}</p>
            </Card>
          ))}
        </div>
        <p className="text-xs text-text-secondary max-w-3xl mt-6">
          Any AI-enabled insights described are intended to support human decision-making and are not a substitute for human review, operational judgment, or formal compliance processes.
        </p>
      </Section>

      {/* Section 2.7 — Mobile availability */}
      <Section>
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          Built for leadership on the move.
        </h2>
        <div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 items-center">
          <div>
            <p className="text-text-secondary mb-4 max-w-3xl">
              The Exec App is being designed for use on desktop and mobile, so leaders can review performance, downtime, and risk whether they are on-site, travelling, or working remotely.
            </p>
            <p className="text-text-secondary text-sm mb-4">
              Coming soon on iPhone and Android. Planned for the App Store and Google Play, subject to final launch approvals.
            </p>
            <p className="text-xs text-text-secondary">
              Visuals shown are indicative only and do not represent a live, generally available mobile application.
            </p>
          </div>
          <div className="flex justify-center md:justify-end gap-6">
            <div className="w-24 h-44 rounded-3xl border border-border/80 bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center space-y-2">
              <div className="w-8 h-8 rounded-2xl bg-white/10 flex items-center justify-center">
                <span className="text-xs text-text-secondary"></span>
              </div>
              <span className="text-[10px] text-text-secondary">iPhone</span>
            </div>
            <div className="w-24 h-44 rounded-3xl border border-border/80 bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center space-y-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-[10px] text-text-secondary">Android</span>
              </div>
              <span className="text-[10px] text-text-secondary">Android</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2.8 — Final CTA */}
      <Section className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Register interest in the Exec App.
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-6">
          Register your interest now to be among the first to access the Exec App when it opens to early users. Early registrants are eligible for our pre-launch credit offer — £50 for 50 credits + 25 free credits at launch, subject to final launch terms.
        </p>
        <Button to="/register-interest">
          Register Interest in the Exec App
        </Button>
      </Section>
    </>
  );
}
