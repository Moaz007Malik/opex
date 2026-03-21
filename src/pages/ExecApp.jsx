import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { EARLY_ACCESS, KPI_FRAMEWORK } from "../config/siteCopy.js";

const MOBILE_SLIDES = [
  {
    id: 0,
    src: "/images/phone1.png",
    label: "Exec App emissions dashboard",
  },
  {
    id: 1,
    src: "/images/phone2.png",
    label: "Exec App scope emissions dashboard",
  },
  {
    id: 2,
    src: "/images/phone3.png",
    label: "Exec App energy performance dashboard",
  },
];

const WHAT_IT_HELPS_LEADERS_SEE = [
  "See real-time OEE, throughput, and downtime patterns across plants and lines.",
  "Compare shift performance and bottlenecks across sites in one structured view.",
  "Track scrap, rework, and first-pass yield before they erode margin.",
  "See safety incidents, near misses, and compliance status in a single leadership view.",
  "Understand where WIP, inventory, and schedule volatility are tying up cash.",
];

const HOW_IT_SUPPORTS_DECISIONS = [
  "Bring leadership reporting out of spreadsheets and into one structured operating view.",
  "Surface the operational signals that affect cost, risk, and execution so they are not missed.",
  "Link downtime, speed loss, and quality escapes to contribution and margin impact.",
  "Support board and exec reviews with consistent, repeatable operational packs.",
  "Help CI, operations, and finance teams work from the same performance reality.",
];

const OPERATIONAL_COMMERCIAL_LINKAGE = [
  "Translate OEE, availability, and speed losses into estimated margin impact where data allows.",
  "Highlight where scrap, rework, and yield losses are quietly distorting product economics.",
  "Show how schedule adherence, changeover performance, and WIP affect working capital.",
  "Give finance and operations a shared view of where cost and performance are diverging.",
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

export function ExecApp() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMobileIndex((prev) => (prev + 1) % MOBILE_SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentMobileSlide = MOBILE_SLIDES[activeMobileIndex];

  const goToMobileSlide = (index) => {
    const total = MOBILE_SLIDES.length;
    const nextIndex = ((index % total) + total) % total;
    setActiveMobileIndex(nextIndex);
  };

  return (
    <>
      <Helmet>
        <title>
          Exec App — OpEx6 | One Dashboard Framework. Every KPI That Matters.
        </title>
        <meta
          name="description"
          content="The Exec App is the operational intelligence platform being built for manufacturing and industrial executives. Single, structured view of every metric that matters."
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
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              The Exec App by OpEx6
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              A structured KPI layer for manufacturing leadership.
            </h1>

            <p className="text-lg text-text-secondary mb-4">
              The Exec App is being built around{" "}
              {KPI_FRAMEWORK.MANUFACTURING_KPI_LINE} — giving leaders a single,
              structured view of performance, downtime, quality, safety, and
              margin.
            </p>

            <p className="text-sm text-text-secondary mb-8">
              OpEx6 is currently in pre-launch / early-access phase. Product
              features, screenshots, integrations, availability, and pricing may
              change before general release.
            </p>

            <div className="flex flex-col gap-3">
              <Button to="/register-interest">
                Register interest in the Exec App
              </Button>
              <div className="rounded-lg bg-highlight/10 text-highlight text-xs px-4 py-3 max-w-md">
                {EARLY_ACCESS.HERO_CTA_LINE}
              </div>
            </div>
          </div>

          {/* Product visual — illustrative structured KPI mockup */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-4">
            <div className="relative bg-card-bg border border-border rounded-3xl p-6 sm:p-7 lg:p-8 shadow-xl overflow-hidden transform-gpu lg:scale-[1.03] 2xl:scale-[1.06] origin-center min-h-[520px]">
              {/* Ambient highlight */}
              <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.0),rgba(15,23,42,0.35))]" />

            {/* Header bar */}
            <div className="relative flex items-center justify-between mb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">
                  Exec App · Illustrative preview
                </p>
                <h2 className="text-base font-semibold text-text-primary mt-1">
                  Group Operations Dashboard
                </h2>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-border bg-background/40 text-text-secondary">
                    {KPI_FRAMEWORK.DASHBOARD_AREAS_SHORT}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-border bg-background/40 text-text-secondary">
                    {KPI_FRAMEWORK.KPI_SHORT}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-border bg-background/40 text-text-secondary">
                    Multi-site rollups
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400">
                  Live
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-slate-700 text-slate-200">
                  FY24 Q3
                </span>
              </div>
            </div>

            {/* Category navigation */}
            <div className="relative flex flex-wrap gap-2 mb-5 text-xs">
              {[
                "Executive summary",
                "Production",
                "Quality",
                "Downtime & OEE",
                "Safety",
                "Margin",
                "Cash & WIP",
              ].map((label, i) => (
                <div
                  key={label}
                  className={`px-3 py-1 rounded-full border ${
                    i === 0
                      ? "bg-accent text-white border-accent"
                      : "border-border bg-background/40 text-text-secondary"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* KPI grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-text-secondary mb-1">
                  Group OEE
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-semibold text-text-primary">
                    87.2%
                  </span>
                  <span className="text-xs text-emerald-400">
                    ▲ 2.4 pts vs last week
                  </span>
                </div>
                <div className="h-10 rounded-lg bg-gradient-to-r from-emerald-500/60 via-emerald-400/40 to-emerald-300/30" />
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-text-secondary mb-1">
                  Scrap & rework cost
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-semibold text-text-primary">
                    £184k
                  </span>
                  <span className="text-xs text-rose-400">
                    ▲ £22k vs plan
                  </span>
                </div>
                <div className="h-10 rounded-lg bg-gradient-to-r from-rose-500/70 via-rose-400/40 to-rose-300/30" />
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-text-secondary mb-1">
                  Unplanned downtime
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-semibold text-text-primary">
                    9.3%
                  </span>
                  <span className="text-xs text-emerald-400">
                    ▼ 1.1 pts vs last month
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs text-text-secondary">
                  <span>Top 3 causes</span>
                  <span className="sm:text-right">
                    Bearing failure · Changeover · Blocked conveyor
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-text-secondary mb-1">
                  Margin at risk (est.)
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-semibold text-text-primary">
                    £612k
                  </span>
                  <span className="text-xs text-text-secondary">
                    Linked to downtime, scrap, and yield
                  </span>
                </div>
                <div className="h-10 rounded-lg border border-dashed border-border flex items-center justify-between px-3 text-xs text-text-secondary">
                  <span>Downtime ▼</span>
                  <span>Scrap ▼</span>
                  <span>Yield ▼</span>
                </div>
              </div>
            </div>

            {/* Bottom panels */}
            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-text-secondary mb-1">
                  Site comparison — OEE vs cost per unit
                </p>
                <div className="h-20 rounded-lg bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.6),_transparent_60%)] flex items-end justify-between px-3 pb-2 text-xs text-text-secondary">
                  <span>Plant A</span>
                  <span>Plant B</span>
                  <span>Plant C</span>
                  <span>Plant D</span>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-text-secondary mb-1">
                  Executive notes
                </p>
                <ul className="space-y-1 text-xs text-text-secondary">
                  <li>• Reliability gains starting to show in OEE.</li>
                  <li>• Scrap cost still elevated on Line 4.</li>
                  <li>• WIP days improving at Plant C.</li>
                </ul>
              </div>
            </div>

            <p className="relative mt-5 text-xs text-text-secondary text-center">
              Illustrative Exec App KPI layout for demonstration only. Final product, data, and design
              may differ.
            </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* KPI DEPTH EXPLANATION */}
      <Section>
        <motion.div
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            {KPI_FRAMEWORK.MANUFACTURING_KPI_LINE}.
          </h2>
          <p className="text-text-secondary mb-6">
            Instead of starting from a blank BI canvas, the Exec App is being
            structured around a fixed manufacturing KPI framework. Each KPI
            comes with a definition, calculation, and view designed for
            operational and leadership reviews.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-2">
                Production & Throughput
              </h3>
              <p className="text-text-secondary text-sm">
                OEE, schedule attainment, changeover losses, and shift-level
                throughput — structured so leadership can see where capacity is
                really being lost.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-2">
                Quality, Safety & Reliability
              </h3>
              <p className="text-text-secondary text-sm">
                First-pass yield, deviation trends, incidents, MTBF/MTTR, and
                repeat failures — helping teams surface chronic loss before a
                major breakdown or compliance issue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-2">
                Margin, Cash & Commercial
              </h3>
              <p className="text-text-secondary text-sm">
                Cost per unit, waste cost, WIP exposure, working-capital
                drivers, and customer performance — where data allows,
                connecting operational changes to financial impact.
              </p>
            </div>
          </div>
          <p className="text-sm text-text-secondary mt-6">
            You can explore the planned KPI and dashboard structure in more depth on the{" "}
            <Link to="/kpis-dashboards" className="text-accent hover:underline">
              KPIs &amp; Dashboards
            </Link>{" "}
            page.
          </p>
        </motion.div>
      </Section>

      {/* WHY IT MATTERS */}
      <Section>
        <motion.div
          className="max-w-[1400px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Why it matters for manufacturing leadership.
          </h2>

          <p className="text-text-secondary mb-10 max-w-[1400px]">
            Most leadership teams still rely on siloed reports, last week's
            spreadsheets, and disconnected local dashboards to understand how
            operations are performing. The Exec App is being built to bring that
            picture together — so decisions about cost, risk, and execution are
            made from a shared, current reality.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card-bg border border-border rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-text-primary mb-2">
                Faster visibility
              </h3>
              <p className="text-text-secondary text-sm">
                See OEE, throughput, downtime, and yield patterns across plants
                without waiting for end-of-week or month-end packs.
              </p>
            </Card>

            <Card className="bg-card-bg border border-border rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-text-primary mb-2">
                Aligned decisions
              </h3>
              <p className="text-text-secondary text-sm">
                Give operations, finance, and CI teams the same structured view
                of performance so trade-offs are made from shared data.
              </p>
            </Card>

            <Card className="bg-card-bg border border-border rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-text-primary mb-2">
                Board-ready clarity
              </h3>
              <p className="text-text-secondary text-sm">
                Move leadership reporting out of ad hoc spreadsheets and into a
                repeatable, board-ready operating view.
              </p>
            </Card>
          </div>
        </motion.div>
      </Section>

      {/* WHAT IT HELPS LEADERS SEE */}
      <Section>
        <motion.div
          className="max-w-[1400px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            What the Exec App is being built to help leaders see.
          </h2>

          <div className="space-y-4">
            {WHAT_IT_HELPS_LEADERS_SEE.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-accent" />

                <p className="text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* DECISION SUPPORT */}
      <Section>
        <motion.div
          className="max-w-[1400px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            How it supports executive decision-making.
          </h2>

          <div className="space-y-4">
            {HOW_IT_SUPPORTS_DECISIONS.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-accent" />

                <p className="text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* USE CASES */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-10">
            Illustrative executive use cases.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map((u, i) => (
              <Card
                key={i}
                className="bg-card-bg border border-border rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-lg text-text-primary mb-2">
                  {u.title}
                </h3>

                <p className="text-text-secondary text-sm">{u.body}</p>
              </Card>
            ))}
          </div>

          <p className="text-xs text-text-secondary max-w-[1400px] mt-6">
            Any AI-enabled insights described are intended to support human
            decision-making and are not a substitute for human review,
            operational judgment, or formal compliance processes.
          </p>
        </motion.div>
      </Section>

      {/* MOBILE */}
      <Section className="rounded-2xl py-12 px-6 md:px-12 max-h-[520px] md:max-h-[560px] overflow-hidden">
        <motion.div
          className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          {/* LEFT */}
          <div className="text-text-primary">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Built for leadership on the move.
            </h2>

            <p className="text-text-secondary mb-4 text-lg">
              The Exec App is being designed for use on desktop and mobile, so
              leaders can review performance, downtime, and risk whether they
              are on-site, travelling, or working remotely.
            </p>

            <p className="text-text-secondary text-sm mb-6">
              Coming soon on iPhone and Android. Planned for the App Store and
              Google Play, subject to final launch approvals.
            </p>

            <p className="text-text-secondary text-xs mb-8">
              Visuals shown are indicative only and do not represent a live,
              generally available mobile application.
            </p>

            {/* App Store / Google Play official badges intentionally omitted */}
          </div>

    {/* RIGHT - PHONE (pre-framed cutout image) */}
    <div className="flex justify-center items-center">
      <div className="relative">
        <img
          src={currentMobileSlide.src}
          alt={currentMobileSlide.label}
          style={{ maxHeight: '320px', width: 'auto' }}
          className="object-contain"
        />
      </div>
    </div>
        </motion.div>
      </Section>

      {/* CTA is rendered globally */}
    </>
  );
}
