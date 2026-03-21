import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const USE_CASES = [
  {
    id: 'packaging-group-margin-visibility',
    sector: 'PACKAGING GROUP',
    title: 'How a multi-site packaging group improved margin visibility across 3 plants',
    summary: 'An anonymised illustrative use case showing how a packaging manufacturer could connect downtime, waste, and product mix to contribution and margin visibility across plants.',
  },
  {
    id: 'precision-engineering-downtime-reduction',
    sector: 'PRECISION ENGINEERING',
    title: 'How a precision engineering manufacturer reduced downtime and improved schedule attainment',
    summary: 'An anonymised illustrative use case showing how a precision engineering operation could use structured downtime visibility to reduce recurring stops and support better schedule adherence.',
  },
  {
    id: 'chemicals-quality-and-compliance',
    sector: 'CHEMICALS & MATERIALS',
    title: 'How a chemicals manufacturer improved quality visibility and reduced deviation-response time',
    summary: 'An anonymised illustrative use case showing how a chemicals manufacturer could bring batch quality, deviations, and compliance metrics into one structured view to shorten response times.',
  },
];

export function UseCases() {
  return (
    <>
      <Helmet>
        <title>Customer Use Cases — OpEx6 | Illustrative Manufacturing Scenarios</title>
        <meta
          name="description"
          content="Anonymised illustrative customer use cases showing how OpEx6 is designed to help manufacturing leaders turn siloed operational data into structured visibility, faster decisions, and measurable financial outcomes."
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
            ANONYMISED ILLUSTRATIVE CUSTOMER USE CASES
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Customer Use Cases
          </h1>

          <p className="text-lg text-text-primary mb-4">
            See how OpEx6 is designed to help manufacturing leaders turn siloed operational data into structured visibility, faster decisions, and measurable financial outcomes.
          </p>

          <p className="text-sm text-text-primary max-w-[1400px] italic">
            These are anonymised illustrative customer use cases based on common manufacturing scenarios. They are provided for general information and do not represent a named customer endorsement or guarantee of results.
          </p>

        </div>
      </motion.section>



      {/* USE CASE CARDS */}
      <Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {USE_CASES.map((uc) => (

            <Card
              key={uc.id}
              className="flex flex-col border border-border rounded-xl p-6 bg-card-bg hover:shadow-md transition-shadow"
            >

              <span className="inline-block w-fit text-[11px] font-medium uppercase tracking-wider text-accent mb-2">
                {uc.sector}
              </span>

              <h2 className="font-semibold text-base md:text-lg text-text-primary mb-2">
                {uc.title}
              </h2>

              <p className="text-text-primary text-sm mb-6 flex-1">
                {uc.summary}
              </p>

              <Link
                to={`/use-cases/${uc.id}`}
                className="text-accent font-medium text-sm hover:underline inline-flex items-center"
              >
                View use case &rarr;
              </Link>

            </Card>

          ))}

        </div>



      </Section>

      {/* FINAL CTA */}
      <Section className="bg-background">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-lg text-text-primary mb-6">
            Interested in how the Exec App could support visibility and decision-making across your manufacturing operations?
          </p>
          <Button to="/register-interest" className="justify-center">
            Register Interest in the Exec App
          </Button>
        </div>
      </Section>

    </>
  );
}