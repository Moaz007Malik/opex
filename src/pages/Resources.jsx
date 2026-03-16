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
        <meta
          name="description"
          content="Guides, articles, and operational intelligence thinking for operations directors, plant managers, and manufacturing executives."
        />
      </Helmet>


      {/* HERO */}
      <section className="py-28 border-b border-black/10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            Resources
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Resources for Manufacturing Leaders
          </h1>

          <p className="text-lg text-black/70 mb-3">
            Guides, articles, and operational intelligence thinking for operations directors, plant managers, and manufacturing executives.
          </p>

          <p className="text-sm text-black/60 max-w-3xl">
            This page is a curated list of resources. Article content is illustrative and subject to change as the Exec App and OpEx6 platform develop.
          </p>

        </div>
      </section>



      {/* ARTICLES */}
      <Section>

        <div className="flex items-baseline justify-between gap-4 mb-8">

          <h2 className="text-2xl font-bold text-black">
            Latest resources
          </h2>

          <p className="text-xs text-black/60">
            List page only — full articles will be published as the platform develops.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {ARTICLES.map((article, i) => (

            <Card
              key={i}
              className="flex flex-col border border-black/10 rounded-xl p-6 bg-white"
            >

              <span className="inline-block w-fit text-[11px] font-medium uppercase tracking-wider text-accent mb-2">
                {article.category}
              </span>

              <h2 className="font-semibold text-base md:text-lg text-black mb-2 line-clamp-3">
                {article.title}
              </h2>

              <p className="text-black/70 text-sm mb-4 flex-1 line-clamp-5">
                {article.excerpt}
              </p>

              <span className="text-black/60 text-xs">
                Full article coming soon.
              </span>

            </Card>

          ))}

        </div>

      </Section>



      {/* QUESTIONS */}
      <Section className="bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-black mb-10">
            Questions manufacturing leaders should be able to answer faster
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              'What is the true cost per unit of your top product right now?',
              'How much cash is trapped in WIP across your factory floor?',
              'Which products are quietly losing you money?',
              'How much unrecovered cost sits inside recurring downtime?',
              'Is your budget grounded in factory reality or spreadsheet optimism?',
              'How quickly would leadership see the impact of a raw-material price jump?',
            ].map((q, i) => (

              <Card
                key={i}
                className="border border-black/10 rounded-xl p-6 bg-white"
              >

                <p className="text-black/70 text-sm">
                  {q}
                </p>

              </Card>

            ))}

          </div>

        </div>

      </Section>

    </>
  );
}