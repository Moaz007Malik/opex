import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { faqGroups } from '../data/faq';

function formatAnswer(text) {
  if (text.includes('our KPIs & Dashboards page')) {
    const [before, after] = text.split('our KPIs & Dashboards page');
    return (
      <>
        {before}
        our <Link to="/kpis" className="text-accent hover:underline">KPIs & Dashboards page</Link>
        {after}
      </>
    );
  }
  if (text.includes('sales@opex6.com')) {
    const [before, after] = text.split('sales@opex6.com');
    return (
      <>
        {before}
        <a href="mailto:sales@opex6.com" className="text-accent hover:underline">sales@opex6.com</a>
        {after}
      </>
    );
  }
  return text;
}

function FaqAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="bg-white border border-black/10 rounded-xl shadow-sm overflow-hidden">

      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
      >
        <span className="font-medium text-black">
          {item.q}
        </span>

        <svg
          className={`w-5 h-5 text-black/60 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>

      </button>

      {isOpen && (
        <div className="px-6 pb-5 text-sm text-black/70">
          {formatAnswer(item.a)}
        </div>
      )}

    </div>
  );
}

export function FAQ() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <>
      <Helmet>
        <title>FAQ — OpEx6 | Frequently Asked Questions</title>
        <meta name="description" content="Frequently asked questions about the Exec App, register interest, integrations, and pricing." />
      </Helmet>

      {/* HERO */}
      <section className="py-28 border-b border-black/10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h1>

            <p className="text-black/70">
              Answers to common questions about the Exec App, early access, integrations, and pricing.
            </p>

          </div>

        </div>
      </section>

      {/* FAQ GROUPS */}
      <Section>

        <div className="max-w-3xl mx-auto space-y-12">

          {faqGroups.map((group, gi) => (

            <div key={gi}>

              <h2 className="text-xl font-bold text-black mb-4">
                {group.title}
              </h2>

              <div className="space-y-3">

                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;

                  return (
                    <FaqAccordionItem
                      key={ii}
                      item={item}
                      isOpen={openKey === key}
                      onToggle={() =>
                        setOpenKey(prev => (prev === key ? null : key))
                      }
                    />
                  );
                })}

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button to="/register-interest">
            Register Interest
          </Button>
        </div>

      </Section>
    </>
  );
}