// No React hooks needed for the static integrations section.
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { HeroDashboardMockup } from "../components/HeroDashboardMockup";
import { EARLY_ACCESS, KPI_FRAMEWORK } from "../config/siteCopy.js";

const SECTORS = [
  {
    title: "Food & Beverage Manufacturing",
    copy: "Managing shift-level output, waste, and compliance visibility across high-volume, time-sensitive operations.",
  },
  {
    title: "Industrial Manufacturing",
    copy: "Connecting equipment availability, throughput, and maintenance performance.",
  },
  {
    title: "Precision Engineering",
    copy: "Tracking first-pass quality, setup costs, and OEE across complex precision production environments.",
  },
  {
    title: "Packaging",
    copy: "Monitoring line speed, changeover efficiency, and material waste in high-volume production environments.",
  },
  {
    title: "Process Manufacturing",
    copy: "Providing leadership with output, energy, and continuous process performance reporting for regulated environments.",
  },
  {
    title: "Chemicals & Materials",
    copy: "Supporting quality, compliance, and production performance reporting for regulated environments.",
  },
];

const COSTLY_PROBLEMS = [
  {
    title: "Downtime is costing more than anyone can prove",
    copy: "Machine failures, unplanned stops, and slow recovery times are eroding output every week. But without structured visibility, leadership cannot see the true cost, the frequency, or the pattern — until it is already too late.",
  },
  {
    title: "Margins are being eroded and nobody can explain exactly why",
    copy: "Scrap, rework, overruns, inefficiency, and excess inventory are all eating into contribution. The numbers exist somewhere, but they are scattered across departments and nobody has connected them into one clear financial view.",
  },
  {
    title: "Quality problems surface too late and too slowly",
    copy: "Defects, non-conformances, and customer complaints often reach leadership well after the damage has been done. A structured quality view helps leadership see patterns before they become crises.",
  },
  {
    title: "Supply chain and operational risk is invisible until it hits",
    copy: "Supplier delays, inventory gaps, scheduling instability, and delivery failures create downstream cost and uncertainty. Leadership needs to see that risk early, not when it has already become a customer problem.",
  },
  {
    title: "Capital decisions are made without operational grounding",
    copy: "CAPEX, capacity investment, and operational strategy decisions are only as good as the data behind them. When the operational picture is fragmented, investment decisions carry more risk than they should.",
  },
  {
    title: "Leadership teams argue about numbers instead of acting on them",
    copy: "When finance, operations, and plant leadership all have different versions of performance, the conversation stays stuck on the data rather than moving to the decision. OpEx6 is built to give leadership one shared operating reality.",
  },
];

const MARGIN_CASH = [
  {
    title: "Unplanned downtime",
    copy: "Short stoppages repeated over time become unrecovered cost and lost output.",
  },
  {
    title: "Scrap and rework",
    copy: "What looks manageable on the floor can become commercially material at scale.",
  },
  {
    title: "Outdated product costing",
    copy: "Old assumptions on material, labour, machine recovery, and overhead distort current margins.",
  },
  {
    title: "Cash trapped in WIP",
    copy: "Production activity does not equal cash control.",
  },
  {
    title: "Budgets disconnected from factory reality",
    copy: "A spreadsheet can support a target the factory was never equipped to deliver.",
  },
  {
    title: "Weak linkage between operations and finance",
    copy: "If finance and production are working from different realities, leadership decisions will lag.",
  },
];

const VISIBILITY_GAP_ROWS = [
  {
    challenge:
      "Leaders rely on last week's spreadsheet to understand today's performance.",
    support:
      "A structured KPI dashboard framework designed to surface performance data in a consistent, accessible format.",
  },
  {
    challenge:
      "Plant managers spend significant time compiling data from multiple disconnected systems.",
    support:
      "A single platform designed to show operations data together across production, quality, downtime, and margin.",
  },
  {
    challenge:
      "Downtime events are often only visible after the damage is done.",
    support:
      "Downtime and Reliability dashboards designed to help leadership identify patterns and recurring losses.",
  },
  {
    challenge: "KPI calculations are inconsistent and disputed across teams.",
    support:
      "Predefined OEE, Availability, Performance, and Quality metrics — structured so every team reads the same data.",
  },
  {
    challenge:
      "Margin pressure goes unnoticed until month-end finance reporting.",
    support:
      "Margin Intelligence dashboards designed to connect operational decisions to cost and profitability data.",
  },
];

const GENERIC_BI = [
  {
    title: "Built around manufacturing KPI categories, not blank canvases",
    copy: "Generic BI requires every business to define its own metrics from scratch. OpEx6 is structured around the performance areas manufacturing leaders already care about — production, quality, downtime, reliability, margin, supply chain, safety, and continuous improvement.",
  },
  {
    title: "Designed for executive and board-level review, not analyst use",
    copy: "Most reporting tools are built for people who create reports, not for the people who need to act on them. OpEx6 is designed for the views leadership teams use in weekly, monthly, and board-level conversations.",
  },
  {
    title: "Connects operational performance to commercial impact",
    copy: "Downtime is not just a maintenance problem. Scrap is not just a quality problem. These are margin problems. OpEx6 is built to connect operational signals to cost, contribution, and business impact in a way generic dashboards cannot.",
  },
  {
    title: "One operating language across departments",
    copy: "When operations, finance, and plant leadership all look at the same structured KPI view, conversations change. The argument about whose numbers are right stops. The conversation about what to do next can begin.",
  },
];

const DECISION_MAKING = [
  {
    title: "Structured KPI Dashboards",
    copy: "Track every KPI that matters — production, quality, downtime, safety, margin, and more — in a single, consistently formatted operational intelligence view.",
  },
  {
    title: KPI_FRAMEWORK.CATEGORIES_METRICS_TITLE,
    copy: KPI_FRAMEWORK.CATEGORIES_METRICS_COPY,
  },
  {
    title: "Exportable Operational Reporting",
    copy: "Export your KPI data to structured operational reporting views. Take your data to board meetings, operations reviews, and leadership conversations.",
  },
];

const DEPLOYMENT_STEPS = [
  {
    title: "Connect",
    copy: "Connect the operational systems, files, and reporting inputs that matter most — including ERP, MES, SCADA, and more.",
  },
  {
    title: "Configure",
    copy: "Configure your KPI categories and dashboards to reflect your operations, your sites, and your reporting cadence.",
  },
  {
    title: "Command",
    copy: "Your executive team gets a single, structured operational intelligence view across the KPI areas most important to your business.",
  },
];

const FAQ_QUESTIONS = [
  {
    quote: "We have reports, but by the time I see them the week has moved on.",
    to: "/faq",
  },
  {
    quote:
      "Each site gives me different numbers. I can never make a proper comparison.",
    to: "/faq",
  },
  {
    quote:
      "I know we have a downtime problem — I just can't quantify the business impact.",
    to: "/faq",
  },
  {
    quote:
      "Our CI programme is active but I can't easily show the board what it's delivering.",
    to: "/faq",
  },
  {
    quote:
      "Safety cost is tracked locally, but I don't have a group-wide view.",
    to: "/faq",
  },
  {
    quote:
      "Margin is eroding but we can't pinpoint exactly where it is happening.",
    to: "/faq",
  },
];

const INTEGRATION_CAROUSEL_ITEMS = [
  {
    label: "SAP",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  },
  { label: "Oracle", src: "/images/oracle.png" },
  {
    label: "Infor",
    src: "https://mma.prnewswire.com/media/526907/Infor_Logo.jpg?p=twitter",
  },
  {
    label: "Epicor",
    src: "https://www.inserito.com/wp-content/uploads/2020/09/epicor.png",
  },
  {
    label: "Microsoft Dynamics",
    src: "https://www.endeavoursolutions.ca/wp-content/uploads/2023/01/Dynamics-365-CRM-Logo.png",
  },
  {
    label: "Rockwell Automation",
    src: "https://eecoonline.com/media/cache/attachment/filter/original/491cfcb01a98f733dca1e9cbf0bc5220/1857075/6902f0ddae531027571471.png",
  },
  {
    label: "Siemens MindSphere",
    src: "https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2021/03/dreiform_siemens_foyer_rohrdamm_keyvisual_mindsphere-1100x200.jpg",
  },
  {
    label: "Ignition",
    src: "https://sandalwood.com/wp-content/uploads/2022/12/Ignition_logo.png",
  },
  // Not present in Homepage.jsx' INTEGRATION_ITEMS list; fall back to text.
  {
    label: "ServiceNow",
    src: "https://servicenowbasic.in/wp-content/uploads/2025/03/ServiceNow-Logo.png",
  },
  {
    label: "Smartsheet",
    src: "https://media.licdn.com/dms/image/v2/D560BAQEkCNGen9QogA/company-logo_200_200/company-logo_200_200/0/1688057851137/smartsheet_com_logo?e=2147483647&v=beta&t=RKK30EyTscwoYWKGtVoZTYV-2X3r1kG36kH3MMszz4k",
  },
];

export function HomepageSpec() {
  return (
    <>
      <Helmet>
        <title>
          OpEx6 — Operational Intelligence That Executives Actually Use
        </title>
        <meta
          name="description"
          content="OpEx6 Exec App — structured KPI categories and decision-ready operational visibility. Register for pre-launch early access."
        />
      </Helmet>

      {/* Hero */}
      <motion.section
        className="relative py-24 lg:py-32 bg-background overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <p className="text-accent text-base sm:text-lg font-semibold uppercase tracking-[0.2em] mb-4">
                OPERATIONAL INTELLIGENCE PLATFORM PRE-LAUNCH — REGISTER YOUR
                INTEREST
              </p>

              <div className="inline-flex items-center px-5 py-2 rounded-lg bg-highlight/15 border border-highlight/30 text-highlight text-base font-semibold mb-6">
                {EARLY_ACCESS.HERO_CTA_LINE}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-5">
                The Command Centre Manufacturing Leaders Have Been Looking For.
              </h1>

              <p className="text-xl text-text-primary leading-relaxed mb-6 max-w-[1400px]">
                OpEx6's Exec App is being built to give manufacturing leaders a
                single, structured view of performance, production, quality,
                downtime, margin, safety — all in one place, designed to support
                the decisions that drive operational performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/register-interest" className="justify-center">
                  Register Interest
                </Button>
                <Button
                  to="/kpis-dashboards"
                  variant="secondary"
                  className="justify-center"
                >
                  Explore KPIs &amp; Dashboards
                </Button>
              </div>

              <p className="text-sm text-text-primary mt-4 max-w-[1400px] leading-relaxed">
                OpEx6 is currently in pre-launch / early-access phase. Product
                features, screenshots, integrations, availability, and pricing
                may change before general release.
              </p>
            </div>

            {/* Right */}
            <div>
              <HeroDashboardMockup />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats strip */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border/80 bg-background/35 p-6">
              <p className="text-5xl font-bold text-text-primary mb-2">
                {KPI_FRAMEWORK.DASHBOARD_AREAS_COUNT}
              </p>
              <p className="text-text-primary text-lg leading-relaxed font-semibold">
                KPI Categories — structured across a single dashboard framework
              </p>
            </div>
            <div className="rounded-lg border border-border/80 bg-background/35 p-6">
              <p className="text-5xl font-bold text-text-primary mb-2">
                {KPI_FRAMEWORK.KPI_COUNT_LABEL}
              </p>
              <p className="text-text-primary text-lg leading-relaxed font-semibold">
                Individual KPI metrics — built into the Exec App at launch
              </p>
            </div>
            <div className="rounded-lg border border-border/80 bg-background/35 p-6">
              <p className="text-5xl font-bold text-text-primary mb-2">1</p>
              <p className="text-text-primary text-lg leading-relaxed font-semibold">
                Platform — designed to replace fragmented spreadsheets, reports,
                and disconnected systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for operations like yours */}
      <Section>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Built for complex manufacturing environments.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((s) => (
              <Card key={s.title} className="h-full">
                <h3 className="font-semibold text-xl text-text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-text-primary text-lg leading-relaxed">
                  {s.copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* The problems that cost manufacturers the most */}
      <Section className="bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Most manufacturing leaders still cannot answer these questions
              fast enough.
            </h2>
            <p className="text-text-primary text-xl mt-5 max-w-[1400px] mx-auto leading-relaxed">
              Most manufacturing businesses run on fragmented information.
              Operations has one view, finance has another, and plant managers
              are working from spreadsheets and gut feel. By the time a clear
              picture reaches the executive team, the losses have already
              happened.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COSTLY_PROBLEMS.map((c) => (
              <Card key={c.title} className="h-full">
                <h3 className="font-semibold text-xl text-text-primary mb-2">
                  {c.title}:
                </h3>
                <p className="text-text-primary text-lg leading-relaxed">
                  {c.copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Where margin and cash actually disappear */}
      <Section>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Where margin and cash actually disappear
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARGIN_CASH.map((m) => (
              <Card key={m.title}>
                <h3 className="font-semibold text-xl text-text-primary mb-2">
                  {m.title}:
                </h3>
                <p className="text-text-primary text-lg leading-relaxed">
                  {m.copy}
                </p>
              </Card>
            ))}
          </div>

          <p className="text-center text-text-primary text-xl italic mt-12 max-w-[1400px] mx-auto leading-relaxed">
            OpEx6 is being built to expose hidden cost leakage before it becomes
            accepted normality.
          </p>
        </div>
      </Section>

      {/* The visibility gap manufacturing leaders actually face */}
      <Section className="bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              The visibility gap manufacturing leaders actually face
            </h2>
          </div>

          <div className="rounded-xl border border-border overflow-hidden bg-card-bg">
            <div className="grid md:grid-cols-2 gap-0 bg-background/35">
              <div className="p-6 border-b md:border-b-0 md:border-r border-border">
                <h3 className="text-text-primary font-semibold">
                  The visibility challenge.
                </h3>
              </div>
              <div className="p-6 border-b md:border-b-0">
                <h3 className="text-text-primary font-semibold">
                  What the Exec App is designed to support.
                </h3>
              </div>
            </div>

            {VISIBILITY_GAP_ROWS.map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-0 border-t border-border/60"
              >
                <div className="p-6 border-r border-border/60">
                  <p className="text-text-primary text-lg leading-relaxed">
                    {row.challenge}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-text-primary text-lg leading-relaxed">
                    {row.support}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why generic BI still leaves manufacturing leaders with visibility gaps */}
      <Section>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14 max-w-[1400px] mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Why generic BI still leaves manufacturing leaders with visibility
              gaps.
            </h2>
            <p className="text-text-primary text-xl mt-5 leading-relaxed">
              Most manufacturing businesses already have ERP, MES, or some form
              of reporting. But having data is not the same as having
              visibility. Generic BI tools can build charts from that data but
              they cannot tell you what the data means for the business, where
              the losses are concentrated, or what leadership should do next.
              OpEx6 is not another BI tool. It is a structured manufacturing
              operating model with predefined KPI categories,
              leadership-relevant views, and a commercial and operational
              linkage that generic tools do not provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {GENERIC_BI.map((c) => (
              <Card key={c.title}>
                <h3 className="font-semibold text-xl text-text-primary mb-2">
                  {c.title}:
                </h3>
                <p className="text-text-primary text-lg leading-relaxed">
                  {c.copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Built for manufacturing. Designed for decision-making. */}
      <Section className="bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Built for manufacturing. Designed for decision-making.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {DECISION_MAKING.map((c) => (
              <Card key={c.title}>
                <h3 className="font-semibold text-xl text-text-primary mb-2">
                  {c.title}:
                </h3>
                <p className="text-text-primary text-lg leading-relaxed">
                  {c.copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Structured for deployment in weeks, not months */}
      <Section>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Structured for deployment in weeks, not months.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {DEPLOYMENT_STEPS.map((s, idx) => (
              <Card key={s.title} className="relative">
                <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-bold mb-4">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-xl text-text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-text-primary text-lg leading-relaxed">
                  {s.copy}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="text-text-primary hover:text-accent underline underline-offset-4"
            >
              See the full How It Works
            </Link>
          </div>
        </div>
      </Section>

      {/* What typically triggers the search for operational intelligence */}
      <Section className="bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              What typically triggers the search for operational intelligence.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAQ_QUESTIONS.map((q) => (
              <Card key={q.quote} className="border-border bg-card-bg">
                <p className="text-text-primary text-lg leading-relaxed italic mb-4">
                  “{q.quote}”
                </p>
                <Link
                  to={q.to}
                  className="text-accent font-semibold hover:underline"
                >
                  Explore the FAQ
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Built to work alongside the tools you already use */}
      <Section>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Built to work alongside the tools you already use.
            </h2>
          </div>

          <div className="rounded-xl bg-card-bg/40 p-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {INTEGRATION_CAROUSEL_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex-none w-[160px] sm:w-[190px] rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-2"
                >
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-10 w-auto object-contain grayscale mix-blend-multiply opacity-85 hover:opacity-100 transition"
                    />
                  ) : (
                    <div className="h-10 flex items-center justify-center">
                      <span className="text-text-primary text-sm font-semibold text-center">
                        {item.label}
                      </span>
                    </div>
                  )}
                  <span className="text-text-primary text-sm font-semibold text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-text-primary text-lg text-center mt-6">
            Integration availability and scope depends on implementation.
            Contact us to discuss your systems environment.
          </p>
        </div>
      </Section>
    </>
  );
}
