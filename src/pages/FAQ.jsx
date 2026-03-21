import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    <div className="bg-card-bg border border-border rounded-xl shadow-sm overflow-hidden">

      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-background/70 transition"
      >
        <span className="text-lg font-medium text-text-primary pr-3">
          {item.q}
        </span>

        <svg
          className={`w-5 h-5 shrink-0 text-text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>

      </button>

      {isOpen && (
        <div className="px-6 pb-5 text-lg text-text-primary leading-relaxed">
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
      <motion.section
        className="py-28 border-b border-border bg-background"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-[1400px] mx-auto px-6">

          <div className="max-w-[1400px]">

            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h1>

            <p className="text-text-primary text-xl max-w-3xl">
              Answers to common questions about the Exec App, early access, integrations, and pricing.
            </p>

          </div>

        </div>
      </motion.section>

      {/* FAQ GROUPS */}
      <Section>

        <div className="max-w-[1400px] mx-auto space-y-12">

          {faqGroups.map((group, gi) => (

            <div key={gi}>

              <h2 className="text-2xl font-bold text-text-primary mb-4">
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

        {/* CTA intentionally omitted to match FAQ page spec */}

      </Section>
    </>
  );
}