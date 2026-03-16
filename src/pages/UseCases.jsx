import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const USE_CASES = [
  {
    id: 'packaging-group-margin-visibility',
    sector: 'Packaging Group',
    title: 'How a multi-site packaging group improved margin visibility across 3 plants',
    summary: 'An anonymised illustrative use case showing how a packaging manufacturer could connect downtime, waste, and product mix to contribution and margin visibility across plants.',
  },
  {
    id: 'precision-engineering-downtime-reduction',
    sector: 'Precision Engineering',
    title: 'How a precision engineering manufacturer reduced downtime and improved schedule attainment',
    summary: 'An anonymised illustrative use case showing how a precision engineering operation could use structured downtime visibility to reduce recurring stops and support better schedule adherence.',
  },
  {
    id: 'chemicals-quality-and-compliance',
    sector: 'Chemicals & Materials',
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
      <section className="py-28 border-b border-black/10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            Anonymised illustrative customer use cases
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Customer Use Cases
          </h1>

          <p className="text-lg text-black/70 mb-4">
            See how OpEx6 is designed to help manufacturing leaders turn siloed operational data into structured visibility, faster decisions, and measurable financial outcomes.
          </p>

          <p className="text-sm text-black/60 max-w-3xl">
            These are anonymised illustrative customer use cases based on common manufacturing scenarios. They are provided for
            general information and do not represent a named customer endorsement or guarantee of results.
          </p>

        </div>
      </section>



      {/* USE CASE CARDS */}
      <Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {USE_CASES.map((uc) => (

            <Card
              key={uc.id}
              className="flex flex-col border border-black/10 rounded-xl p-6 bg-white hover:shadow-md transition-shadow"
            >

              <span className="inline-block w-fit text-[11px] font-medium uppercase tracking-wider text-accent mb-2">
                {uc.sector}
              </span>

              <h2 className="font-semibold text-base md:text-lg text-black mb-2">
                {uc.title}
              </h2>

              <p className="text-black/70 text-sm mb-6 flex-1">
                {uc.summary}
              </p>

              <Link
                to={`/use-cases/${uc.id}`}
                className="text-accent font-medium text-sm hover:underline inline-flex items-center gap-1"
              >
                View use case

                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>

              </Link>

            </Card>

          ))}

        </div>



        {/* CTA */}
        <div className="text-center mt-16">

          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Interested in how the Exec App could support visibility and decision-making across your manufacturing operations?
          </p>

          <Button to="/register-interest">
            Register Interest in the Exec App
          </Button>

        </div>

      </Section>

    </>
  );
}