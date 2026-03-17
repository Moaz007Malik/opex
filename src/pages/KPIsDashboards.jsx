import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { RegisterInterestCTA } from '../components/RegisterInterestCTA';
import { kpiCategories } from '../data/kpis';

const DEFAULT_TAB_ID = 'production';

const TOTAL_KPI_COUNT = kpiCategories.reduce(
  (sum, category) => sum + (category.kpis?.length || 0),
  0
);

const CATEGORY_VISIBILITY_NARRATIVES = {
  production:
    "Most leadership teams only see production issues once output has already missed plan. This category is designed to show, in one view, where capacity is really being gained or lost — across OEE, schedule attainment, throughput, and changeovers — before the month-end pack arrives.",
  quality:
    "Quality problems often show up as complaints and credits, long after the factory could have acted. This category surfaces where defects, rework, and escapes are emerging so leaders can see the commercial risk of quality performance as it develops, not weeks later.",
  'downtime-reliability':
    "Reliability issues are usually only visible after a major breakdown or capacity crisis. This category is designed to make chronic downtime patterns, repeat failures, and maintenance gaps visible early — so leadership can see where reliability is silently eroding performance.",
  'margin-intelligence':
    "Margin erosion is frequently discovered at month-end, disconnected from the operational decisions that caused it. This category helps leadership see how scrap, speed loss, yield drift, and cost variances are shaping cost per unit and margin while there is still time to act.",
  'safety-risk':
    "Safety is often reported as a lagging statistic, not a live risk picture. This category helps leadership see whether observations, near misses, training, and corrective actions are keeping pace with the real risk profile — before an incident forces the conversation.",
  'delivery-service':
    "Service failures usually reach leadership as escalations and lost orders. This category connects OTIF, complaints, lead times, and backlog into one view so leaders can see where delivery risk is building and which customers are likely to feel it first.",
  'inventory-materials':
    "Inventory is often treated as a finance line, not a live operational constraint. This category shows where stock accuracy, WIP, and material availability are creating cash traps or production risk, so leaders can see where inventory is quietly distorting performance.",
  'continuous-improvement':
    "Many CI programmes look busy but are hard to evidence at board level. This category shows whether ideas, projects, and savings are really flowing — turning improvement activity into a visible, quantifiable contribution to performance and culture.",
  'energy-utilities':
    "Energy and utilities spend typically appears as a single cost line. This category breaks it down into intensity, peaks, waste, and savings so leaders can see where operational decisions are driving cost and sustainability outcomes.",
  'workforce-labour':
    "Workforce performance is often discussed in anecdotes rather than structured data. This category helps leadership see how labour availability, skills, and utilisation are affecting throughput, cost, and resilience across shifts and sites.",
  maintenance:
    "Most leadership teams only feel maintenance problems after a major outage or spiralling backlog. This category makes planned vs reactive work, backlog, parts availability, and asset coverage visible — so reliability can be managed proactively, not only after failures.",
  'sustainability-esg':
    "ESG reporting is frequently disconnected from day-to-day operations. This category structures emissions, waste, water, and social metrics so leaders can see whether sustainability progress is genuinely embedded in how the factory runs.",
  'compliance-audit':
    "Compliance risk often sits in static spreadsheets until an audit or inspection. This category surfaces findings, actions, training, and permits so leadership can see whether compliance is improving or drifting before an external party arrives.",
  'customer-commercial':
    "Customer and commercial performance can look healthy in revenue while margin and service quietly erode. This category connects operational metrics to revenue, renewals, and profitability so leaders can see which customers and contracts are truly performing.",
  'financial-performance':
    "Financial performance is usually reviewed at period close, not as a live operational signal. This category helps connect factory performance to EBITDA, cost ratios, and working capital so leadership can see, in one place, how operations are shaping financial outcomes.",
};

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
  <motion.section
  className="py-28 border-b border-border bg-background"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px 0px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="max-w-5xl mx-auto px-6 text-center">

      <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
        KPIs & Dashboards
      </p>

      <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {TOTAL_KPI_COUNT}+ manufacturing KPIs across 12 dashboard areas.
      </h1>

      <p className="text-lg text-text-secondary mb-2">
        The Exec App is being structured around a fixed manufacturing KPI framework —{" "}
        <span className="font-semibold">{TOTAL_KPI_COUNT}+ individual metrics</span> grouped into 12
        dashboard areas, pre-defined for plant, multi-site, and board-level reviews.
      </p>
      <p className="text-sm text-text-secondary mb-6">
        Browse the categories below to see how the KPI framework is structured — and drill into the full
        list of planned KPIs for each area.
      </p>

      <p className="text-sm text-text-secondary mb-8">
        OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots,
        integrations, availability, and pricing may change before general release.
      </p>

      <Button to="/register-interest">
        Register Interest in the Exec App
      </Button>

    </div>
  </motion.section>


  {/* KPI CATEGORY TABS */}
  <Section>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-10">

    {/* KPI CATEGORY SIDEBAR */}
    <div className="space-y-2">

      <h2 className="text-lg font-semibold text-text-primary mb-1">
        KPI Categories
      </h2>
      <p className="text-xs text-text-secondary mb-2">
        Select a category to see its leadership question, representative dashboard view, and the full KPI
        list planned for that area.
      </p>

      {kpiCategories.map(cat => (

        <button
          key={cat.id}
          onClick={() => handleTabChange(cat.id)}
          className={`w-full text-left px-4 py-3 rounded-lg text-sm transition
          ${
            activeTabId === cat.id
              ? 'bg-accent text-white'
              : 'hover:bg-card-bg text-text-secondary'
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

        <h2 className="text-xl font-semibold text-text-primary mb-3">
          Representative dashboard preview
        </h2>

        <p className="text-sm text-text-secondary mb-4">
          This illustrative layout shows how metrics from the selected category
          could be represented within the Exec App.
        </p>

        <Card className="bg-card-bg border border-border rounded-xl p-5">

          <div className="flex justify-between items-center mb-5">

            <div>
              <p className="text-xs text-text-secondary uppercase">
                KPI Category
              </p>

              <p className="font-medium text-text-primary">
                {activeCategory.name}
              </p>
            </div>

            <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
              Illustrative preview
            </span>

          </div>


          {/* KPI CARDS */}
          <div className="grid grid-cols-3 gap-3 mb-4">

            <div className="bg-background/60 rounded-lg p-3">
              <p className="text-xs text-text-secondary">Headline KPI</p>
              <p className="text-lg font-semibold text-text-primary">92.4%</p>
              <p className="text-xs text-success">+3.2 pts vs last week</p>
            </div>

            <div className="bg-background/60 rounded-lg p-3">
              <p className="text-xs text-text-secondary">Supporting KPI</p>
              <p className="text-lg font-semibold text-text-primary">1.8%</p>
              <p className="text-xs text-danger">-0.4 pts vs target</p>
            </div>

            <div className="bg-background/60 rounded-lg p-3">
              <p className="text-xs text-text-secondary">Trend KPI</p>
              <p className="text-lg font-semibold text-text-primary">18.6 hrs</p>
              <p className="text-xs text-success">Improving</p>
            </div>

          </div>

        </Card>

      </div>


      {/* KPI CATEGORY DETAILS */}
      <div>

        <h3 className="text-lg font-semibold text-text-primary mb-1">
          {activeCategory.name}
        </h3>

        <p className="text-sm text-text-secondary mb-3">
          {activeCategory.description}
        </p>

        <p className="text-sm text-text-secondary mb-3">
          {CATEGORY_VISIBILITY_NARRATIVES[activeCategory.id] ||
            'This category is designed to turn a traditionally fragmented data area into a single, structured leadership view.'}
        </p>

        <p className="text-xs text-text-secondary mb-1">
          Full KPI scope for this category —{" "}
          <span className="font-semibold">{activeCategory.kpis.length} planned KPIs</span>, each with a
          structured definition and leadership-relevant view:
        </p>
        <p className="text-[11px] text-text-secondary mb-3">
          Scroll within the list to explore the complete KPI set. Names and definitions may evolve before
          general release.
        </p>


        {/* KPI ACCORDION */}
        <div className="space-y-2 max-h-96 overflow-y-auto">

        {activeCategory.kpis.map((kpi, idx) => (

            <div
              key={idx}
              className="border border-border rounded-lg bg-card-bg"
            >

              <button
                onClick={() =>
                  setExpandedKpiIndex(prev => prev === idx ? null : idx)
                }
                className="w-full flex justify-between items-center px-4 py-3 text-sm hover:bg-background/70"
              >

                <span className="font-medium text-text-primary">
                  {kpi.name}
                </span>

                <span className="text-text-secondary">
                  {expandedKpiIndex === idx ? '−' : '+'}
                </span>

              </button>


              {expandedKpiIndex === idx && (

                <div className="px-4 pb-4 text-sm text-text-secondary">
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
  <RegisterInterestCTA />
  
</>
  );
}
