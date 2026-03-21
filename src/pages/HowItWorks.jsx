import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

const PROCESS_STEPS = [
  {
    stepNumber: 1,
    title: "Step 1 — Connect Your Systems",
    body: "The Exec App is designed to integrate with your existing ERP, MES, SCADA, and data systems. Supported integration targets include SAP, Oracle, Infor, Epicor, Microsoft Dynamics, Rockwell, Siemens MindSphere, and Ignition. Integration scope and timelines are determined during implementation scoping. No rip-and-replace is required.",
  },
  {
    stepNumber: 2,
    title: "Step 2 — Configure Your Dashboards",
    body: "Select your KPI categories and configure dashboards to reflect your operational structure — by plant, line, shift, and role. The framework is structured to be configured around your operations, not a generic template.",
  },
  {
    stepNumber: 3,
    title: "Step 3 — Set Up Your Users",
    body: "Add your leadership team, plant managers, and operational leads. Role-based access is designed so each user sees what is relevant to their level and function. Executives see the strategic view; plant teams see the operational detail.",
  },
  {
    stepNumber: 4,
    title: "Step 4 — Structured Operational Intelligence",
    body: "Your leadership team has a single, structured view of operational performance across the KPI areas configured for your business. Consistent data. Consistent definitions. One place.",
  },
];

const IMPLEMENTATION_STAGES = [
  {
    title: "Stage 1 — Discovery & scoping",
    body: "Confirm scope, systems, and priority KPI areas.",
  },
  {
    title: "Stage 2 — Data connection",
    body: "Connect core data sources and validate feeds.",
  },
  {
    title: "Stage 3 — Configuration & testing",
    body: "Apply KPI framework, configure views, and test with pilot users.",
  },
  {
    title: "Stage 4 — Rollout & review",
    body: "Extend access, refine dashboards, and embed into leadership routines.",
  },
];

function StepCard({ stepNumber, title, body }) {
  return (
    <Card className="bg-card-bg border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
          {stepNumber}
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-primary">{title}</h3>
          <p className="text-sm text-text-primary mt-3 leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    </Card>
  );
}

export function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>
          How It Works — OpEx6 | From Operational Data to Executive Clarity
        </title>
        <meta
          name="description"
          content="The Exec App is designed to reduce the time and effort to get a structured view of operational performance. Connect, configure, and give your leadership a structured intelligence view."
        />
      </Helmet>

      {/* HERO */}
      <motion.section
        className="py-32 bg-background border-b border-border"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            From Operational Data to Executive Clarity.
          </h1>
          <p className="text-lg text-text-primary leading-relaxed">
            The Exec App is designed to reduce the time and effort it takes to
            get a structured, consistent view of operational performance. The
            framework is structured for practical deployment — connecting to
            your existing systems, configuring to your operational context, and
            giving your leadership team a structured intelligence view.
          </p>
          <p className="text-sm text-text-primary mt-6">
            OpEx6 is currently in pre-launch / early-access phase. Product
            features, screenshots, integrations, availability, and pricing may
            change before general release.
          </p>
        </div>
      </motion.section>

      {/* FOUR-STEP PROCESS */}
      <Section className="bg-background">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-10">
            Four-step process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((s) => (
              <StepCard
                key={s.stepNumber}
                stepNumber={s.stepNumber}
                title={s.title}
                body={s.body}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* IMPLEMENTATION TIMELINE */}
      <Section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            A simple implementation progression.
          </h2>

          <p className="text-text-primary text-sm mb-10 max-w-[1400px]">
            Exact timelines depend on data complexity and integration scope, but
            the progression typically follows these stages.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {IMPLEMENTATION_STAGES.map((stage, index) => (
              <Card
                key={stage.title}
                className="bg-card-bg border border-border rounded-xl shadow-sm p-6"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold mb-4">
                  {index + 1}
                </div>
                <p className="font-medium text-text-primary text-sm mb-2">
                  {stage.title}
                </p>
                <p className="text-text-primary text-sm">{stage.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* IMPLEMENTATION SUPPORT */}
      <Section>
        <div className="max-w-[1400px]">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Structured onboarding for early access customers.
          </h2>

          <p className="text-text-primary">
            Early access customers receive structured onboarding support to help
            map data sources, configure dashboards, and get their teams set up.
            Implementation timelines depend on the complexity and number of
            integrations required.
          </p>
        </div>
      </Section>

      {/* FAQ LINK */}
      <Section className="text-center">
        <p className="text-text-primary mb-2">
          Questions about setup, rollout, or integrations?
        </p>

        <p className="text-text-primary">
          <Link
            to="/faq"
            className="underline underline-offset-4 hover:text-accent"
          >
            See the FAQ &rarr;
          </Link>
        </p>
      </Section>
    </>
  );
}
