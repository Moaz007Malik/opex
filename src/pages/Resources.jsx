import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';

const ARTICLES = [
  {
    category: 'OEE',
    title: 'What Is OEE and Why Does It Belong in Your Board Pack?',
    excerpt: 'Overall Equipment Effectiveness is one of the most important metrics in manufacturing — yet most boards still do not see it systematically. Here is why that matters, and what to do about it.',
  },
  {
    category: 'KPI Strategy',
    title: 'The 10 KPIs Every Manufacturing Director Should Be Reviewing Weekly',
    excerpt: 'The metrics you prioritise shape the decisions you make. We have identified the 10 KPIs that most manufacturing leadership teams should be reviewing every week — and why many are currently tracking the wrong ones.',
  },
  {
    category: 'Downtime',
    title: 'The Hidden Cost of Unplanned Downtime — And How to Start Quantifying It',
    excerpt: 'Most manufacturing businesses know unplanned downtime is costing them. Fewer can tell you exactly how much. Here is a framework for starting to quantify it — and why that number matters for your leadership conversations.',
  },
  {
    category: 'Margin',
    title: 'Why Margin Pressure in Manufacturing Is Almost Always a Data Visibility Problem',
    excerpt: 'Margin erosion in manufacturing rarely happens suddenly. It accumulates through waste, rework, and inefficiency that nobody has clear enough visibility to act on systematically. Here is what better margin intelligence looks like.',
  },
  {
    category: 'ESG',
    title: 'Building an ESG Dashboard Your Board Will Actually Engage With',
    excerpt: 'ESG reporting requirements are growing for manufacturers. Most ESG dashboards are built for compliance rather than decisions. Here is what a decision-oriented ESG dashboard framework looks like.',
  },
  {
    category: 'Continuous Improvement',
    title: 'Measuring Your CI Programme — The KPIs That Show Whether It Is Delivering',
    excerpt: 'Most CI programmes generate activity. Fewer generate clearly measurable impact. These are the KPIs that help leadership understand whether their CI investment is producing real operational and commercial results.',
  },
];

export function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources — OpEx6 | Resources for Manufacturing Leaders</title>
        <meta name="description" content="Guides, articles, and operational intelligence thinking for operations directors, plant managers, and manufacturing executives." />
      </Helmet>

      {/* Section 6.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Resources for Manufacturing Leaders
          </h1>
          <p className="text-lg text-text-secondary">
            Guides, articles, and operational intelligence thinking for operations directors, plant managers, and manufacturing executives.
          </p>
        </div>
      </section>

      {/* Section 6.2 — Article Cards (6 articles, 3-column grid) */}
      <Section className="bg-secondary/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article, i) => (
            <Card key={i} className="flex flex-col">
              <span className="inline-block w-fit text-xs font-medium uppercase tracking-wider text-accent mb-3">
                {article.category}
              </span>
              <h2 className="font-semibold text-lg text-text-primary mb-2">{article.title}</h2>
              <p className="text-text-secondary text-sm mb-4 flex-1">{article.excerpt}</p>
              <a
                href="#"
                className="text-accent font-medium text-sm hover:underline inline-flex items-center gap-1"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
