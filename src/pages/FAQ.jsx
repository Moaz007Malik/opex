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
    <div className="border border-slate-700 rounded-lg bg-card-bg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-medium text-text-primary">{item.q}</span>
        <span className="shrink-0 text-slate-400">
          <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <p className="text-text-secondary text-sm">{formatAnswer(item.a)}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openKey, setOpenKey] = useState(null); // 'groupIndex-itemIndex'

  return (
    <>
      <Helmet>
        <title>FAQ — OpEx6 | Frequently Asked Questions</title>
        <meta name="description" content="Frequently asked questions about the Exec App, register interest, integrations, and pricing." />
      </Helmet>

      {/* Section 10.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* Section 10.2 — FAQ Accordions (4 groups) */}
      <Section className="bg-secondary/50">
        <div className="max-w-3xl space-y-10">
          {faqGroups.map((group, gi) => (
            <div key={gi}>
              <h2 className="text-xl font-bold text-text-primary mb-4">{group.title}</h2>
              <div className="space-y-2">
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  return (
                    <FaqAccordionItem
                      key={ii}
                      item={item}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey((prev) => (prev === key ? null : key))}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/register-interest">Register Interest</Button>
        </div>
      </Section>
    </>
  );
}
