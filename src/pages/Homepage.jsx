import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Checkbox } from "../components/ui/Checkbox";
import { HeroDashboardMockup } from "../components/HeroDashboardMockup";
import { useForm } from "@formspree/react";
import { FORMSPREE_FORM_ID } from "../config/formspree";

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
  const [formState, handleFormSubmit] = useForm(FORMSPREE_FORM_ID);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    robot: false,
  });

  const onSubmit = (e) => {
    // Keep your existing "not a robot" requirement enforced client-side.
    if (!form.robot) {
      e.preventDefault();
      return;
    }
    return handleFormSubmit(e);
  };

  if (formState.succeeded) {
    return (
      <div className="bg-card-bg border border-border rounded-xl p-6 text-center shadow-sm">
        <p className="text-text-primary font-medium">Thank you. You're on the list.</p>
        <p className="text-text-secondary text-base mt-1">
          We'll be in touch ahead of launch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card-bg border border-border rounded-xl p-6 space-y-4 max-w-md mx-auto shadow-sm"
    >
      <input type="hidden" name="_subject" value="Homepage Hero — Register interest" />
      <input type="hidden" name="source" value="homepage_hero" />

      <Input
        label="Full Name"
        required
        name="name"
        value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        placeholder="Your full name"
      />
      <Input
        label="Work Email"
        type="email"
        required
        name="email"
        value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        placeholder="you@company.com"
      />
      <Input
        label="Company Name"
        required
        name="company"
        value={form.company}
        onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
        placeholder="Your company"
      />
      <Checkbox
        id="hero-robot"
        label="I am not a robot"
        name="robot"
        value="true"
        checked={form.robot}
        onChange={(v) => setForm((p) => ({ ...p, robot: v }))}
        required
      />
      <Button
        type="submit"
        disabled={formState.submitting}
        className="w-full justify-center"
      >
        {formState.submitting ? "Sending…" : "Register your interest in the Exec App"}
      </Button>

      {formState.errors?.length ? (
        <p className="text-danger text-sm mt-2">{String(formState.errors[0])}</p>
      ) : null}
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
      <motion.section
        className="relative py-24 lg:py-32 bg-background overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.15),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6">
          {/* Top header */}
          <div className="max-w-[1400px] mb-14">
            {/* Eyebrow label */}
            <p className="text-accent text-sm sm:text-base font-semibold uppercase tracking-[0.2em] mb-4">
              Manufacturing exec app · Early access
            </p>

            {/* H1 headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-text-primary leading-tight mb-5">
              Operational intelligence leaders can run the business on.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              The Exec App gives manufacturing leaders a ready-made KPI
              framework — consistent views across sites, without rebuilding
              dashboards.
            </p>

            {/* Primary & secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <Button to="/register-interest" className="px-6 py-3 justify-center text-base">
                Register Interest
              </Button>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center justify-center">
                <a
                  href="#objections"
                  className="text-base text-text-secondary underline-offset-4 hover:underline"
                >
                  Why not Power BI/Tableau?
                </a>
                <span className="hidden sm:inline text-text-secondary/40">•</span>
                <Link
                  to="/kpis-dashboards"
                  className="text-base text-text-secondary underline-offset-4 hover:underline"
                >
                  Explore KPIs &amp; Dashboards
                </Link>
              </div>
            </div>

            {/* Quick-scan supporting bullets (moved below CTAs) */}
            <ul className="mt-2 space-y-2 text-base text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>
                  <span className="text-text-primary font-semibold">130+ KPIs</span>{" "}
                  across 12 dashboard areas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>
                  <span className="text-text-primary font-semibold">
                    Standard definitions
                  </span>{" "}
                  so sites stay aligned
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>
                  <span className="text-text-primary font-semibold">
                    Executive reporting layer
                  </span>{" "}
                  for plant, multi-site, and board review
                </span>
              </li>
            </ul>
          </div>

          {/* Main layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT — Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-transparent blur-2xl rounded-3xl" />
              <div className="relative">
                <HeroDashboardMockup />
              </div>

              {/* Trust strip */}
              <div className="mt-6 flex flex-wrap gap-4 text-base text-text-secondary">
                <span>130+ KPIs</span>
                <span>12 dashboard areas</span>
                <span>Multi-site ready</span>
                <span>Executive reporting layer</span>
              </div>
            </div>

            {/* RIGHT — Conversion */}
            <div className="relative">
              <div className="bg-card-bg border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
              {/* Card header */}
              <div className="mb-5">
                {/* Launch offer badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/90 text-slate-900 text-sm font-semibold uppercase tracking-[0.18em] mb-3">
                  Early Access Offer
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-2">
                  Register for early access
                </h3>
                <p className="text-base text-text-secondary">
                  Be first in line for the Exec App launch, with a limited early access offer for manufacturing leadership teams.
                </p>
              </div>

              {/* Offer highlight */}
              <div className="mb-5 rounded-lg bg-highlight/10 text-highlight text-base px-4 py-3 font-medium">
                Early Access Offer: Register now to secure eligibility for £50 for 50 credits + 25 free credits at launch
              </div>

                {/* Form */}
                <HeroForm />

                {/* Footer */}
                <p className="text-sm text-text-secondary mt-5 leading-relaxed">
                  Pre-launch product. Features, integrations, and pricing may
                  evolve before general release.
                </p>
              </div>

              {/* Secondary CTA */}
              <div className="mt-4 text-center">
                <Link
                  to="/exec-app"
                  className="text-base text-text-secondary underline-offset-4 hover:underline"
                >
                  Learn more about the Exec App →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 1.2 — Objection handling (move earlier in scroll) */}
      <motion.section
        id="objections"
        className="py-24 bg-background text-text-primary relative overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%)]" />

        <div className="relative max-w-[1400px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14 max-w-[1400px] mx-auto">
            <p className="text-base uppercase tracking-[0.22em] text-text-secondary mb-3">
              Objection handling
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-text-primary">
              Why not just use Power BI, Tableau, or spreadsheets?
            </h2>
            <p className="text-text-secondary mt-4 text-base leading-relaxed">
              Those tools visualise whatever you build. OpEx6 is a{" "}
              <span className="font-semibold text-text-primary">
                manufacturing-specific operational intelligence layer
              </span>{" "}
              that arrives with the KPI structure, definitions, and leadership views already designed.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card-bg border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent transition">
              <h3 className="font-semibold text-text-primary mb-3">
                A defined KPI system, not a blank canvas
              </h3>
              <p className="text-text-primary text-xl leading-relaxed font-medium">
                Exec App is structured around{" "}
                <span className="font-semibold text-text-primary">
                  130+ KPIs across 12 dashboard areas
                </span>
                , so sites don&apos;t drift into different templates, definitions, and rollups.
              </p>
            </div>

            <div className="bg-card-bg border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent transition">
              <h3 className="font-semibold text-text-primary mb-3">
                Consistency across sites
              </h3>
              <p className="text-text-primary text-xl leading-relaxed font-medium">
                One set of KPI definitions applied everywhere — so OEE, downtime, yield, and margin mean the same thing in every plant.
              </p>
            </div>

            <div className="bg-card-bg border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent transition">
              <h3 className="font-semibold text-text-primary mb-3">
                Built for leaders, not analysts
              </h3>
              <p className="text-text-primary text-xl leading-relaxed font-medium">
                Views are designed for senior ops and finance — connecting performance signals to margin and cash impact without interpreting complex BI workbooks.
              </p>
            </div>
          </div>

          <p className="text-center text-text-primary text-xl lg:text-2xl max-w-[1400px] mx-auto leading-relaxed font-medium">
            OpEx6 is not a replacement for tools like Power BI or Tableau. It sits above them as a structured, manufacturing-specific operating layer focused on leadership decisions.
          </p>
        </div>
      </motion.section>

      {/* Section 1.2b — Built by people who have lived the problem */}
      <Section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              Why we&apos;re building this
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary">
              Built by people who have lived the problem
            </h2>
            <p className="text-text-primary mt-4 max-w-[1400px] mx-auto text-xl lg:text-2xl leading-relaxed font-medium">
              We&apos;ve sat in plant reviews and board packs where the hardest part isn&apos;t charts — it&apos;s agreeing the right number, at the right level, early enough to act.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Too much time assembling reports",
                body: "When leaders spend hours chasing exports and reconciling spreadsheets, the week is already gone.",
              },
              {
                title: "Too many competing versions of truth",
                body: "Different sites, different templates, different formulas — and meetings turn into debates instead of decisions.",
              },
              {
                title: "Too little link to margin and cash",
                body: "Downtime, scrap, and variability only become “real” when finance catches up. Leaders need that linkage earlier.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent transition"
              >
                <h3 className="font-semibold text-text-primary mb-3 text-2xl lg:text-3xl">
                  {item.title}
                </h3>
                <p className="text-text-primary text-xl leading-relaxed font-medium">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 1.2 — Product Direction Stats Bar */}
      <motion.section
        className="py-20 bg-secondary border-y border-border"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section intro */}
          <div className="max-w-[1400px] mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              Product structure
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary leading-tight">
              130+ manufacturing KPIs across 12 dashboard areas — as one
              operational layer
            </h2>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <p className="text-4xl font-semibold text-text-primary mb-3">12</p>
              <p className="text-lg text-text-primary leading-relaxed">
                Structured dashboard areas aligned to executive, plant, and
                multi-site reviews
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <p className="text-4xl font-semibold text-text-primary mb-3">130+</p>
              <p className="text-lg text-text-primary leading-relaxed">
                Manufacturing KPIs across production, quality, maintenance,
                safety, and margin
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <p className="text-4xl font-semibold text-text-primary mb-3">1</p>
              <p className="text-lg text-text-primary leading-relaxed">
                Unified operational intelligence layer — not another generic BI
                workspace
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mid-page CTA focused on early access */}
      <motion.section
        className="py-24 relative overflow-hidden bg-background"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >

        <div className="relative max-w-[1400px] mx-auto px-6 text-center">
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-5 leading-tight">
            Early access to the Exec App is limited
          </h2>

          {/* Subtext */}
          <p className="text-text-secondary text-xl mb-6 leading-relaxed">
            We’re onboarding a small number of manufacturing sites pre-launch.
            Register now to secure priority access and early pricing.
          </p>

          {/* Offer highlight */}
          <div className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-highlight/20 text-highlight font-medium text-base mb-8">
            £50 for 50 credits + 25 free credits at launch
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/register-interest" className="px-6 py-3 text-base">
              Register for early access
            </Button>

            <Link
              to="/exec-app"
              className="text-base text-text-secondary underline-offset-4 hover:underline flex items-center justify-center"
            >
              Learn more →
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-text-secondary mt-6 max-w-[1400px] mx-auto leading-relaxed">
            No payment required at this stage. Final features, pricing, and
            availability may change before general release.
          </p>
        </div>
      </motion.section>

      {/* Section 1.3 — Sectors We Focus On */}
      <Section>
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              Who it's for
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary leading-tight">
              Built for complex manufacturing environments
            </h2>
            <p className="text-text-primary mt-4 max-w-[1400px] mx-auto text-xl leading-relaxed font-medium">
              Designed for operations where margin, throughput, and cost control must be
              understood in real time.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((s, i) => (
              <div
                key={i}
                className="group bg-card-bg border border-border rounded-2xl p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-text-primary mb-2">
                  {s.name}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
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
      <motion.section
        className="py-28 bg-background text-text-primary relative overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(148,163,184,0.25),transparent_70%)]" />

        <div className="relative max-w-[1400px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4 font-semibold">
              Reality check
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight max-w-[1400px] mx-auto text-text-primary">
              Most manufacturing leaders still cannot answer these questions
              <span className="text-text-secondary"> fast enough</span>
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
                className="group flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card-bg/40 hover:bg-card-bg/60 transition"
              >
                {/* Number */}
                <div className="text-text-secondary font-semibold text-base w-6">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <p className="text-text-secondary text-base leading-relaxed">
                  {item.q.split(item.highlight).map((part, index, arr) => (
                    <>
                      {part}
                      {index < arr.length - 1 && (
                        <span className="text-text-primary font-medium">
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
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

          {/* Closing */}
          <p className="text-center text-text-secondary text-base max-w-[1400px] mx-auto leading-relaxed">
            OpEx6 is being built to replace fragmented visibility with a
            structured, consistent operating layer — so these questions can be
            answered in minutes, not weeks.
          </p>
        </div>
      </motion.section>

      {/* Section 1.3c — Hidden Cost Leakage */}
      <Section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              Where it breaks
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary leading-tight">
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
                className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent transition"
              >
                <h3 className="font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <p className="text-center text-text-secondary text-base max-w-[1400px] mx-auto">
            OpEx6 is being built to expose hidden cost leakage before it becomes
            accepted normality.
          </p>
        </div>
      </Section>

      {/* Section 1.4 — Problem / Solution Table */}
      <Section className="bg-background">
        {/* Header */}
        <div className="text-center mb-14 max-w-[1400px] mx-auto">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Why operational intelligence matters
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary leading-tight">
            The visibility gap manufacturing leaders actually face
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-[1400px] mx-auto space-y-6">
          {PROBLEM_SOLUTION.map((row, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-6 items-start bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent transition"
            >
              {/* Problem */}
              <div>
                <p className="text-sm uppercase text-text-secondary mb-2">
                  Challenge
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  {row.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-sm uppercase text-accent mb-2">
                  Exec App approach
                </p>
                <p className="text-text-primary text-base leading-relaxed font-medium">
                  {row.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 1.5 — Product Feature Overview (3 cards) */}
      <Section className="bg-secondary">
        {/* Header */}
        <div className="text-center mb-16 max-w-[1400px] mx-auto">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            What the Exec App delivers
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary leading-tight">
            Built for manufacturing. Designed for decision-making.
          </h2>
          <p className="text-text-primary mt-4 text-xl leading-relaxed font-medium">
            A structured operational intelligence layer — not just dashboards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {FEATURE_CARDS.map((card, i) => (
            <div
              key={i}
              className="group relative bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-accent transition"
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
              <h3 className="font-semibold text-lg text-text-primary mb-2">
                {card.title}
              </h3>

              <p className="text-text-secondary text-base leading-relaxed">
                {card.copy}
              </p>

              {/* Bottom subtle indicator */}
              <div className="mt-6 h-[2px] w-0 bg-accent group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </Section>

      {/* Section 1.6 — How It Works (3 Steps) */}
      <Section className="bg-background">
        {/* Header */}
        <div className="text-center mb-16 max-w-[1400px] mx-auto">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            How it works
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary leading-tight">
            Structured for deployment in weeks, not months
          </h2>
          <p className="text-text-primary text-xl mt-4 leading-relaxed font-medium">
            A defined rollout approach — not an open-ended BI implementation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border/40" />

          <div className="grid md:grid-cols-3 gap-10 relative">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div key={i} className="text-center relative">
                {/* Step number */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-card-bg border border-border shadow-sm flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-text-primary mb-2">
                  {step.title}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed max-w-xs mx-auto">
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
      <Section className="bg-secondary">
        {/* Header */}
        <div className="text-center mb-14 max-w-[1400px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary leading-tight">
            What typically triggers the search for operational intelligence
          </h2>
          <p className="text-text-primary text-xl mt-4 leading-relaxed font-medium">
            These are the moments where visibility gaps become impossible to ignore.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {LEADERSHIP_CHALLENGES.map((c, i) => (
            <div
              key={i}
              className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent transition"
            >
              {/* Quote */}
              <p className="text-text-secondary text-base leading-relaxed mb-5">
                “{c.statement}”
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-text-secondary">
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
      <Section className="bg-background">
        <p className="text-accent text-base font-medium uppercase tracking-widest mb-2 text-center">
          Designed to connect with your existing systems
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-8">
          Built to work alongside the tools you already use.
        </h2>
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {INTEGRATION_ITEMS.map((item) =>
              item.type === "image" ? (
                <div
                  key={item.name}
                  className="h-10 w-28 md:w-32 flex items-center justify-center shrink-0 rounded-lg bg-transparent"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-8 max-w-full object-contain grayscale hover:grayscale-0 transition opacity-85 hover:opacity-100"
                  />
                </div>
              ) : (
                <div
                  key={item.name}
                  className="h-10 w-28 md:w-32 rounded-full bg-card-bg border border-border shadow-sm flex items-center justify-center shrink-0"
                >
                  <span className="text-sm text-text-secondary font-medium">
                    {item.abbr}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="text-center space-y-2">
          <p className="text-text-secondary text-base">
            Integration availability and scope depend on implementation. Contact
            us to discuss your systems environment.
          </p>
          <p className="text-text-secondary text-base italic">
            <Link to="/use-cases" className="underline underline-offset-4">
              Explore customer use cases
            </Link>
          </p>
          <p className="text-text-secondary text-base">
            Illustrative customer use cases showing how operational visibility
            can improve margin, cash, and decision speed.
          </p>
          <p className="text-text-secondary text-sm max-w-[1400px] mx-auto">
            All third-party names, trade marks, and logos are the property of
            their respective owners and are used for identification purposes
            only.
          </p>
        </div>
      </Section>

      {/* Launch offer CTA banner is rendered globally */}
    </>
  );
}
