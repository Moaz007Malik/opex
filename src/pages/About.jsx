import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';

const VALUES = [
  {
    title: 'Clarity',
    body: 'Operational complexity should produce clear insight, not more noise. Everything we build is designed to be immediately useful to the people who need it most.',
  },
  {
    title: 'Precision',
    body: 'We are building a platform for people who care about accuracy. Every metric is defined, standardised, and structured for consistency across the organisation.',
  },
  {
    title: 'Relevance',
    body: 'Dashboards alone are not the goal. The goal is better operational decisions — and the outcomes those decisions produce.',
  },
];

export function About() {
  return (
    <>
      <Helmet>
        <title>About OpEx6 — Operational Intelligence Platform for Manufacturing Leaders</title>
        <meta
          name="description"
          content="OpEx6 is being built to give manufacturing executives the structured, consistent operational intelligence they need to make faster and better decisions."
        />
      </Helmet>

      {/* Hero + Context */}
      <motion.section
        className="relative py-24 lg:py-32 bg-background overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.25),transparent_65%)] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left column */}
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                ABOUT OPEX6
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6">
                We built OpEx6 because too many manufacturing leaders are forced to run critical decisions on fragmented reports, spreadsheets, and delayed operational data.
              </h1>
              <p className="text-lg sm:text-xl text-text-primary leading-relaxed mb-5">
                The result is slow escalation of issues, inconsistent site comparisons, and leadership conversations that arrive days or weeks after the losses have already happened. OpEx6 is being built to give manufacturing leaders a single, structured operating view they can actually use.
              </p>
              <p className="text-lg text-text-primary leading-relaxed">
                OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots, integrations, availability, and pricing may change before general release.
              </p>
            </div>

            {/* Right column */}
            <div>
              <Card className="bg-card-bg border border-border rounded-2xl p-6 sm:p-7 space-y-5">
                <div className="text-accent text-sm uppercase tracking-[0.2em] font-semibold">
                  OPERATIONAL VISIBILITY FOCUS
                </div>
                <p className="text-lg text-text-primary leading-relaxed">
                  In many manufacturing businesses, plant teams work hard to generate reports — OEE, downtime, scrap, safety, margin — but by the time those reports reach executives, they are often out of date, inconsistent across sites, or trapped in slide decks that are difficult to act on.
                </p>
                <p className="text-lg text-text-primary leading-relaxed">
                  Leaders are left stitching together shop-floor data, finance summaries, and anecdotal feedback to answer basic questions: Where are we losing margin? Which sites are underperforming? How much capacity is tied up in downtime, changeovers, and WIP? OpEx6 exists to make those questions faster and easier to answer.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      <Section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Built by people who have lived the problem.
            </h2>
            <p className="text-text-primary text-lg mt-4 max-w-[1400px] mx-auto leading-relaxed">
              The goal is simple: make executive operational visibility repeatable, structured, and decision-ready — without rebuilding reporting every quarter.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-base uppercase tracking-[0.18em] text-text-primary font-semibold mb-4">
                01 — LIVED EXPERIENCE:
              </h3>
              <p className="text-text-primary text-lg leading-relaxed">
                OpEx6 was started by people who have spent years working with manufacturing leadership teams — in plant reviews, board packs, and continuous-improvement programmes — trying to answer the same questions with spreadsheets, exports, and manually assembled reports.
              </p>
            </Card>

            <Card className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-base uppercase tracking-[0.18em] text-text-primary font-semibold mb-4">
                02 — SEEN THE FAILURE MODES:
              </h3>
              <p className="text-text-primary text-lg leading-relaxed">
                We have seen operations reviews where half the meeting is spent debating which number is correct. We have seen CI and engineering teams struggle to prove the impact of their work because the data is scattered. We have seen finance teams trying to connect operational decisions to margin with tools that were never designed for it.
              </p>
            </Card>

            <Card className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-base uppercase tracking-[0.18em] text-text-primary font-semibold mb-4">
                03 — BUILDING THE ALTERNATIVE:
              </h3>
              <p className="text-text-primary text-lg leading-relaxed">
                OpEx6 is being built as the platform we wished those teams had: one structured operating view that connects performance, downtime, quality, safety, and margin drivers — in a format that executives, plant leaders, and finance teams can all work from.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why OpEx6 vs generic BI */}
      <Section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[1400px] mx-auto text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
              Why OpEx6 instead of a generic BI tool?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <Card className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-2xl text-text-primary mb-3">
                Structured for manufacturing KPIs out of the box
              </h3>
              <p className="text-text-primary text-xl leading-relaxed font-medium">
                Traditional BI tools give you building blocks. OpEx6 is being designed with manufacturing KPI categories, definitions, and dashboard structures baked in.
              </p>
            </Card>

            <Card className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-2xl text-text-primary mb-3">
                Built for executive and plant reviews
              </h3>
              <p className="text-text-primary text-xl leading-relaxed font-medium">
                OpEx6 is focused on the views leadership teams use in weekly, monthly, and board reviews — multi-site comparisons and exception lists.
              </p>
            </Card>

            <Card className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-2xl text-text-primary mb-3">
                Operational-commercial linkage
              </h3>
              <p className="text-text-primary text-xl leading-relaxed font-medium">
                Connect operational signals like downtime and scrap to margin and financial impact.
              </p>
            </Card>

            <Card className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-2xl text-text-primary mb-3">
                Opinionated structure
              </h3>
              <p className="text-text-primary text-xl leading-relaxed font-medium">
                Executives, plant leaders, and finance teams all view the same metrics in the same way.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* How we think */}
      <Section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-14">
            How we think about building OpEx6.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <Card
                key={v.title}
                className="relative p-6 bg-secondary border border-border rounded-2xl shadow-sm"
              >
                <h3 className="font-semibold text-2xl text-text-primary mb-2">
                  {v.title} —
                </h3>
                <p className="text-text-primary text-xl leading-relaxed font-medium">
                  {v.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA is rendered globally */}
    </>
  );
}