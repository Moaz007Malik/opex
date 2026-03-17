import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Checkbox } from "../components/ui/Checkbox";
import { HeroDashboardMockup } from "../components/HeroDashboardMockup";
import { FORMSPREE_ENDPOINT } from "../config/formspree";

const SECTORS = [
  {
    name: "Food & Beverage Manufacturing",
    description:
      "Managing shift-level yield, waste, and compliance visibility across multiple lines.",
  },
  {
    name: "Industrial Manufacturing",
    description:
      "Connecting equipment availability, throughput, and maintenance performance.",
  },
  {
    name: "Precision Engineering",
    description:
      "Tracking first-pass quality, rework costs, and OEE across precision production cells.",
  },
  {
    name: "Packaging",
    description:
      "Monitoring line speed, changeover efficiency, and material waste in high-volume environments.",
  },
  {
    name: "Process Manufacturing",
    description:
      "Providing leadership with margin, energy, and output visibility across continuous process operations.",
  },
  {
    name: "Chemicals & Materials",
    description:
      "Supporting safety, compliance, and production performance reporting for regulated environments.",
  },
];

const PROBLEM_SOLUTION = [
  {
    challenge:
      "Leaders rely on last week's spreadsheet to understand today's performance",
    solution:
      "A structured KPI dashboard framework designed to surface performance data in a consistent, accessible format",
  },
  {
    challenge:
      "Plant managers spend significant time compiling data from multiple disconnected systems",
    solution:
      "A single platform designed to draw operational data together across production, quality, downtime, and more",
  },
  {
    challenge:
      "Downtime events are often only visible after the damage is done",
    solution:
      "Downtime & Reliability dashboards designed to help leadership identify patterns and recurring issues",
  },
  {
    challenge: "OEE calculations are inconsistent and disputed across teams",
    solution:
      "Standardised OEE, Availability, Performance, and Quality metrics — structured so every team reads from the same framework",
  },
  {
    challenge: "Safety and compliance reporting is manual and reactive",
    solution:
      "Safety & Risk dashboards designed to support structured, consistent safety performance visibility",
  },
  {
    challenge:
      "Margin pressure goes unnoticed until month-end finance reporting",
    solution:
      "Margin Intelligence dashboards intended to connect operational decisions to cost and profitability data",
  },
];

const FEATURE_CARDS = [
  {
    title: "Structured KPI Dashboards",
    icon: "chart",
    copy: "Track every metric that matters — OEE, throughput, yield, margin, downtime, safety — within a single structured dashboard framework. Designed to give leadership consistent, accessible operational visibility.",
  },
  {
    title: "15 KPI Categories, 100+ Metrics",
    icon: "grid",
    copy: "From Production and Quality to Sustainability and Commercial Performance, the Exec App is structured to support every dimension of operational intelligence your leadership team needs.",
  },
  {
    title: "Exportable Operational Reporting",
    icon: "document",
    copy: "Built-in reporting tools designed to support structured operational reviews. Export your KPI data in formats suitable for leadership and board reporting.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    title: "Connect",
    body: "The Exec App is designed to integrate with your existing ERP, MES, and data systems — including SAP, Oracle, Infor, Epicor, and more. Integration scope and timelines depend on your existing infrastructure.",
  },
  {
    title: "Configure",
    body: "Select your KPI categories and configure your dashboards to reflect your operations, your sites, and your reporting structure.",
  },
  {
    title: "Command",
    body: "Your executive team gains a structured, unified operational intelligence view across the KPI areas most important to your business.",
  },
];

const LEADERSHIP_CHALLENGES = [
  {
    statement:
      "We have reports, but by the time I see them the week has moved on.",
    sector: "Food Manufacturing",
  },
  {
    statement:
      "Each site gives me different numbers. I can never get a consistent picture.",
    sector: "Precision Engineering",
  },
  {
    statement:
      "I know we have a downtime problem — I just can't quantify it quickly enough to act.",
    sector: "Industrial Manufacturing",
  },
  {
    statement:
      "Our CI programme is active but I can't easily show the board what it's delivering.",
    sector: "Process Manufacturing",
  },
  {
    statement:
      "Safety data is tracked locally. I don't have a group-level view.",
    sector: "Chemicals & Materials",
  },
  {
    statement:
      "Margin is eroding and we can't pinpoint exactly where it's happening.",
    sector: "Packaging",
  },
];

const INTEGRATION_ITEMS = [
  {
    name: "SAP",
    type: "image",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  },
  { name: "Oracle", type: "image", src: "/images/oracle.png" },
  { name: "Power BI", type: "image", src: "/images/power-bi.png" },
  {
    name: "Microsoft Dynamics 365",
    type: "image",
    src: "https://www.endeavoursolutions.ca/wp-content/uploads/2023/01/Dynamics-365-CRM-Logo.png",
  },
  {
    name: "Infor",
    type: "image",
    src: "https://mma.prnewswire.com/media/526907/Infor_Logo.jpg?p=twitter",
  },
  {
    name: "Epicor",
    type: "image",
    src: "https://www.inserito.com/wp-content/uploads/2020/09/epicor.png",
  },
  {
    name: "Rockwell Automation",
    type: "image",
    src: "https://eecoonline.com/media/cache/attachment/filter/original/491cfcb01a98f733dca1e9cbf0bc5220/1857075/6902f0ddae531027571471.png",
  },
  {
    name: "Siemens MindSphere",
    type: "image",
    src: "https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2021/03/dreiform_siemens_foyer_rohrdamm_keyvisual_mindsphere-1100x200.jpg",
  },
  {
    name: "Ignition by Inductive Automation",
    type: "image",
    src: "https://sandalwood.com/wp-content/uploads/2022/12/Ignition_logo.png",
  },
  {
    name: "Wonderware",
    type: "image",
    src: "https://static.wixstatic.com/media/65074b_69427804dcbc4676a93894ed146260e9~mv2.png/v1/fill/w_270,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Wonderware%20Logo_edited.png",
  },
  {
    name: "OSIsoft PI",
    type: "image",
    src: "https://www.adlinktech.com/eDM/OSIsoft-Solutions/img/logo_OSIsoft.png",
  },
  {
    name: "Aveva",
    type: "image",
    src: "https://www.ict.eu/sites/corporate/files/images/AVEVA_logo_800x295%20copy.png",
  },
  {
    name: "Honeywell Forge",
    type: "image",
    src: "https://www.iisf.ie/files/UserFiles/cyber-security-news/2022/HF_Main_Lockup_Black_Text.png",
  },
];

function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    robot: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.robot) return;
    setLoading(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          _subject: "Homepage Hero — Register interest",
          source: "homepage_hero",
        }),
      });
      setSubmitted(true);
    } catch (_) {
      setLoading(false);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-black/10 rounded-xl p-6 text-center shadow-sm">
        <p className="text-black font-medium">Thank you. You're on the list.</p>
        <p className="text-black/70 text-sm mt-1">
          We'll be in touch ahead of launch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black/10 rounded-xl p-6 space-y-4 max-w-md mx-auto shadow-sm"
    >
      <Input
        label="Full Name"
        required
        value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        placeholder="Your full name"
      />
      <Input
        label="Work Email"
        type="email"
        required
        value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        placeholder="you@company.com"
      />
      <Input
        label="Company Name"
        required
        value={form.company}
        onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
        placeholder="Your company"
      />
      <Checkbox
        id="hero-robot"
        label="I am not a robot"
        checked={form.robot}
        onChange={(v) => setForm((p) => ({ ...p, robot: v }))}
        required
      />
      <Button
        type="submit"
        disabled={loading}
        className="w-full justify-center"
      >
        {loading ? "Sending…" : "Register your interest in the Exec App"}
      </Button>
    </form>
  );
}

export function Homepage() {
  return (
    <>
      <Helmet>
        <title>
          OpEx6 — Operational Intelligence That Executives Actually Use
        </title>
        <meta
          name="description"
          content="The command centre manufacturing leaders have been looking for. Exec App by OpEx6 — structured KPIs, one platform. Register your interest for early access."
        />
      </Helmet>

      {/* Section 1.1 — Hero */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Top header */}
          <div className="max-w-3xl mb-14">
            <p className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Operational intelligence for manufacturing leaders
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight mb-6">
              One executive view across{" "}
              <span className="text-accent">130+ manufacturing KPIs</span>
            </h1>

            <p className="text-lg text-black/70 leading-relaxed">
              Replace fragmented reports, spreadsheets, and lagging data with a
              single, structured operating layer designed for plant, multi-site,
              and board-level decisions.
            </p>
          </div>

          {/* Main layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT — Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 to-transparent blur-2xl rounded-3xl" />
              <div className="relative">
                <HeroDashboardMockup />
              </div>

              {/* Trust strip */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-black/60">
                <span>130+ KPIs</span>
                <span>12 dashboard areas</span>
                <span>Multi-site ready</span>
                <span>Executive reporting layer</span>
              </div>
            </div>

            {/* RIGHT — Conversion */}
            <div className="relative">
              <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-lg">
                {/* Card header */}
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Register for early access
                  </h3>
                  <p className="text-sm text-black/70">
                    Get priority access and early pricing before public release.
                  </p>
                </div>

                {/* Offer highlight */}
                <div className="mb-5 rounded-lg bg-highlight/15 text-highlight text-sm px-4 py-3 font-medium">
                  Early access: £50 for 50 credits + 25 free credits at launch
                </div>

                {/* Form */}
                <HeroForm />

                {/* Footer */}
                <p className="text-[11px] text-black/50 mt-5 leading-relaxed">
                  Pre-launch product. Features, integrations, and pricing may
                  evolve before general release.
                </p>
              </div>

              {/* Secondary CTA */}
              <div className="mt-4 text-center">
                <Link
                  to="/exec-app"
                  className="text-sm text-black/70 underline-offset-4 hover:underline"
                >
                  Learn more about the Exec App →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1.2 — Product Direction Stats Bar */}
      <section className="py-20 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section intro */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              Product structure
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold text-black">
              Built as a complete operational layer — not a collection of
              dashboards
            </h2>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <p className="text-3xl font-semibold text-black mb-2">12</p>
              <p className="text-sm text-black/70 leading-relaxed">
                Structured dashboard areas aligned to executive, plant, and
                multi-site reviews
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <p className="text-3xl font-semibold text-black mb-2">130+</p>
              <p className="text-sm text-black/70 leading-relaxed">
                Manufacturing KPIs across production, quality, maintenance,
                safety, and margin
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <p className="text-3xl font-semibold text-black mb-2">1</p>
              <p className="text-sm text-black/70 leading-relaxed">
                Unified operational intelligence layer — not another generic BI
                workspace
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA focused on early access */}
      <section className="py-24 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-5 leading-tight">
            Early access to the Exec App is limited
          </h2>

          {/* Subtext */}
          <p className="text-black/70 text-lg mb-6 leading-relaxed">
            We’re onboarding a small number of manufacturing sites pre-launch.
            Register now to secure priority access and early pricing.
          </p>

          {/* Offer highlight */}
          <div className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-highlight/15 text-highlight font-medium text-sm mb-8">
            £50 for 50 credits + 25 free credits at launch
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/register-interest" className="px-6 py-3 text-base">
              Register for early access
            </Button>

            <Link
              to="/exec-app"
              className="text-sm text-black/70 underline-offset-4 hover:underline flex items-center justify-center"
            >
              Learn more →
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-black/50 mt-6 max-w-2xl mx-auto leading-relaxed">
            No payment required at this stage. Final features, pricing, and
            availability may change before general release.
          </p>
        </div>
      </section>

      {/* Section 1.3 — Sectors We Focus On */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              Who it's for
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-black">
              Built for complex manufacturing environments
            </h2>
            <p className="text-black/70 mt-3 max-w-2xl mx-auto">
              Designed for operations where margin, throughput, and cost control
              must be understood in real time.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((s, i) => (
              <div
                key={i}
                className="group bg-white border border-black/10 rounded-2xl p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-black mb-2">
                  {s.name}
                </h3>
                <p className="text-black/70 text-sm leading-relaxed">
                  {s.description}
                </p>

                {/* subtle accent line */}
                <div className="mt-4 h-[2px] w-0 bg-accent group-hover:w-10 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 1.3b — Leader Questions Problem Section */}
      <section className="py-28 bg-black text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_70%)]" />

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
              Reality check
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight max-w-3xl mx-auto">
              Most manufacturing leaders still cannot answer these questions
              <span className="text-white/60"> fast enough</span>
            </h2>
          </div>

          {/* Questions */}
          <div className="space-y-5 mb-14">
            {[
              {
                q: "What is the true cost per unit of your top product right now?",
                highlight: "true cost per unit",
              },
              {
                q: "How much cash is trapped in WIP across your factory floor?",
                highlight: "cash trapped in WIP",
              },
              {
                q: "Which products look successful on volume but are quietly losing margin?",
                highlight: "losing margin",
              },
              {
                q: "Where is downtime eroding contribution without financial visibility?",
                highlight: "downtime eroding contribution",
              },
              {
                q: "If input costs moved next month, how quickly would leadership see it?",
                highlight: "how quickly",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition"
              >
                {/* Number */}
                <div className="text-white/40 font-semibold text-sm w-6">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.q.split(item.highlight).map((part, index, arr) => (
                    <>
                      {part}
                      {index < arr.length - 1 && (
                        <span className="text-white font-medium">
                          {item.highlight}
                        </span>
                      )}
                    </>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

          {/* Closing */}
          <p className="text-center text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
            OpEx6 is being built to replace fragmented visibility with a
            structured, consistent operating layer — so these questions can be
            answered in minutes, not weeks.
          </p>
        </div>
      </section>

      {/* Section 1.3c — Hidden Cost Leakage */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              Where it breaks
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-black">
              Where margin and cash actually disappear
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "Unplanned downtime",
                desc: "Short stoppages repeated over time become unrecovered cost and lost output.",
              },
              {
                title: "Scrap and rework",
                desc: "What looks manageable operationally becomes commercially material at scale.",
              },
              {
                title: "Outdated product costing",
                desc: "Old assumptions distort real-time margin visibility.",
              },
              {
                title: "Cash trapped in WIP",
                desc: "Production activity does not equal cash control.",
              },
              {
                title: "Budgets vs factory reality",
                desc: "Plans that the factory was never equipped to deliver.",
              },
              {
                title: "Operations vs finance disconnect",
                desc: "Different realities create delayed or incorrect decisions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <p className="text-center text-black/70 text-sm max-w-3xl mx-auto">
            OpEx6 is being built to expose hidden cost leakage before it becomes
            accepted normality.
          </p>
        </div>
      </Section>

      {/* Section 1.4 — Problem / Solution Table */}
      <Section className="bg-white">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            Why operational intelligence matters
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-black">
            The visibility gap manufacturing leaders actually face
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          {PROBLEM_SOLUTION.map((row, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-6 items-start bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Problem */}
              <div>
                <p className="text-xs uppercase text-black/40 mb-2">
                  Challenge
                </p>
                <p className="text-black/80 text-sm leading-relaxed">
                  {row.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-xs uppercase text-accent mb-2">
                  Exec App approach
                </p>
                <p className="text-black text-sm leading-relaxed font-medium">
                  {row.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 1.4b — Why not just use BI tools? */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
              This isn’t another BI tool
            </h2>
            <p className="text-white/60 mt-4 text-sm">
              Power BI, Tableau, and spreadsheets are flexible — but they leave
              structure, consistency, and interpretation entirely up to each
              team.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h3 className="font-semibold text-white mb-3">
                Pre-structured, not blank
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Built as a manufacturing-specific layer with 130+ KPIs and 12
                structured dashboard areas — not an empty canvas requiring
                setup.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h3 className="font-semibold text-white mb-3">
                Consistent KPI definitions
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Every KPI follows a defined formula, unit, and structure across
                sites — ensuring teams operate from the same language.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h3 className="font-semibold text-white mb-3">
                Operational → financial linkage
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Connect downtime, scrap, and variability directly to margin and
                cash impact — in views designed for leadership decisions.
              </p>
            </div>
          </div>

          {/* Closing */}
          <p className="text-center text-white/50 text-xs max-w-3xl mx-auto">
            OpEx6 is currently in pre-launch. Features, scope, and visuals are
            illustrative and may evolve before general release.
          </p>
        </div>
      </section>

      {/* Section 1.5 — Product Feature Overview (3 cards) */}
      <Section className="bg-white">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            What the Exec App delivers
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-black leading-tight">
            Built for manufacturing. Designed for decision-making.
          </h2>
          <p className="text-black/70 mt-4 text-sm">
            A structured operational intelligence layer — not just dashboards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURE_CARDS.map((card, i) => (
            <div
              key={i}
              className="group relative bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent/60 to-transparent rounded-t-2xl" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-105 transition">
                {card.icon === "chart" && (
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                )}
                {card.icon === "grid" && (
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                )}
                {card.icon === "document" && (
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-black mb-2">
                {card.title}
              </h3>

              <p className="text-black/70 text-sm leading-relaxed">
                {card.copy}
              </p>

              {/* Bottom subtle indicator */}
              <div className="mt-6 h-[2px] w-0 bg-accent group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </Section>

      {/* Section 1.6 — How It Works (3 Steps) */}
      <Section className="bg-white">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            How it works
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-black leading-tight">
            Structured for deployment in weeks, not months
          </h2>
          <p className="text-black/70 text-sm mt-4">
            A defined rollout approach — not an open-ended BI implementation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-black/10" />

          <div className="grid md:grid-cols-3 gap-10 relative">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div key={i} className="text-center relative">
                {/* Step number */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-black mb-2">
                  {step.title}
                </h3>

                <p className="text-black/70 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button to="/how-it-works" className="px-6 py-3">
            Explore the full deployment approach
          </Button>
        </div>
      </Section>

      {/* Section 1.7 — Why Leadership Teams Look for This */}
      <Section className="bg-white">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black leading-tight">
            What typically triggers the search for operational intelligence
          </h2>
          <p className="text-black/70 text-sm mt-4">
            These are the moments where visibility gaps become impossible to
            ignore.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {LEADERSHIP_CHALLENGES.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Quote */}
              <p className="text-black/80 text-sm leading-relaxed mb-5">
                “{c.statement}”
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-black/50">
                <span className="uppercase tracking-wide text-accent font-medium">
                  {c.sector}
                </span>
                <span>Operational leadership</span>
              </div>

              {/* subtle accent */}
              <div className="mt-4 h-[2px] w-0 bg-accent hover:w-10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </Section>

      {/* Section 1.8 — Integration Direction */}
      <Section>
        <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2 text-center">
          Designed to connect with your existing systems
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-8">
          Built to work alongside the tools you already use.
        </h2>
        <div className="overflow-hidden mb-6">
          <div className="flex items-center gap-6 md:gap-10 logo-carousel-track w-[200%] whitespace-nowrap">
            {[1, 2].map((loop) => (
              <div key={loop} className="flex items-center gap-6 md:gap-10">
                {INTEGRATION_ITEMS.map((item) =>
                  item.type === "image" ? (
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
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center space-y-2">
          <p className="text-black/70 text-sm">
            Integration availability and scope depend on implementation. Contact
            us to discuss your systems environment.
          </p>
          <p className="text-black/70 text-sm italic">
            <Link to="/use-cases" className="underline underline-offset-4">
              Explore customer use cases
            </Link>
          </p>
          <p className="text-black/70 text-xs">
            Illustrative customer use cases showing how operational visibility
            can improve margin, cash, and decision speed.
          </p>
          <p className="text-black/70 text-[11px] max-w-3xl mx-auto">
            All third-party names, trade marks, and logos are the property of
            their respective owners and are used for identification purposes
            only.
          </p>
        </div>
      </Section>

      {/* Section 1.9 — Launch Offer CTA Banner */}
      <section className="py-32 relative overflow-hidden bg-white border-y border-blue-100">
        {/* Background accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.08),transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Card */}
          <div className="bg-white border border-black/10 rounded-3xl shadow-xl px-8 py-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-5 leading-tight">
              Ready to register your interest in the Exec App?
            </h2>

            <p className="text-black/70 mb-4 max-w-2xl mx-auto leading-relaxed">
              OpEx6 is preparing to open the Exec App to early users. Register
              your interest now to secure your place on the early access list —
              and eligibility for our pre-launch credit offer.
            </p>

            {/* Offer highlight */}
            <p className="text-highlight font-medium mb-8 text-sm sm:text-base">
              Register interest now to secure eligibility for £50 for 50 credits
              + 25 free credits at launch. Subject to final launch terms.
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <Button
                to="/register-interest"
                className="px-6 py-3 text-base shadow-md hover:shadow-lg transition"
              >
                Register Interest in the Exec App
              </Button>
            </div>

            {/* Footer */}
            <p className="text-black/60 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
              This is a pre-launch registration. No payment is taken at this
              stage. You will be contacted with full details ahead of launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
