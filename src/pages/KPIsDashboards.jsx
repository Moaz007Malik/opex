import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
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
          <p className="text-sm text-text-secondary mb-4">
            OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots, integrations, availability, and pricing may change before general release.
          </p>
          <Button to="/register-interest">
            Register Interest in the Exec App
          </Button>
        </div>
      </section>

      {/* Section 3.2 — KPI categories overview */}
      <Section className="bg-secondary/50">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Structured KPI categories for manufacturing operations.
        </h2>
        <p className="text-text-secondary max-w-3xl mb-6">
          The Exec App is being built around a structured KPI framework covering production, quality, downtime, margin, safety, and more. Each category groups related metrics so leadership can see patterns without scrolling through unstructured lists.
        </p>
        <div className="flex flex-wrap gap-2">
          {kpiCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleTabChange(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeTabId === cat.id
                  ? 'bg-accent text-white border-accent'
                  : 'bg-transparent text-text-secondary border-border hover:border-accent hover:text-text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Section 3.3 — Representative dashboard and category detail */}
      <Section>
        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Representative dashboard preview.
            </h2>
            <p className="text-text-secondary text-sm mb-4 max-w-xl">
              This illustrative layout shows how metrics from the selected category could be represented within the Exec App. Exact visuals and layouts may change before general release.
            </p>
            <Card className="bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-xl shadow-black/40">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-widest mb-1">
                    KPI Category
                  </p>
                  <p className="text-sm font-medium text-text-primary">
                    {activeCategory.name}
                  </p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-accent/10 text-accent">
                  Illustrative preview
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="rounded-xl bg-slate-900/70 border border-slate-700/80 p-3">
                  <p className="text-[11px] text-text-secondary mb-1">Headline KPI</p>
                  <p className="text-xl font-semibold text-text-primary">92.4%</p>
                  <p className="text-[11px] text-emerald-400 mt-1">+3.2 pts vs last week</p>
                </div>
                <div className="rounded-xl bg-slate-900/70 border border-slate-700/80 p-3">
                  <p className="text-[11px] text-text-secondary mb-1">Supporting KPI</p>
                  <p className="text-xl font-semibold text-text-primary">1.8%</p>
                  <p className="text-[11px] text-red-400 mt-1">-0.4 pts vs target</p>
                </div>
                <div className="rounded-xl bg-slate-900/70 border border-slate-700/80 p-3">
                  <p className="text-[11px] text-text-secondary mb-1">Trend KPI</p>
                  <p className="text-xl font-semibold text-text-primary">18.6 hrs</p>
                  <p className="text-[11px] text-emerald-400 mt-1">Improving</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                <div className="h-24 rounded-xl bg-slate-900/70 border border-slate-700/80 flex items-center justify-center">
                  <span className="text-[11px] text-text-secondary text-center px-4">
                    Trend and breakdown charts for key KPIs in {activeCategory.name}.
                  </span>
                </div>
                <div className="h-24 rounded-xl bg-slate-900/70 border border-slate-700/80 flex items-center justify-center">
                  <span className="text-[11px] text-text-secondary text-center px-4">
                    Site and line comparison views to highlight where performance diverges.
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-2 mt-1">
                <p className="text-[10px] text-text-secondary">
                  Visuals are illustrative only and may change before general release.
                </p>
                <p className="text-[10px] text-text-secondary">
                  Any AI-enabled insights described are intended to support human decision-making and are not a substitute for human review, operational judgment, or formal compliance processes.
                </p>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              {activeCategory.name}
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              {activeCategory.description}
            </p>
            <p className="text-xs text-text-secondary mb-3">
              Sample KPIs planned for this category:
            </p>
            <div className="space-y-2">
              {activeCategory.kpis.slice(0, 6).map((kpi, idx) => (
                <KpiAccordionItem
                  key={idx}
                  name={kpi.name}
                  definition={kpi.definition}
                  isOpen={expandedKpiIndex === idx}
                  onToggle={() =>
                    setExpandedKpiIndex((prev) => (prev === idx ? null : idx))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3.4 — Results disclaimer and final CTA */}
      <Section className="bg-secondary/50 text-center">
        <p className="text-[11px] text-text-secondary max-w-3xl mx-auto mb-4">
          Examples, use cases, and outcome statements are illustrative and do not guarantee specific business results.
        </p>
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Register interest in the Exec App.
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-6">
          Register your interest today to be contacted ahead of launch and receive updates as KPI categories and dashboards are finalised.
        </p>
        <Button to="/register-interest">
          Register Interest in the Exec App
        </Button>
      </Section>
    </>
  );
}
