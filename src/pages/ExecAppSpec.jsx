import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { HeroDashboardMockup } from "../components/HeroDashboardMockup";
import { EARLY_ACCESS } from "../config/siteCopy.js";

const SUPPORT_CARDS = [
  {
    title: "Production Intelligence",
    body: "Designed to support visibility of throughput, OEE, shift performance, and production vs plan. Structured to help leadership understand line-level and site-level output performance.",
  },
  {
    title: "Quality Control",
    body: "Built to help surface first-pass yield, defect rates, rework, and scrap data. Intended to support early identification of quality trends before they escalate.",
  },
  {
    title: "Downtime & Reliability",
    body: "Designed to support MTBF, MTTR, planned vs unplanned downtime, and equipment availability tracking. Structured to help identify recurring failure patterns.",
  },
  {
    title: "Margin Intelligence",
    body: "Intended to help leadership connect operational decisions to cost per unit, waste, labour efficiency, and margin performance, where underlying data is available.",
  },
  {
    title: "Safety & Risk",
    body: "Built to support structured safety performance visibility, including incident tracking, near-miss data, and compliance status. Designed to support a move from reactive to structured safety reporting.",
  },
  {
    title: "Delivery & Service",
    body: "Designed to support on-time-in-full, order fill rates, and service level performance visibility across the business.",
  },
];

const ROLE_ROWS = [
  {
    role: "CEO / Managing Director",
    body: "A structured operational snapshot — performance, risk, and margin in a consistent format for board-level review.",
  },
  {
    role: "COO / Operations Director",
    body: "Structured operational visibility across plants, lines, and shifts in a single dashboard framework.",
  },
  {
    role: "Plant Manager",
    body: "Structured floor-level KPI dashboards covering throughput, quality, downtime, and safety.",
  },
  {
    role: "Head of Continuous Improvement",
    body: "Trend data, pattern visibility, and CI programme tracking across the operation.",
  },
  {
    role: "Manufacturing Director",
    body: "Multi-site production performance structured for comparison and review.",
  },
  {
    role: "Finance Director",
    body: "Margin, cost, and waste dashboards designed to connect to operational drivers.",
  },
  {
    role: "Head of Safety",
    body: "Structured safety and risk dashboards with compliance tracking support.",
  },
];

const ENTERPRISE_BULLETS = [
  "Structured KPI dashboards — designed for consistent, accessible operational visibility.",
  "Role-based access — configure what each user level sees.",
  "Multi-site support — structured for comparison across plants and locations.",
  "ERP & MES integration support — SAP, Oracle, Infor, Epicor, and more (scope depends on implementation).",
  "Export and reporting tools — designed to support structured operational and board reporting.",
  "Accessible on desktop, tablet, and mobile.",
  "Cloud-hosted platform.",
  "Implementation support — structured onboarding guidance for early access customers.",
];

const FINANCIAL_BULLETS = [
  "Connect downtime to lost output and contribution risk.",
  "Connect rework and scrap to margin erosion.",
  "Connect WIP and delay to cash pressure.",
  "Connect shop-floor reality to leadership reporting.",
  "Connect operations to more disciplined executive decisions.",
];

const USE_CASES = [
  {
    title: "Multi-site OEE and downtime review",
    body: "A manufacturing director uses the Exec App to compare OEE, availability, and top downtime causes across three plants. Patterns that were previously buried in local reports become visible in one structured view, guiding where to focus reliability effort.",
  },
  {
    title: "Connecting losses to margin",
    body: "A finance director and COO review how scrap, rework, and minor stoppages on a flagship line are impacting cost per unit. The Exec App helps connect operational losses to margin erosion, supporting an aligned improvement plan.",
  },
  {
    title: "Board-ready operational pack",
    body: "A CEO prepares for a board meeting using Exec App dashboards instead of manually assembled spreadsheets. Performance, risk, and margin signals are presented in a consistent format, with the same numbers the plants and functional teams see.",
  },
];

function DeviceMock({ variant }) {
  const isPhone = variant === "phone";
  const outerClass = isPhone
    ? "w-[190px] h-[360px] rounded-[32px] px-3 py-5"
    : "w-[320px] h-[210px] rounded-[26px] px-7 py-5";

  const innerClass = isPhone ? "rounded-[18px]" : "rounded-[18px]";

  const imageSrc = isPhone ? "/images/mobile.png" : "/images/tab.png";

  return (
    <div
      className={`border border-border bg-background/20 ${outerClass} shadow-sm`}
      aria-hidden="true"
    >
      <div
        className={`h-full w-full border border-border/70 bg-card-bg/60 ${innerClass} relative overflow-hidden`}
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-contain p-2"
        />

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(91,95,239,0.25),transparent_55%)]" />
      </div>
    </div>
  );
}

export function ExecApp() {
  return (
    <>
      <Helmet>
        <title>Exec App — OpEx6 | One Dashboard Framework. Every KPI That Matters.</title>
        <meta
          name="description"
          content="The Exec App is the operational intelligence platform built for manufacturing and industrial executives — a single, structured view of every metric that matters."
        />
      </Helmet>

      {/* HERO */}
      <motion.section
        className="py-28 border-b border-border bg-background"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              THE EXEC APP BY OPEX6
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              One Dashboard Framework. Every KPI That Matters.
            </h1>

            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              The Exec App is the operational intelligence platform being built for
              manufacturing and industrial executives. It is designed to give
              leadership teams a single, structured view of every metric that matters
              — from OEE and throughput to safety performance and margin data — in a
              format structured for executive decision-making.
            </p>

            <p className="text-sm text-text-secondary mb-8 leading-relaxed">
              OpEx6 is currently in pre-launch / early-access phase. Product features,
              screenshots, integrations, availability, and pricing may change before
              general release.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button to="/register-interest">Register Interest</Button>
              <Button to="/kpis-dashboards" variant="secondary">
                Explore KPIs &amp; Dashboards
              </Button>
            </div>

            <div className="mt-6 rounded-lg bg-highlight/10 text-highlight px-4 py-3 max-w-[1400px] text-sm">
              {EARLY_ACCESS.HERO_CTA_LINE}
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <HeroDashboardMockup
              previewLabel="Exec App — Illustrative Preview"
              previewDisclaimer="Final product, data, and design may differ."
            />
          </div>
        </div>
      </motion.section>

      {/* WHAT THE EXEC APP IS BUILT TO SUPPORT */}
      <Section>
        <motion.div
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-10">
            What the Exec App is built to support.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {SUPPORT_CARDS.map((c) => (
              <Card
                key={c.title}
                className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-lg text-text-primary mb-3">
                  {c.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {c.body}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* PEOPLE ACCOUNTABLE FOR OPERATIONAL PERFORMANCE */}
      <Section className="bg-background">
        <motion.div
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            The Exec App is designed for the people accountable for operational performance.
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-border rounded-2xl overflow-hidden">
              <thead className="bg-background/60">
                <tr>
                  <th className="text-left text-xs uppercase tracking-[0.18em] text-text-secondary px-6 py-4 border-b border-border">
                    Role
                  </th>
                  <th className="text-left text-xs uppercase tracking-[0.18em] text-text-secondary px-6 py-4 border-b border-border">
                    What the Exec App is designed to support
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROLE_ROWS.map((r) => (
                  <tr key={r.role} className="border-t border-border">
                    <td className="px-6 py-5 align-top text-text-primary font-medium">
                      {r.role}
                    </td>
                    <td className="px-6 py-5 text-text-secondary leading-relaxed">
                      {r.body}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Section>

      {/* ENTERPRISE EXPECTATIONS */}
      <Section>
        <motion.div
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Designed to enterprise expectations. Built for practical deployment.
          </h2>

          <Card className="bg-background/60 border border-border rounded-2xl p-7">
            <ul className="space-y-4">
              {ENTERPRISE_BULLETS.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-text-secondary leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </Section>

      {/* OPERATIONAL TO FINANCIAL */}
      <Section className="bg-background">
        <motion.div
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Operational problems become financial problems faster than most reports show.
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-[1400px]">
            A 30-minute stoppage is not just a production event. A weak BOM
            assumption is not just a finance issue. Rework, delay, consumables, and
            schedule drift do not stay inside operations — they compound into margin
            erosion, cash pressure, and slower decision-making.
          </p>

          <ul className="space-y-4">
            {FINANCIAL_BULLETS.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-text-secondary leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Section>

      {/* USE CASES */}
      <Section>
        <motion.div
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-10">
            Illustrative executive use cases.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map((u) => (
              <Card
                key={u.title}
                className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-lg text-text-primary mb-3">
                  {u.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {u.body}
                </p>
              </Card>
            ))}
          </div>

          <p className="text-xs text-text-secondary max-w-[1400px] mt-8">
            Any AI-enabled insights described are intended to support human
            decision-making and are not a substitute for human review, operational
            judgment, or formal compliance processes.
          </p>
        </motion.div>
      </Section>

      {/* MOBILE */}
      <Section className="bg-background">
        <motion.div
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Built for leadership on the move.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                The Exec App is being designed for use on desktop and mobile, so
                leaders can review performance, downtime, and risk whether they are
                on-site, travelling, or working remotely.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Coming soon on iPhone and Android. Planned for the App Store and
                Google Play, subject to final launch approvals.
              </p>
            </div>

            <div className="flex justify-center items-center gap-10 py-6 md:py-0">
              <DeviceMock variant="phone" />
              <DeviceMock variant="tablet" />
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}

