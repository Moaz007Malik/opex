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

      {/* HERO */}
      <section className="py-28 border-b border-black/10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              The Exec App by OpEx6
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              One structured operating view for manufacturing leadership.
            </h1>

            <p className="text-lg text-black/70 mb-4">
              The Exec App is the operational intelligence platform being built to give manufacturing leaders a single, structured view of performance, downtime, margin, safety, and execution.
            </p>

            <p className="text-sm text-black/60 mb-8">
              OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots, integrations, availability, and pricing may change before general release.
            </p>

            <Button to="/register-interest">
              Register Interest in the Exec App
            </Button>

          </div>

          {/* Product visual */}
          <div className="bg-white border border-black/10 rounded-xl p-8 shadow-sm">
            <div className="h-64 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
              <span className="text-sm text-black/60">
                Exec App dashboard preview
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* WHY IT MATTERS */}
      <Section>
        <div className="max-w-5xl">

          <h2 className="text-3xl font-bold text-black mb-4">
            Why it matters for manufacturing leadership.
          </h2>

          <p className="text-black/70 mb-10 max-w-3xl">
            Most leadership teams still rely on siloed reports, last week's spreadsheets, and disconnected local dashboards to understand how operations are performing. The Exec App is being built to bring that picture together — so decisions about cost, risk, and execution are made from a shared, current reality.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <Card className="bg-white border border-black/10 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-black mb-2">
                Faster visibility
              </h3>
              <p className="text-black/70 text-sm">
                See OEE, throughput, downtime, and yield patterns across plants without waiting for end-of-week or month-end packs.
              </p>
            </Card>

            <Card className="bg-white border border-black/10 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-black mb-2">
                Aligned decisions
              </h3>
              <p className="text-black/70 text-sm">
                Give operations, finance, and CI teams the same structured view of performance so trade-offs are made from shared data.
              </p>
            </Card>

            <Card className="bg-white border border-black/10 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-black mb-2">
                Board-ready clarity
              </h3>
              <p className="text-black/70 text-sm">
                Move leadership reporting out of ad hoc spreadsheets and into a repeatable, board-ready operating view.
              </p>
            </Card>

          </div>

        </div>
      </Section>


      {/* WHAT IT HELPS LEADERS SEE */}
      <Section className="bg-gray-50">

        <div className="max-w-4xl">

          <h2 className="text-3xl font-bold text-black mb-8">
            What the Exec App is being built to help leaders see.
          </h2>

          <div className="space-y-4">

            {WHAT_IT_HELPS_LEADERS_SEE.map((item, i) => (
              <div key={i} className="flex gap-3">

                <div className="w-2 h-2 mt-2 rounded-full bg-accent" />

                <p className="text-black/70">{item}</p>

              </div>
            ))}

          </div>

        </div>

      </Section>


      {/* DECISION SUPPORT */}
      <Section>

        <div className="max-w-4xl">

          <h2 className="text-3xl font-bold text-black mb-8">
            How it supports executive decision-making.
          </h2>

          <div className="space-y-4">

            {HOW_IT_SUPPORTS_DECISIONS.map((item, i) => (
              <div key={i} className="flex gap-3">

                <div className="w-2 h-2 mt-2 rounded-full bg-accent" />

                <p className="text-black/70">{item}</p>

              </div>
            ))}

          </div>

        </div>

      </Section>


      {/* USE CASES */}
      <Section className="bg-gray-50">

        <h2 className="text-3xl font-bold text-black mb-10">
          Illustrative executive use cases.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {USE_CASES.map((u, i) => (
            <Card key={i} className="bg-white border border-black/10 rounded-xl shadow-sm">

              <h3 className="font-semibold text-lg text-black mb-2">
                {u.title}
              </h3>

              <p className="text-black/70 text-sm">
                {u.body}
              </p>

            </Card>
          ))}

        </div>

        <p className="text-xs text-black/60 max-w-3xl mt-6">
          Any AI-enabled insights described are intended to support human decision-making and are not a substitute for human review, operational judgment, or formal compliance processes.
        </p>

      </Section>


      {/* MOBILE */}
      <Section>

        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-3xl font-bold text-black mb-4">
              Built for leadership on the move.
            </h2>

            <p className="text-black/70 mb-4">
              The Exec App is being designed for use on desktop and mobile, so leaders can review performance, downtime, and risk whether they are on-site, travelling, or working remotely.
            </p>

            <p className="text-black/60 text-sm mb-4">
              Coming soon on iPhone and Android. Planned for the App Store and Google Play, subject to final launch approvals.
            </p>

            <p className="text-black/50 text-xs">
              Visuals shown are indicative only and do not represent a live, generally available mobile application.
            </p>

          </div>

          <div className="flex justify-center gap-8">

            <div className="w-32 h-60 bg-white border border-black/10 rounded-3xl shadow-sm flex items-center justify-center">
              iPhone
            </div>

            <div className="w-32 h-60 bg-white border border-black/10 rounded-3xl shadow-sm flex items-center justify-center">
              Android
            </div>

          </div>

        </div>

      </Section>


      {/* FINAL CTA */}
      <Section className="text-center">

        <h2 className="text-2xl font-bold text-black mb-4">
          Register interest in the Exec App.
        </h2>

        <p className="text-black/70 max-w-2xl mx-auto mb-6">
          Register your interest now to be among the first to access the Exec App when it opens to early users. Early registrants are eligible for our pre-launch credit offer — £50 for 50 credits + 25 free credits at launch, subject to final launch terms.
        </p>

        <Button to="/register-interest">
          Register Interest in the Exec App
        </Button>

      </Section>
    </>
  );
}
