import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';

const ARTICLES = [
  {
    category: 'OEE',
    title: 'What Is OEE and Why Does It Belong in Your Board Pack?',
    excerpt: 'Overall Equipment Effectiveness is one of the most important metrics in manufacturing — yet most boards still do not see it systematically. Here is why that matters, and what to do about it.',
  },
  {
    category: 'KPI STRATEGY',
    title: 'The 10 KPIs Every Manufacturing Director Should Be Reviewing Weekly',
    excerpt: 'The metrics you prioritise shape the decisions you make. We have identified the 10 KPIs that most manufacturing leadership teams should be reviewing every week — and why many are currently tracking the wrong ones.',
  },
  {
    category: 'DOWNTIME',
    title: 'The Hidden Cost of Unplanned Downtime — And How to Start Quantifying It',
    excerpt: 'Most manufacturing businesses know unplanned downtime is costing them. Fewer can tell you exactly how much. Here is a framework for starting to quantify it — and why that number matters for your leadership conversations.',
  },
  {
    category: 'MARGIN',
    title: 'Why Margin Pressure in Manufacturing Is Almost Always a Data Visibility Problem',
    excerpt: 'Margin erosion in manufacturing rarely happens suddenly. It accumulates through waste, rework, and inefficiency that nobody has clear enough visibility to act on systematically. Here is what better margin intelligence looks like.',
  },
  {
    category: 'ESG',
    title: 'Building an ESG Dashboard Your Board Will Actually Engage With',
    excerpt: 'ESG reporting requirements are growing for manufacturers. Most ESG dashboards are built for compliance rather than decisions. Here is what a decision-oriented ESG dashboard framework looks like.',
  },
  {
    category: 'CONTINUOUS IMPROVEMENT',
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
      <motion.section
        className="py-28 border-b border-border bg-background"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-[1400px] mx-auto px-6">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            RESOURCES
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Resources for Manufacturing Leaders
          </h1>

          <p className="text-lg text-text-primary mb-3">
            Guides, articles, and operational intelligence thinking for operations directors, plant managers, and manufacturing executives.
          </p>

          <p className="text-sm text-text-primary max-w-[1400px] italic">
            This page is a curated list of resources. Article content is illustrative and subject to change as the Exec App and OpEx6 platform develop.
          </p>

        </div>
      </motion.section>

      {/* ARTICLES */}
      <Section>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {ARTICLES.map((article, i) => (

            <Card
              key={i}
              className="flex flex-col border border-border rounded-xl p-6 bg-card-bg"
            >

              <span className="inline-block w-fit text-[11px] font-medium uppercase tracking-wider text-accent mb-3">
                {article.category}
              </span>

              <h2 className="text-lg font-semibold text-text-primary mb-2">
                {article.title}
              </h2>

              <p className="text-text-primary text-sm mb-4">
                {article.excerpt}
              </p>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-accent font-semibold hover:underline inline-block mb-2"
              >
                Read More &rarr;
              </a>

              <p className="text-text-primary text-xs">
                Full article coming soon.
              </p>

            </Card>

          ))}

        </div>

      </Section>



      {/* QUESTIONS */}
      <Section>

        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-3xl font-bold text-text-primary mb-10">
            Questions manufacturing leaders should be able to answer faster.
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "What is the true cost per unit of your top product right now? Not last year's assumption. Today's material, labour, machine, and overhead reality.",
              'How much cash is trapped in WIP across your factory floor? Busy production does not always mean healthy cash flow.',
              'Which products are quietly losing you money? Without structured visibility, weak product economics stay hidden.',
              'How much unrecovered cost sits inside recurring downtime? Operational losses become commercial losses whether they are measured or not.',
              'Is your budget grounded in factory reality or spreadsheet optimism? A spreadsheet can support a target the factory was never equipped to deliver.',
              'How quickly would leadership see the impact of a raw-material price jump? Better decisions require faster operational and financial visibility.',
            ].map((q, i) => (

              <Card
                key={i}
                className="border border-border rounded-xl p-6 bg-card-bg"
              >

                <p className="text-text-primary text-sm">
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