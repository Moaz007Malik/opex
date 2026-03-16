import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
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
        <title>About OpEx6 — We Are Building the Operational Intelligence Platform Manufacturing Leaders Have Needed</title>
        <meta name="description" content="OpEx6 is being built to give manufacturing executives the structured, consistent operational intelligence they need to make faster and better decisions." />
      </Helmet>

      {/* Section 11.1 — Hero: Why OpEx6 exists */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            We built OpEx6 because too many manufacturing leaders are forced to run critical decisions on fragmented reports, spreadsheets, and delayed operational data.
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            The result is slow escalation of issues, inconsistent site comparisons, and leadership conversations that arrive days or weeks after the losses have already happened. OpEx6 is being built to give manufacturing leaders a single, structured operating view they can actually use.
          </p>
          <p className="text-sm text-text-secondary">
            OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots, integrations, availability, and pricing may change before general release.
          </p>
        </div>
      </section>

      {/* Section 11.2 — The problem we are addressing */}
      <Section className="bg-secondary/50">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold text-text-primary">
            The specific operational-visibility problem we are focused on.
          </h2>
          <p className="text-text-secondary text-sm">
            In many manufacturing businesses, plant teams work hard to generate reports — OEE, downtime, scrap, safety, margin — but by the time those reports reach executives, they are often out of date, inconsistent across sites, or trapped in slide decks that are difficult to act on.
          </p>
          <p className="text-text-secondary text-sm">
            Leaders are left stitching together shop-floor data, finance summaries, and anecdotal feedback to answer basic questions: Where are we losing margin? Which sites are underperforming? How much capacity is tied up in downtime, changeovers, and WIP? OpEx6 exists to make those questions faster and easier to answer.
          </p>
        </div>
      </Section>

      {/* Section 11.3 — Founder / company narrative */}
      <Section>
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold text-text-primary">
            Built by people who have lived the problem.
          </h2>
          <p className="text-text-secondary text-sm">
            OpEx6 was started by people who have spent years working with manufacturing leadership teams — in plant reviews, board packs, and continuous-improvement programmes — trying to answer the same questions with spreadsheets, exports, and manually assembled reports.
          </p>
          <p className="text-text-secondary text-sm">
            We have seen operations reviews where half the meeting is spent debating which number is correct. We have seen CI and engineering teams struggle to prove the impact of their work because the data is scattered. We have seen finance teams trying to connect operational decisions to margin with tools that were never designed for it.
          </p>
          <p className="text-text-secondary text-sm">
            OpEx6 is being built as the platform we wished those teams had: one structured operating view that connects performance, downtime, quality, safety, and margin drivers — in a format that executives, plant leaders, and finance teams can all work from.
          </p>
        </div>
      </Section>

      {/* Section 11.4 — Why OpEx6 vs traditional BI */}
      <Section className="bg-secondary/50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-text-primary">
            Why OpEx6 instead of a generic BI tool?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-lg text-text-primary mb-2">Structured for manufacturing KPIs out of the box</h3>
              <p className="text-text-secondary text-sm">
                Traditional BI tools give you building blocks. OpEx6 is being designed with manufacturing KPI categories, definitions, and dashboard structures baked in — OEE, downtime, margin, safety, WIP, and more — so leaders are not starting from a blank canvas.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-lg text-text-primary mb-2">Built for executive and plant reviews</h3>
              <p className="text-text-secondary text-sm">
                Rather than generic charts, OpEx6 is focused on the specific views leadership teams use in weekly, monthly, and board reviews — multi-site comparisons, exception lists, and structured packs that reduce prep time and increase the quality of discussion.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-lg text-text-primary mb-2">Operational–commercial linkage</h3>
              <p className="text-text-secondary text-sm">
                Where data allows, OpEx6 is being designed to help connect operational signals — downtime, scrap, schedule adherence — to contribution, margin, and cash impact. Traditional BI tools can do this, but often require significant custom modelling to get there.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-lg text-text-primary mb-2">Opinionated structure, not another ad hoc report</h3>
              <p className="text-text-secondary text-sm">
                Many BI deployments end up as a collection of one-off dashboards. OpEx6 is being built as a structured operating framework, so executives, plant leaders, and finance teams are all looking at the same metrics, in the same way, every time.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 11.5 — Values (3 cards) */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            How we think about building OpEx6.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Card key={i}>
                <h3 className="font-semibold text-lg text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-secondary text-sm">{v.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 11.6 — Bottom CTA */}
      <Section className="bg-secondary/50 text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Register interest in the Exec App.
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-6">
          If you recognise these operational visibility challenges in your own plants or portfolio, register your interest in the Exec App.
          We are building OpEx6 with manufacturing leaders who want a more structured way to see performance, downtime, and margin.
        </p>
        <Button to="/register-interest">
          Register Interest in the Exec App
        </Button>
      </Section>
    </>
  );
}
