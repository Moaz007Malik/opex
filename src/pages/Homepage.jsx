import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import { FORMSPREE_ENDPOINT } from '../config/formspree';

const SECTORS = [
  { name: 'Food & Beverage Manufacturing', description: 'Managing shift-level yield, waste, and compliance visibility across multiple lines.' },
  { name: 'Industrial Manufacturing', description: 'Connecting equipment availability, throughput, and maintenance performance.' },
  { name: 'Precision Engineering', description: 'Tracking first-pass quality, rework costs, and OEE across precision production cells.' },
  { name: 'Packaging', description: 'Monitoring line speed, changeover efficiency, and material waste in high-volume environments.' },
  { name: 'Process Manufacturing', description: 'Providing leadership with margin, energy, and output visibility across continuous process operations.' },
  { name: 'Chemicals & Materials', description: 'Supporting safety, compliance, and production performance reporting for regulated environments.' },
];

const PROBLEM_SOLUTION = [
  { challenge: "Leaders rely on last week's spreadsheet to understand today's performance", solution: 'A structured KPI dashboard framework designed to surface performance data in a consistent, accessible format' },
  { challenge: 'Plant managers spend significant time compiling data from multiple disconnected systems', solution: 'A single platform designed to draw operational data together across production, quality, downtime, and more' },
  { challenge: 'Downtime events are often only visible after the damage is done', solution: 'Downtime & Reliability dashboards designed to help leadership identify patterns and recurring issues' },
  { challenge: 'OEE calculations are inconsistent and disputed across teams', solution: 'Standardised OEE, Availability, Performance, and Quality metrics — structured so every team reads from the same framework' },
  { challenge: 'Safety and compliance reporting is manual and reactive', solution: 'Safety & Risk dashboards designed to support structured, consistent safety performance visibility' },
  { challenge: 'Margin pressure goes unnoticed until month-end finance reporting', solution: 'Margin Intelligence dashboards intended to connect operational decisions to cost and profitability data' },
];

const FEATURE_CARDS = [
  { title: 'Structured KPI Dashboards', icon: 'chart', copy: 'Track every metric that matters — OEE, throughput, yield, margin, downtime, safety — within a single structured dashboard framework. Designed to give leadership consistent, accessible operational visibility.' },
  { title: '15 KPI Categories, 100+ Metrics', icon: 'grid', copy: 'From Production and Quality to Sustainability and Commercial Performance, the Exec App is structured to support every dimension of operational intelligence your leadership team needs.' },
  { title: 'Exportable Operational Reporting', icon: 'document', copy: 'Built-in reporting tools designed to support structured operational reviews. Export your KPI data in formats suitable for leadership and board reporting.' },
];

const HOW_IT_WORKS_STEPS = [
  { title: 'Connect', body: 'The Exec App is designed to integrate with your existing ERP, MES, and data systems — including SAP, Oracle, Infor, Epicor, and more. Integration scope and timelines depend on your existing infrastructure.' },
  { title: 'Configure', body: 'Select your KPI categories and configure your dashboards to reflect your operations, your sites, and your reporting structure.' },
  { title: 'Command', body: 'Your executive team gains a structured, unified operational intelligence view across the KPI areas most important to your business.' },
];

const LEADERSHIP_CHALLENGES = [
  { statement: "We have reports, but by the time I see them the week has moved on.", sector: 'Food Manufacturing' },
  { statement: 'Each site gives me different numbers. I can never get a consistent picture.', sector: 'Precision Engineering' },
  { statement: "I know we have a downtime problem — I just can't quantify it quickly enough to act.", sector: 'Industrial Manufacturing' },
  { statement: "Our CI programme is active but I can't easily show the board what it's delivering.", sector: 'Process Manufacturing' },
  { statement: "Safety data is tracked locally. I don't have a group-level view.", sector: 'Chemicals & Materials' },
  { statement: "Margin is eroding and we can't pinpoint exactly where it's happening.", sector: 'Packaging' },
];

const INTEGRATION_ITEMS = [
  { name: 'SAP', type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
  { name: 'Oracle', type: 'image', src: '/images/oracle.png' },
  { name: 'Power BI', type: 'image', src: '/images/power-bi.png' },
  { name: 'Microsoft Dynamics 365', type: 'image', src: 'https://www.endeavoursolutions.ca/wp-content/uploads/2023/01/Dynamics-365-CRM-Logo.png' },
  { name: 'Infor', type: 'image', src: 'https://mma.prnewswire.com/media/526907/Infor_Logo.jpg?p=twitter' },
  { name: 'Epicor', type: 'image', src: 'https://www.inserito.com/wp-content/uploads/2020/09/epicor.png' },
  { name: 'Rockwell Automation', type: 'image', src: 'https://eecoonline.com/media/cache/attachment/filter/original/491cfcb01a98f733dca1e9cbf0bc5220/1857075/6902f0ddae531027571471.png' },
  { name: 'Siemens MindSphere', type: 'image', src: 'https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2021/03/dreiform_siemens_foyer_rohrdamm_keyvisual_mindsphere-1100x200.jpg' },
  { name: 'Ignition by Inductive Automation', type: 'image', src: 'https://sandalwood.com/wp-content/uploads/2022/12/Ignition_logo.png' },
  { name: 'Wonderware', type: 'image', src: 'https://static.wixstatic.com/media/65074b_69427804dcbc4676a93894ed146260e9~mv2.png/v1/fill/w_270,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Wonderware%20Logo_edited.png' },
  { name: 'OSIsoft PI', type: 'image', src: 'https://www.adlinktech.com/eDM/OSIsoft-Solutions/img/logo_OSIsoft.png' },
  { name: 'Aveva', type: 'image', src: 'https://www.ict.eu/sites/corporate/files/images/AVEVA_logo_800x295%20copy.png' },
  { name: 'Honeywell Forge', type: 'image', src: 'https://www.iisf.ie/files/UserFiles/cyber-security-news/2022/HF_Main_Lockup_Black_Text.png' },
];

function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', robot: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.robot) return;
    setLoading(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          _subject: 'Homepage Hero — Register interest',
          source: 'homepage_hero',
        }),
      });
      setSubmitted(true);
    } catch (_) {
      setLoading(false);
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-black/10 rounded-xl p-6 text-center shadow-sm">
        <p className="text-black font-medium">Thank you. You're on the list.</p>
        <p className="text-black/70 text-sm mt-1">We'll be in touch ahead of launch.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black/10 rounded-xl p-6 space-y-4 max-w-md mx-auto shadow-sm"
    >
      <Input label="Full Name" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Your full name" />
      <Input label="Work Email" type="email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="you@company.com" />
      <Input label="Company Name" required value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} placeholder="Your company" />
      <Checkbox id="hero-robot" label="I am not a robot" checked={form.robot} onChange={(v) => setForm((p) => ({ ...p, robot: v }))} required />
      <Button type="submit" disabled={loading} className="w-full justify-center">
        {loading ? 'Sending…' : 'Register your interest in the Exec App'}
      </Button>
    </form>
  );
}

export function Homepage() {
  return (
    <>
      <Helmet>
        <title>OpEx6 — Operational Intelligence That Executives Actually Use</title>
        <meta name="description" content="The command centre manufacturing leaders have been looking for. Exec App by OpEx6 — structured KPIs, one platform. Register your interest for early access." />
      </Helmet>

      {/* Section 1.1 — Hero */}
      <section className="relative py-24 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Operational intelligence for manufacturing leaders
            </p>
            <p className="text-sm sm:text-base text-black/70 max-w-xl mb-4">
              Most manufacturers still run critical decisions on siloed reports, spreadsheets, and yesterday&apos;s data.
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-hero-lg font-bold text-black mb-6 leading-tight">
              Executive-ready visibility from 130+ manufacturing KPIs.
            </h1>
            <p className="text-lg sm:text-xl text-black/70 max-w-xl mb-8">
              OpEx6 is being built as a structured KPI layer for manufacturing leaders — 130+ KPIs across 12 dashboard areas, designed for plant, multi-site, and boardroom reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
              <Button to="/register-interest">
                Register Interest in the Exec App
              </Button>
              <Link to="/exec-app" className="text-sm text-black/70 underline-offset-4 hover:underline">
                Learn more about the Exec App
              </Link>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-highlight/15 text-highlight mb-4">
              Register interest now to secure eligibility for £50 for 50 credits + 25 free credits at launch.
            </div>
            <p className="text-xs text-black/70 max-w-xl">
              OpEx6 is currently in pre-launch / early-access phase. Product features, screenshots, integrations, availability, and pricing may change before general release.
            </p>
          </div>
          <div className="space-y-6">
            <HeroForm />
          </div>
        </div>
      </section>

      {/* Section 1.2 — Product Direction Stats Bar */}
      <section className="py-16 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-black">12</p>
              <p className="text-black/70 text-sm mt-1">dashboard areas structured for executive and site-level reviews</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-black">130+</p>
              <p className="text-black/70 text-sm mt-1">manufacturing KPIs across production, quality, maintenance, safety, margin, and more</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-black">1</p>
              <p className="text-black/70 text-sm mt-1">operational intelligence layer — not another generic BI workspace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA focused on early access */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Want early access to the Exec App?
          </h2>
          <p className="text-black/70 mb-4">
            OpEx6 is preparing to open the Exec App to a limited number of manufacturing sites on a pre-launch basis.
            Register interest to secure eligibility for 50 credits for £50 + 25 free credits at launch (subject to final terms).
            No payment is taken at this stage.
          </p>
          <Button to="/register-interest">
            Register for early access
          </Button>
        </div>
      </Section>

      {/* Section 1.3 — Sectors We Focus On */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-12">
          Built for operations like yours
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((s, i) => (
            <Card key={i}>
              <h3 className="font-semibold text-lg text-black mb-2">{s.name}</h3>
              <p className="text-black/70 text-sm">{s.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section 1.3b — Leader Questions Problem Section */}
      <Section>
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-8">
          Most manufacturing leaders still cannot answer these questions quickly enough
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          <Card>
            <p className="text-black/70 text-sm">
              What is the true cost per unit of your top product right now? Not last year&apos;s assumption. Today&apos;s material, labour, machine, and overhead reality.
            </p>
          </Card>
          <Card>
            <p className="text-black/70 text-sm">
              How much cash is trapped in WIP across your factory floor? Busy production does not always mean healthy cash flow.
            </p>
          </Card>
          <Card>
            <p className="text-black/70 text-sm">
              Which products look successful on volume but are quietly losing margin? Without structured visibility, weak product economics stay hidden.
            </p>
          </Card>
          <Card>
            <p className="text-black/70 text-sm">
              Where is downtime eroding contribution without being translated into financial impact? Operational losses become commercial losses whether they are measured or not.
            </p>
          </Card>
          <Card>
            <p className="text-black/70 text-sm">
              If input costs moved next month, how quickly would leadership see the impact? Better decisions require faster operational and financial visibility.
            </p>
          </Card>
        </div>
        <p className="text-center text-black/70 text-sm max-w-3xl mx-auto">
          OpEx6 is being built to help manufacturing leaders answer these questions with more structure, consistency, and speed.
        </p>
      </Section>

      {/* Section 1.3c — Hidden Cost Leakage */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-8">
          Where margin and cash often disappear in manufacturing
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="font-semibold text-black mb-2">Unplanned downtime</h3>
            <p className="text-black/70 text-sm">
              Short stoppages repeated over time become unrecovered cost and lost output.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-black mb-2">Scrap and rework</h3>
            <p className="text-black/70 text-sm">
              What looks manageable on the floor can become commercially material at scale.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-black mb-2">Outdated product costing</h3>
            <p className="text-black/70 text-sm">
              Old assumptions on material, labour, machine recovery, and overhead distort current margins.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-black mb-2">Cash trapped in WIP</h3>
            <p className="text-black/70 text-sm">
              Production activity does not equal cash control.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-black mb-2">Budgets disconnected from factory reality</h3>
            <p className="text-black/70 text-sm">
              A spreadsheet can support a target the factory was never equipped to deliver.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-black mb-2">Weak linkage between operations and finance</h3>
            <p className="text-black/70 text-sm">
              If finance and production are working from different realities, leadership decisions will lag.
            </p>
          </Card>
        </div>
        <p className="text-center text-black/70 text-sm max-w-3xl mx-auto">
          OpEx6 is being built to expose hidden cost leakage before it becomes accepted normality.
        </p>
      </Section>

      {/* Section 1.4 — Problem / Solution Table */}
      <Section>
        <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2 text-center">Why Operational Intelligence Matters</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-12">
          The visibility gap manufacturing leaders face.
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-black/10">
                <th className="text-left py-4 px-4 text-black font-semibold">The visibility challenge</th>
                <th className="text-left py-4 px-4 text-black font-semibold">What the Exec App is designed to support</th>
              </tr>
            </thead>
            <tbody>
              {PROBLEM_SOLUTION.map((row, i) => (
                <tr key={i} className="border-b border-black/10">
                  <td className="py-4 px-4 text-black/70 text-sm">{row.challenge}</td>
                  <td className="py-4 px-4 text-black/70 text-sm">{row.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Section 1.4b — Why not just use BI tools? */}
      <Section>
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-8">
          Why not just use Power BI, Tableau, or spreadsheets?
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-6">
          <Card>
            <h3 className="font-semibold text-lg text-black mb-2">Not another blank BI canvas</h3>
            <p className="text-black/70 text-sm">
              BI tools give you charts and workspaces. OpEx6 is being built as a manufacturing-specific operational intelligence layer, with 130+ KPIs and 12 dashboard areas already structured for how plants and leadership actually review performance.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg text-black mb-2">Structured KPI definitions, not ad-hoc formulas</h3>
            <p className="text-black/70 text-sm">
              Each KPI is defined with consistent formulas, units, and views across sites — from OEE and first-pass yield to changeover losses and WIP exposure — so every team is reading from the same operating language.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg text-black mb-2">Operational–commercial linkage out of the box</h3>
            <p className="text-black/70 text-sm">
              Where data allows, the Exec App is being designed to connect downtime, scrap, and schedule volatility to margin and cash impact, in views built for weekly, monthly, and board reviews — not one-off spreadsheets.
            </p>
          </Card>
        </div>
        <p className="text-center text-black/60 text-xs max-w-3xl mx-auto">
          OpEx6 is currently in pre-launch / early-access phase. Screens and scope are illustrative and may change before general release.
        </p>
      </Section>

      {/* Section 1.5 — Product Feature Overview (3 cards) */}
      <Section className="bg-gray-50">
        <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2 text-center">What the Exec App Is Designed to Deliver</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-12">
          Built for manufacturing. Designed for the boardroom.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURE_CARDS.map((card, i) => (
            <Card key={i} className="bg-white border border-black/10 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {card.icon === 'chart' && (
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                )}
                {card.icon === 'grid' && (
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                )}
                {card.icon === 'document' && (
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                )}
              </div>
              <h3 className="font-semibold text-lg text-black mb-2">{card.title}</h3>
              <p className="text-black/70 text-sm">{card.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section 1.6 — How It Works (3 Steps) */}
      <Section>
        <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2 text-center">Structured. Practical. Designed for Fast Deployment.</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-12">
          Structured for deployment in weeks, not months.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center mx-auto mb-4">{i + 1}</div>
              <h3 className="font-semibold text-lg text-black mb-2">{step.title}</h3>
              <p className="text-black/70 text-sm">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button to="/how-it-works">See the full How It Works</Button>
        </div>
      </Section>

      {/* Section 1.7 — Why Leadership Teams Look for This */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-12">
          Common questions that lead manufacturing leaders to operational intelligence platforms.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP_CHALLENGES.map((c, i) => (
            <Card key={i}>
              <p className="text-black/70 text-sm mb-3">&ldquo;{c.statement}&rdquo;</p>
              <p className="text-xs text-accent font-medium uppercase tracking-wider">{c.sector}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section 1.8 — Integration Direction */}
      <Section>
        <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2 text-center">Designed to connect with your existing systems</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-8">
          Built to work alongside the tools you already use.
        </h2>
        <div className="overflow-hidden mb-6">
          <div className="flex items-center gap-6 md:gap-10 logo-carousel-track w-[200%] whitespace-nowrap">
            {[1, 2].map((loop) => (
              <div key={loop} className="flex items-center gap-6 md:gap-10">
                {INTEGRATION_ITEMS.map((item) =>
                  item.type === 'image' ? (
                    <div
                      key={`${loop}-${item.name}`}
                      className="h-10 w-28 md:w-32 flex items-center justify-center shrink-0"
                    >
                      <img
                        src={item.src}
                        alt={item.name}
                        className="max-h-8 max-w-full object-contain grayscale hover:grayscale-0 transition"
                      />
                    </div>
                  ) : (
                    <div
                      key={`${loop}-${item.name}`}
                      className="h-10 w-28 md:w-32 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center shrink-0"
                    >
                      <span className="text-[11px] text-black/70 font-medium">
                        {item.abbr}
                      </span>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center space-y-2">
          <p className="text-black/70 text-sm">
            Integration availability and scope depend on implementation. Contact us to discuss your systems environment.
          </p>
          <p className="text-black/70 text-sm italic">
            <Link to="/use-cases" className="underline underline-offset-4">
              Explore customer use cases
            </Link>
          </p>
          <p className="text-black/70 text-xs">
            Illustrative customer use cases showing how operational visibility can improve margin, cash, and decision speed.
          </p>
          <p className="text-black/70 text-[11px] max-w-3xl mx-auto">
            All third-party names, trade marks, and logos are the property of their respective owners and are used for identification purposes only.
          </p>
        </div>
      </Section>

      {/* Section 1.9 — Launch Offer CTA Banner */}
      <section className="py-28 bg-blue-50 border-y border-blue-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Ready to register your interest in the Exec App?
          </h2>
          <p className="text-black/70 mb-4">
            OpEx6 is preparing to open the Exec App to early users. Register your interest now to secure your place on the early access list — and eligibility for our pre-launch credit offer.
          </p>
          <p className="text-highlight font-medium mb-6">
            Register interest now to secure eligibility for £50 for 50 credits + 25 free credits at launch. Subject to final launch terms.
          </p>
          <Button to="/register-interest" className="mb-4">
            Register Interest in the Exec App
          </Button>
          <p className="text-black/70 text-sm">
            This is a pre-launch registration. No payment is taken at this stage. You will be contacted with full details ahead of launch.
          </p>
        </div>
      </section>
    </>
  );
}
