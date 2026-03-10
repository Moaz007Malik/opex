import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { kpiCategories } from '../data/kpis';

const DEFAULT_TAB_ID = 'production';

function KpiAccordionItem({ name, definition, isOpen, onToggle }) {
  return (
    <div className="border border-slate-700 rounded-lg bg-card-bg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-medium text-text-primary">{name}</span>
        <span className="shrink-0 text-slate-400">
          <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <p className="text-text-secondary text-sm">{definition}</p>
        </div>
      )}
    </div>
  );
}

export function KPIsDashboards() {
  const [activeTabId, setActiveTabId] = useState(DEFAULT_TAB_ID);
  const [expandedKpiIndex, setExpandedKpiIndex] = useState(null);

  const activeCategory = kpiCategories.find((c) => c.id === activeTabId) || kpiCategories[0];

  const handleTabChange = (id) => {
    setActiveTabId(id);
    setExpandedKpiIndex(null);
  };

  return (
    <>
      <Helmet>
        <title>KPIs & Dashboards — OpEx6 | Explore the KPI Framework</title>
        <meta name="description" content="The Exec App is structured around 15 KPI categories and over 100 metrics. Explore Production, Quality, Downtime, Margin, Safety, and more." />
      </Helmet>

      {/* Section 3.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">KPIs & Dashboards</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Explore the KPI Framework Built Into the Exec App.
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            The Exec App is structured around 15 KPI categories and over 100 individual metrics, pre-built and ready to configure. Browse the categories below to see what is planned for inclusion.
          </p>
          <Button to="/register-interest">Register Interest</Button>
        </div>
      </section>

      {/* Section 3.2 — Interactive KPI Explorer */}
      <Section className="bg-secondary/50">
        <h2 className="sr-only">KPI categories</h2>

        {/* Tab / pill navigation */}
        <div className="overflow-x-auto pb-4 -mx-1">
          <div className="flex gap-2 min-w-max px-1">
            {kpiCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleTabChange(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTabId === cat.id
                    ? 'bg-accent text-white'
                    : 'bg-slate-800 text-text-secondary hover:text-text-primary hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected category content */}
        <div className="mt-8">
          <p className="text-text-secondary mb-6 max-w-3xl">{activeCategory.description}</p>
          <div className="space-y-2">
            {activeCategory.kpis.map((kpi, idx) => (
              <KpiAccordionItem
                key={idx}
                name={kpi.name}
                definition={kpi.definition}
                isOpen={expandedKpiIndex === idx}
                onToggle={() => setExpandedKpiIndex((prev) => (prev === idx ? null : idx))}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <p className="text-text-secondary mb-6">Ready to configure these KPIs for your operations?</p>
        <Button to="/register-interest">Register Interest</Button>
      </Section>
    </>
  );
}
