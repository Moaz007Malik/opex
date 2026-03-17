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
    <title>KPIs & Dashboards — OpEx6 | 130+ Manufacturing KPIs Across 12 Areas</title>
    <meta
      name="description"
      content="Explore the 130+ manufacturing KPIs across 12 dashboard areas that the Exec App is being built around — from Production and Quality to Maintenance, Safety, Margin, and more."
    />
  </Helmet>


  {/* HERO */}
  <section className="py-28 border-b border-black/10 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
        KPIs & Dashboards
      </p>

      <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
        130+ manufacturing KPIs across 12 dashboard areas.
      </h1>

      <p className="text-lg text-black/70 mb-2">
        The Exec App is being structured around a fixed manufacturing KPI framework — 130+ individual metrics grouped into 12 dashboard areas, pre-defined for plant, multi-site, and board-level reviews.
      </p>
      <p className="text-sm text-black/70 mb-6">
        Browse the categories below to see illustrative examples of what is planned for inclusion.
      </p>

      <p className="text-sm text-black/60 mb-8">
        OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots,
        integrations, availability, and pricing may change before general release.
      </p>

      <Button to="/register-interest">
        Register Interest in the Exec App
      </Button>

    </div>
  </section>


  {/* KPI CATEGORY TABS */}
  <Section>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-10">

    {/* KPI CATEGORY SIDEBAR */}
    <div className="space-y-2">

      <h2 className="text-lg font-semibold text-black mb-3">
        KPI Categories
      </h2>

      {kpiCategories.map(cat => (

        <button
          key={cat.id}
          onClick={() => handleTabChange(cat.id)}
          className={`w-full text-left px-4 py-3 rounded-lg text-sm transition
          ${
            activeTabId === cat.id
              ? 'bg-accent text-white'
              : 'hover:bg-gray-100 text-black/70'
          }`}
        >
          {cat.name}
        </button>

      ))}

    </div>


    {/* MAIN CONTENT */}
    <div className="space-y-8">

      {/* DASHBOARD PREVIEW */}
      <div>

        <h2 className="text-xl font-semibold text-black mb-3">
          Representative dashboard preview
        </h2>

        <p className="text-sm text-black/70 mb-4">
          This illustrative layout shows how metrics from the selected category
          could be represented within the Exec App.
        </p>

        <Card className="bg-white border border-black/10 rounded-xl p-5">

          <div className="flex justify-between items-center mb-5">

            <div>
              <p className="text-xs text-black/60 uppercase">
                KPI Category
              </p>

              <p className="font-medium text-black">
                {activeCategory.name}
              </p>
            </div>

            <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-accent">
              Illustrative preview
            </span>

          </div>


          {/* KPI CARDS */}
          <div className="grid grid-cols-3 gap-3 mb-4">

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-black/60">Headline KPI</p>
              <p className="text-lg font-semibold">92.4%</p>
              <p className="text-xs text-green-600">+3.2 pts vs last week</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-black/60">Supporting KPI</p>
              <p className="text-lg font-semibold">1.8%</p>
              <p className="text-xs text-red-600">-0.4 pts vs target</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-black/60">Trend KPI</p>
              <p className="text-lg font-semibold">18.6 hrs</p>
              <p className="text-xs text-green-600">Improving</p>
            </div>

          </div>

        </Card>

      </div>


      {/* KPI CATEGORY DETAILS */}
      <div>

        <h3 className="text-lg font-semibold text-black mb-1">
          {activeCategory.name}
        </h3>

        <p className="text-sm text-black/70 mb-4">
          {activeCategory.description}
        </p>

        <p className="text-xs text-black/60 mb-3">
          Sample KPIs planned for this category — each with a structured definition and leadership-relevant view:
        </p>


        {/* KPI ACCORDION */}
        <div className="space-y-2 max-h-96 overflow-y-auto">

        {activeCategory.kpis.map((kpi, idx) => (

            <div
              key={idx}
              className="border border-black/10 rounded-lg bg-white"
            >

              <button
                onClick={() =>
                  setExpandedKpiIndex(prev => prev === idx ? null : idx)
                }
                className="w-full flex justify-between items-center px-4 py-3 text-sm hover:bg-gray-50"
              >

                <span className="font-medium text-black">
                  {kpi.name}
                </span>

                <span className="text-black/60">
                  {expandedKpiIndex === idx ? '−' : '+'}
                </span>

              </button>


              {expandedKpiIndex === idx && (

                <div className="px-4 pb-4 text-sm text-black/70">
                  {kpi.definition}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</Section>


  {/* CTA */}
  <Section className="text-center">

    <p className="text-xs text-black/60 mb-4 max-w-3xl mx-auto">
      Examples, use cases, and outcome statements are illustrative and do not
      guarantee specific business results.
    </p>

    <h2 className="text-2xl font-bold text-black mb-4">
      Register interest in the Exec App.
    </h2>

    <p className="text-black/70 max-w-2xl mx-auto mb-6">
      Register your interest today to be contacted ahead of launch and receive
      updates as KPI categories and dashboards are finalised.
    </p>

    <Button to="/register-interest">
      Register Interest in the Exec App
    </Button>

  </Section>

</>
  );
}
