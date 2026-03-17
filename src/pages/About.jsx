import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { RegisterInterestCTA } from '../components/RegisterInterestCTA';
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

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.8fr_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
            {/* Left: Narrative */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-secondary font-semibold mb-4">
                About OpEx6
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight mb-6">
                We built OpEx6 because too many manufacturing leaders are forced to run critical decisions on fragmented reports, spreadsheets, and delayed operational data.
              </h1>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-5">
                The result is slow escalation of issues, inconsistent site comparisons, and leadership conversations that arrive days or weeks after the losses have already happened. OpEx6 is being built to give manufacturing leaders a single, structured operating view they can actually use.
              </p>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots, integrations, availability, and pricing may change before general release.
              </p>
            </div>

            {/* Right: Highlight Card */}
            <div className="lg:pt-4">
              <Card className="bg-card-bg border border-border rounded-2xl shadow-sm lg:shadow-md p-6 sm:p-7 space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-text-secondary font-semibold">
                  Operational visibility focus
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  In many manufacturing businesses, plant teams work hard to generate reports — OEE, downtime, scrap, safety, margin — but by the time those reports reach executives, they are often out of date, inconsistent across sites, or trapped in slide decks that are difficult to act on.
                </p>
                <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p className="text-sm text-text-secondary leading-relaxed">
                  Leaders are left stitching together shop-floor data, finance summaries, and anecdotal feedback to answer basic questions: Where are we losing margin? Which sites are underperforming? How much capacity is tied up in downtime, changeovers, and WIP? OpEx6 exists to make those questions faster and easier to answer.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Founder Narrative */}
      <Section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-text-primary">
              Built by people who have lived the problem.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div className="flex flex-col text-left h-full">
              <div className="w-8 h-8 mb-3 rounded-full border border-border bg-secondary flex items-center justify-center text-xs font-medium text-text-secondary">
                01
              </div>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed bg-secondary border border-border/50 rounded-2xl p-6 flex-1">
                OpEx6 was started by people who have spent years working with manufacturing leadership teams — in plant reviews, board packs, and continuous-improvement programmes — trying to answer the same questions with spreadsheets, exports, and manually assembled reports.
              </p>
            </div>

            <div className="flex flex-col text-left h-full">
              <div className="w-8 h-8 mb-3 rounded-full border border-border bg-secondary flex items-center justify-center text-xs font-medium text-text-secondary">
                02
              </div>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed bg-secondary border border-border/50 rounded-2xl p-6 flex-1">
                We have seen operations reviews where half the meeting is spent debating which number is correct. We have seen CI and engineering teams struggle to prove the impact of their work because the data is scattered. We have seen finance teams trying to connect operational decisions to margin with tools that were never designed for it.
              </p>
            </div>

            <div className="flex flex-col text-left h-full">
              <div className="w-8 h-8 mb-3 rounded-full border border-border bg-secondary flex items-center justify-center text-xs font-medium text-text-secondary">
                03
              </div>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed bg-card-bg border border-border rounded-2xl p-6 shadow-sm flex-1">
                OpEx6 is being built as the platform we wished those teams had: one structured operating view that connects performance, downtime, quality, safety, and margin drivers — in a format that executives, plant leaders, and finance teams can all work from.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why OpEx6 vs BI — Comparison Grid */}
      <Section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-semibold text-text-primary">
              Why OpEx6 instead of a generic BI tool?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <Card className="relative bg-card-bg border border-border rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent/20 to-transparent rounded-t-2xl" />
              <h3 className="font-semibold text-xl text-text-primary mb-3">
                Structured for manufacturing KPIs out of the box
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Traditional BI tools give you building blocks. OpEx6 is being designed with manufacturing KPI categories, definitions, and dashboard structures baked in.
              </p>
            </Card>

            <Card className="relative bg-card-bg border border-border rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent/20 to-transparent rounded-t-2xl" />
              <h3 className="font-semibold text-xl text-text-primary mb-3">
                Built for executive and plant reviews
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                OpEx6 is focused on the views leadership teams use in weekly, monthly, and board reviews — multi-site comparisons and exception lists.
              </p>
            </Card>

            <Card className="relative bg-card-bg border border-border rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent/20 to-transparent rounded-t-2xl" />
              <h3 className="font-semibold text-xl text-text-primary mb-3">
                Operational–commercial linkage
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Connect operational signals like downtime and scrap to margin and financial impact.
              </p>
            </Card>

            <Card className="relative bg-card-bg border border-border rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent/20 to-transparent rounded-t-2xl" />
              <h3 className="font-semibold text-xl text-text-primary mb-3">
                Opinionated structure
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Executives, plant leaders, and finance teams all view the same metrics in the same way.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-semibold text-text-primary">
              How we think about building OpEx6.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Card
                key={i}
                className="relative p-6 bg-secondary border border-border rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="absolute top-0 left-0 w-1 h-10 bg-accent rounded-tr-full rounded-br-full" />
                <h3 className="font-semibold text-lg text-text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
          <RegisterInterestCTA />
        </div>
      </Section>
    </>
  );
}