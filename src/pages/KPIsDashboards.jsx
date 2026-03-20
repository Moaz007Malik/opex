import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Checkbox } from "../components/ui/Checkbox";
import { Input } from "../components/ui/Input";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { FORMSPREE_ENDPOINT } from "../config/formspree";
import { kpiCategories } from "../data/kpis";

const CONFIRMATION_EMAIL_SUBJECT =
  "Your OpEx6 KPI selections and early access confirmation";

const STEPS = [
  {
    step: 1,
    label: "Select your KPI categories",
  },
  {
    step: 2,
    label: "Tell us your business problems",
  },
  {
    step: 3,
    label: "See your recommended dashboards and register",
  },
];

const KPI_CATEGORY_CARDS = [
  {
    id: "production",
    label: "Production",
    subLabel: "OEE, throughput, schedule attainment, line performance",
    icon: "factory",
  },
  {
    id: "quality",
    label: "Quality",
    subLabel: "First pass yield, scrap, rework, defect rates",
    icon: "quality",
  },
  {
    id: "downtime-reliability",
    label: "Downtime & Reliability",
    subLabel: "MTBF, MTTR, planned vs unplanned downtime",
    icon: "reliability",
  },
  {
    id: "margin-intelligence",
    label: "Margin Intelligence",
    subLabel: "Cost per unit, job margin variance, waste cost",
    icon: "margin",
  },
  {
    id: "safety-risk",
    label: "Safety & Risk",
    subLabel: "TRIR, LTIFR, near miss rate, compliance",
    icon: "safety",
  },
  {
    id: "delivery-service",
    label: "Delivery & Service",
    subLabel: "OTIF, order fill rate, schedule adherence",
    icon: "delivery",
  },
  {
    id: "inventory-materials",
    label: "Inventory & Materials",
    subLabel: "Inventory turns, stock accuracy, WIP valuation",
    icon: "inventory",
  },
  {
    id: "continuous-improvement",
    label: "Continuous Improvement",
    subLabel: "Action closure, CI ROI, repeat issue rate",
    icon: "improvement",
  },
  {
    id: "energy-utilities",
    label: "Energy & Utilities",
    subLabel: "Energy cost per unit, carbon intensity",
    icon: "energy",
  },
  {
    id: "workforce-labour",
    label: "Workforce & Labour",
    subLabel: "Labour efficiency, absence rate, overtime",
    icon: "workforce",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    subLabel: "PM compliance, maintenance cost per asset",
    icon: "maintenance",
  },
  {
    id: "sustainability-esg",
    label: "Sustainability & ESG",
    subLabel: "Carbon emissions, waste recycling, ESG score",
    icon: "sustainability",
  },
  {
    id: "compliance-audit",
    label: "Compliance & Audit",
    subLabel: "Audit pass rate, corrective action closure",
    icon: "compliance",
  },
  {
    id: "customer-commercial",
    label: "Customer & Commercial",
    subLabel: "NPS, complaint rate, customer profitability",
    icon: "customer",
  },
  {
    id: "financial-performance",
    label: "Financial Performance",
    subLabel: "Revenue vs target, gross margin, EBITDA",
    icon: "financial",
  },
];

const BUSINESS_PROBLEM_CARDS = [
  {
    id: 1,
    text: "We cannot accurately track the true cost of downtime across our operation.",
  },
  {
    id: 2,
    text: "Our product margins are eroding but we cannot identify exactly where the losses are coming from.",
  },
  {
    id: 3,
    text: "We have no consistent view of OEE or equipment effectiveness across sites or lines.",
  },
  {
    id: 4,
    text: "Quality problems are reaching customers before leadership sees them in reporting.",
  },
  {
    id: 5,
    text: "We are spending too much time preparing management reports and not enough time acting on them.",
  },
  {
    id: 6,
    text: "Each site or plant reports performance differently and comparisons are unreliable.",
  },
  {
    id: 7,
    text: "We cannot connect operational performance data to financial outcomes in one view.",
  },
  {
    id: 8,
    text: "Leadership conversations are spent debating numbers rather than deciding what to do.",
  },
  {
    id: 9,
    text: "We have no structured view of schedule adherence or delivery risk.",
  },
  {
    id: 10,
    text: "Supply chain issues are creating disruption before we can see them coming.",
  },
  {
    id: 11,
    text: "Safety incidents are being logged but patterns are not being surfaced to leadership in time.",
  },
  {
    id: 12,
    text: "We are making CAPEX and investment decisions without a clear operational data foundation.",
  },
  {
    id: 13,
    text: "WIP is high but we cannot clearly see where cash is tied up in the production flow.",
  },
  {
    id: 14,
    text: "Our CI programme is active but we cannot measure its actual financial impact.",
  },
  {
    id: 15,
    text: "Energy and utilities costs are rising but we have no structured visibility into consumption by area.",
  },
  {
    id: 16,
    text: "Labour efficiency and overtime are difficult to track consistently across shifts and sites.",
  },
  {
    id: 17,
    text: "Maintenance is reactive rather than proactive and we cannot quantify the cost of that.",
  },
  {
    id: 18,
    text: "ESG and sustainability reporting is time-consuming and disconnected from operational data.",
  },
  {
    id: 19,
    text: "Compliance and audit performance is tracked locally but not consolidated for leadership.",
  },
  {
    id: 20,
    text: "Customer complaints and return rates are visible in the field before leadership sees them.",
  },
  {
    id: 21,
    text: "Our financial reporting does not reflect what is happening operationally in time to take action.",
  },
  {
    id: 22,
    text: "We cannot see which products or product lines are performing commercially and which are not.",
  },
];

const DASHBOARD_DEFS = [
  {
    key: "productionThroughput",
    name: "Production & Throughput Dashboard",
    description:
      "Structured visibility of OEE, throughput, schedule attainment, and shift performance — designed to surface where output is being gained or lost before the month-end pack.",
  },
  {
    key: "qualityFirstPass",
    name: "Quality & First Pass Yield Dashboard",
    description:
      "First pass yield, scrap rate, rework, and defect trends — structured to help leadership identify quality patterns before they escalate into customer or commercial problems.",
  },
  {
    key: "downtimeReliability",
    name: "Downtime & Reliability Dashboard",
    description:
      "MTBF, MTTR, planned vs unplanned downtime, and downtime by cause — designed to translate reliability data into cost and output impact for leadership.",
  },
  {
    key: "marginIntelligence",
    name: "Margin Intelligence Dashboard",
    description:
      "Cost per unit, job margin variance, scrap cost, and overhead recovery — structured to connect operational performance to commercial and margin outcomes.",
  },
  {
    key: "safetyRisk",
    name: "Safety & Risk Dashboard",
    description:
      "TRIR, LTIFR, near miss trends, and corrective action closure — designed to move safety reporting from reactive incident logging to structured leadership visibility.",
  },
  {
    key: "deliveryService",
    name: "Delivery & Service Dashboard",
    description:
      "OTIF, on-time delivery, schedule adherence, and backlog trends — structured to connect operational execution to service level and customer delivery performance.",
  },
  {
    key: "inventoryMaterials",
    name: "Inventory & Materials Dashboard",
    description:
      "Inventory turns, WIP valuation, stock accuracy, and material shortage visibility — designed to surface where cash is tied up in the operational flow.",
  },
  {
    key: "continuousImprovement",
    name: "Continuous Improvement Dashboard",
    description:
      "Action closure rate, CI project ROI, repeat issue recurrence, and improvement savings — structured to help leadership measure whether CI investment is producing real results.",
  },
  {
    key: "energyUtilities",
    name: "Energy & Utilities Dashboard",
    description:
      "Energy cost per unit, carbon intensity, utility consumption by area, and energy waste rate — designed to give leadership structured visibility into one of the most controllable but least tracked cost lines.",
  },
  {
    key: "workforceLabour",
    name: "Workforce & Labour Dashboard",
    description:
      "Labour efficiency, absence rate, overtime, and skills coverage — structured to provide visibility into the workforce performance signals that drive cost and output simultaneously.",
  },
  {
    key: "maintenance",
    name: "Maintenance Dashboard",
    description:
      "PM compliance rate, maintenance cost per asset, work order backlog, and asset availability — designed to make reliability visible before it becomes a crisis rather than after.",
  },
  {
    key: "sustainabilityESG",
    name: "Sustainability & ESG Dashboard",
    description:
      "Carbon emissions per unit, waste recycling rate, ESG audit score, and supplier sustainability score — structured to support decision-oriented ESG visibility rather than compliance reporting alone.",
  },
  {
    key: "complianceAudit",
    name: "Compliance & Audit Dashboard",
    description:
      "Regulatory compliance score, audit pass rate, corrective action closure, and non-conformance trends — designed to give leadership a structured view of compliance performance across the operation.",
  },
  {
    key: "customerCommercial",
    name: "Customer & Commercial Dashboard",
    description:
      "Customer satisfaction score, complaint rate, returns rate, and revenue per customer — structured to connect operational performance to customer outcomes and commercial position.",
  },
  {
    key: "financialPerformance",
    name: "Financial Performance Dashboard",
    description:
      "Revenue vs target, gross margin, EBITDA margin, CAPEX vs budget, and cost variance — designed to connect operational KPIs to the financial outcomes that matter to the board.",
  },
];

const DASHBOARD_DEFS_BY_KEY = Object.fromEntries(
  DASHBOARD_DEFS.map((d) => [d.key, d]),
);

function TickIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l3.2 3.2L16 5.9" />
    </svg>
  );
}

function StepCircle({ status, stepNumber }) {
  if (status === "completed") {
    return (
      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
        <TickIcon className="w-5 h-5" />
      </div>
    );
  }

  if (status === "active") {
    return (
      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
        {stepNumber}
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full border border-border text-text-muted flex items-center justify-center font-bold bg-background/30">
      {stepNumber}
    </div>
  );
}

function Icon({ name }) {
  const common = {
    className: "w-7 h-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "factory":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M7 17V10" />
          <path d="M12 17V6" />
          <path d="M17 17v-8" />
        </svg>
      );
    case "quality":
      return (
        <svg {...common}>
          <path d="M20 7L10 3 4 7v6c0 5 6 8 6 8s6-3 6-8V7Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "reliability":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <path d="M3 12h3" />
          <path d="M18 12h3" />
        </svg>
      );
    case "margin":
      return (
        <svg {...common}>
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3 3 0 0 1 0 6H6" />
        </svg>
      );
    case "safety":
      return (
        <svg {...common}>
          <path d="M12 2l8 4v6c0 5-3 10-8 10S4 17 4 12V6l8-4Z" />
          <path d="M9 12l2 2 4-5" />
        </svg>
      );
    case "delivery":
      return (
        <svg {...common}>
          <path d="M3 17V6a2 2 0 0 1 2-2h10v13H3Z" />
          <path d="M15 8h4l2 3v6h-6V8Z" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </svg>
      );
    case "inventory":
      return (
        <svg {...common}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73L13 3a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 3.27a2 2 0 0 0 2 0l7-3.27A2 2 0 0 0 21 16Z" />
          <path d="M3.3 7l8.7 4 8.7-4" />
          <path d="M12 22V12" />
        </svg>
      );
    case "improvement":
      return (
        <svg {...common}>
          <path d="M3 12h7" />
          <path d="M10 5l-3 3 3 3" />
          <path d="M21 12h-7" />
          <path d="M14 19l3-3-3-3" />
        </svg>
      );
    case "energy":
      return (
        <svg {...common}>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8Z" />
        </svg>
      );
    case "workforce":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 17l4 4 5.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z" />
        </svg>
      );
    case "sustainability":
      return (
        <svg {...common}>
          <path d="M21 3c-8 1-14 6-15 13 0 0 6 1 10-3s5-10 5-10Z" />
          <path d="M3 21c3-2 6-3 10-3" />
        </svg>
      );
    case "compliance":
      return (
        <svg {...common}>
          <path d="M9 11l2 2 4-4" />
          <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "customer":
      return (
        <svg {...common}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M23 11l-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3Z" />
        </svg>
      );
    case "financial":
      return (
        <svg {...common}>
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3 3 0 0 1 0 6H6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

function buildNumberedList(items) {
  if (!items?.length) return "None";
  return items.map((item, idx) => `${idx + 1}. ${item}`).join("\n");
}

function getRecommendedDashboards(selectedCategoryIds, selectedProblemIds) {
  const categorySet = new Set(selectedCategoryIds);
  const problemSet = new Set(selectedProblemIds);

  const results = [];
  const add = (key) => results.push(DASHBOARD_DEFS_BY_KEY[key]);

  if (
    categorySet.has("production") ||
    [1, 3, 5, 6, 7, 8, 9].some((p) => problemSet.has(p))
  ) {
    add("productionThroughput");
  }

  if (categorySet.has("quality") || [4, 6, 7, 8, 20].some((p) => problemSet.has(p))) {
    add("qualityFirstPass");
  }

  if (
    categorySet.has("downtime-reliability") ||
    [1, 3, 5, 6, 8, 17].some((p) => problemSet.has(p))
  ) {
    add("downtimeReliability");
  }

  if (
    categorySet.has("margin-intelligence") ||
    [2, 6, 7, 8, 12, 22].some((p) => problemSet.has(p))
  ) {
    add("marginIntelligence");
  }

  if (
    categorySet.has("safety-risk") ||
    [11, 12].some((p) => problemSet.has(p))
  ) {
    add("safetyRisk");
  }

  if (
    categorySet.has("delivery-service") ||
    [9, 10, 20].some((p) => problemSet.has(p))
  ) {
    add("deliveryService");
  }

  if (
    categorySet.has("inventory-materials") ||
    [10, 13].some((p) => problemSet.has(p))
  ) {
    add("inventoryMaterials");
  }

  if (
    categorySet.has("continuous-improvement") ||
    [8, 14].some((p) => problemSet.has(p))
  ) {
    add("continuousImprovement");
  }

  if (
    categorySet.has("energy-utilities") ||
    [15].some((p) => problemSet.has(p))
  ) {
    add("energyUtilities");
  }

  if (
    categorySet.has("workforce-labour") ||
    [16].some((p) => problemSet.has(p))
  ) {
    add("workforceLabour");
  }

  if (
    categorySet.has("maintenance") ||
    [1, 3, 17].some((p) => problemSet.has(p))
  ) {
    add("maintenance");
  }

  if (
    categorySet.has("sustainability-esg") ||
    [18].some((p) => problemSet.has(p))
  ) {
    add("sustainabilityESG");
  }

  if (
    categorySet.has("compliance-audit") ||
    [19].some((p) => problemSet.has(p))
  ) {
    add("complianceAudit");
  }

  if (
    categorySet.has("customer-commercial") ||
    [20, 22].some((p) => problemSet.has(p))
  ) {
    add("customerCommercial");
  }

  if (
    categorySet.has("financial-performance") ||
    [2, 7, 12, 21, 22].some((p) => problemSet.has(p))
  ) {
    add("financialPerformance");
  }

  // Stable de-dupe by key.
  const seen = new Set();
  return results.filter((r) => {
    if (!r?.key) return false;
    if (seen.has(r.key)) return false;
    seen.add(r.key);
    return true;
  });
}

function buildConfirmationEmailBody({
  selectedCategoryNames,
  selectedProblemTexts,
  recommendedDashboards,
}) {
  return [
    "Thank you for exploring the OpEx6 KPI framework. Here is a summary of your selections and your early access confirmation.",
    "",
    "Your early access offer",
    "You have secured eligibility for our early access offer — 100 credits for £50 when the Exec App opens to early users. We will contact you with full details ahead of launch. No payment is taken at this stage. Subject to final launch terms.",
    "",
    "Your KPI categories",
    buildNumberedList(selectedCategoryNames),
    "",
    "Your business challenges",
    buildNumberedList(selectedProblemTexts),
    "",
    "Your recommended dashboards",
    buildNumberedList(
      recommendedDashboards.map(
        (d) => `${d.name} — ${d.description}`,
      ),
    ),
    "",
    "What happens next",
    "We will review your selections and contact you ahead of the Exec App launch with your early access details, pricing confirmation, and onboarding information. If you have any questions in the meantime, please contact us at sales@opex6.com.",
    "",
    "The OpEx6 team.",
  ].join("\n");
}

export function KPIsDashboards() {
  const [step, setStep] = useState(1);

  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [selectedProblemIds, setSelectedProblemIds] = useState([]);

  const [step1Error, setStep1Error] = useState("");
  const [step2Error, setStep2Error] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    businessEmail: "",
    companyName: "",
    mobileNumber: "",
    marketingOptIn: false,
    confirmContact: false,
  });

  const pageTitle = "KPIs & Dashboards — OpEx6";

  const selectedCategoryNames = useMemo(() => {
    const byId = Object.fromEntries(kpiCategories.map((c) => [c.id, c.name]));
    return selectedCategoryIds.map((id) => byId[id]).filter(Boolean);
  }, [selectedCategoryIds]);

  const selectedProblemTexts = useMemo(() => {
    const byId = Object.fromEntries(
      BUSINESS_PROBLEM_CARDS.map((p) => [p.id, p.text]),
    );
    return selectedProblemIds.map((id) => byId[id]).filter(Boolean);
  }, [selectedProblemIds]);

  const recommendedDashboards = useMemo(() => {
    return getRecommendedDashboards(selectedCategoryIds, selectedProblemIds);
  }, [selectedCategoryIds, selectedProblemIds]);

  const recommendedDashboardNames = useMemo(
    () => recommendedDashboards.map((d) => d.name),
    [recommendedDashboards],
  );

  const offerReminderText =
    "You have secured eligibility for 100 credits for £50 when the Exec App opens. Subject to final launch terms.";

  const progressPercent = ((step - 1) / 2) * 100;

  const toggleCategory = (id) => {
    setStep1Error("");
    setSelectedCategoryIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id];
    });
  };

  const toggleProblem = (id) => {
    setStep2Error("");
    setSelectedProblemIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id];
    });
  };

  const emailBody = useMemo(() => {
    return buildConfirmationEmailBody({
      selectedCategoryNames,
      selectedProblemTexts,
      recommendedDashboards,
    });
  }, [recommendedDashboards, selectedCategoryNames, selectedProblemTexts]);

  const handleStep1Next = () => {
    if (!selectedCategoryIds.length) {
      setStep1Error("Please select at least one KPI category to continue.");
      return;
    }
    setStep1Error("");
    setStep2Error("");
    setStep(2);
  };

  const handleStep2Next = () => {
    if (!selectedProblemIds.length) {
      setStep2Error(
        "Please select at least one business problem to continue.",
      );
      return;
    }
    setStep2Error("");
    setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.confirmContact) {
      setError("Please confirm consent to be contacted to continue.");
      return;
    }

    setLoading(true);
    try {
      const timestamp = new Date().toISOString();
      const payloadToSave = {
        fullName: form.fullName,
        businessEmail: form.businessEmail,
        companyName: form.companyName,
        mobileNumber: form.mobileNumber || null,
        marketingOptIn: !!form.marketingOptIn,
        timestamp,
        selectedKpiCategories: selectedCategoryNames,
        selectedBusinessProblems: selectedProblemTexts,
        recommendedDashboards: recommendedDashboardNames,
        source: "kpi-discovery-journey",
      };

      try {
        localStorage.setItem(
          "kpi-discovery-journey:lastSubmission",
          JSON.stringify(payloadToSave),
        );
      } catch (_) {
        // localStorage may be blocked; submission still proceeds.
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Common fields used by other OpEx6 forms
          name: form.fullName,
          email: form.businessEmail,
          company: form.companyName,
          mobileNumber: form.mobileNumber || "",
          marketingOptIn: !!form.marketingOptIn,

          // Tracking / email confirmation
          _subject: CONFIRMATION_EMAIL_SUBJECT,
          _replyto: form.businessEmail,
          source: "kpi-discovery-journey",
          _timestamp: timestamp,

          // Selections
          kpiCategories: selectedCategoryNames,
          businessProblems: selectedProblemTexts,
          recommendedDashboards: recommendedDashboardNames,

          // Confirmation content (for Formspree auto-replies/templates)
          confirmationEmailBody: emailBody,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (_) {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Thank you — OpEx6</title>
        </Helmet>

        <section className="border-b border-border bg-background py-24 lg:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              KPIs & Dashboards
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Thank you. Your selections have been saved.
            </h1>

            <div className="rounded-2xl border border-border bg-card-bg/50 p-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                We have sent a summary of your KPI categories, business challenges, and recommended dashboards to{" "}
                <span className="text-text-primary font-semibold">
                  {form.businessEmail}
                </span>
                . You will be contacted ahead of launch with your early access details and offer confirmation.
              </p>

              <div className="mt-6 bg-highlight/10 border border-highlight/40 rounded-xl p-5">
                <p className="font-semibold text-text-primary mb-1">
                  Early access offer
                </p>
                <p className="text-text-secondary">{offerReminderText}</p>
              </div>

              <div className="mt-8">
                <Button to="/" className="w-full justify-center">
                  Return to Homepage
                </Button>
              </div>
            </div>

            <p className="text-xs text-text-muted mt-10">
              Examples, use cases, and outcome statements are illustrative and do
              not guarantee specific business results.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet
        title={pageTitle}
        meta={[
          {
            name: "description",
            content:
              "Explore the KPI Framework Built Into the Exec App and register for early access.",
          },
        ]}
      />

      <section className="border-b border-border bg-background py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-base font-semibold uppercase tracking-[0.2em] mb-3">
            KPIS &amp; DASHBOARDS
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary">
            Explore the KPI Framework Built Into the Exec App.
          </h1>
          <p className="text-xl text-text-secondary mt-4 max-w-4xl">
            The Exec App is structured around 15 Dashboards and over 150+
            individual metrics. Select the categories that matter to your business, tell us the problems you need to solve, and we will show you which dashboards are most relevant to you — and secure your early access offer.
          </p>

          <p className="text-lg text-text-secondary mt-4 max-w-4xl">
            OpEx6 is currently in the pre-launch / early-access phase. Product
            features, screenshots, integrations, availability, and pricing may
            change before general release.
          </p>
        </div>
      </section>

      <Section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div
              className="absolute top-5 left-0 right-0 h-px bg-border"
              aria-hidden="true"
            />
            <div
              className="absolute top-5 left-0 h-px bg-accent"
              style={{ width: `${progressPercent}%` }}
              aria-hidden="true"
            />
            <div className="flex items-center justify-between gap-4 relative">
              {STEPS.map((s) => {
                const status =
                  step === s.step
                    ? "active"
                    : step > s.step
                      ? "completed"
                      : "upcoming";
                return (
                  <div key={s.step} className="flex items-start gap-3 flex-1">
                    <StepCircle
                      status={status}
                      stepNumber={s.step}
                    />
                    <div className="pt-2">
                      <p className="text-sm font-semibold text-text-primary">
                        Step {s.step}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {s.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            {step === 1 && (
              <>
                <h2 className="text-3xl font-bold text-text-primary mb-2">
                  Step 1 — Which KPI areas matter most to your business?
                </h2>
                <p className="text-lg text-text-secondary max-w-4xl">
                  Select all categories that are relevant to your operation. You can select as many as you need. Your selections will be used to recommend the most relevant dashboards for your business.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {KPI_CATEGORY_CARDS.map((cat) => {
                    const selected = selectedCategoryIds.includes(cat.id);
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggleCategory(cat.id)}
                        aria-pressed={selected}
                        className={`relative text-left p-5 rounded-xl border transition focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                          selected
                            ? "border-accent bg-accent/10"
                            : "border-border bg-card-bg/30 hover:border-accent/60"
                        }`}
                      >
                        <div
                          className={`absolute top-4 right-4 w-5 h-5 rounded border flex items-center justify-center ${
                            selected
                              ? "border-accent bg-accent text-white"
                              : "border-border bg-background/30 text-transparent"
                          }`}
                          aria-hidden="true"
                        >
                          <TickIcon className="w-3.5 h-3.5" />
                        </div>

                        <div className="flex items-start gap-3 pr-10">
                          <div
                            className={`mt-0.5 ${
                              selected ? "text-accent" : "text-text-secondary"
                            }`}
                            aria-hidden="true"
                          >
                            <Icon name={cat.icon} />
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-text-primary">
                              {cat.label}
                            </p>
                            <p className="text-sm text-text-secondary mt-1">
                              {cat.subLabel}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <p className="text-text-secondary mt-5 text-sm">
                  {selectedCategoryIds.length} categories selected
                </p>

                <div className="mt-6 flex justify-end">
                  <Button
                    type="button"
                    variant={selectedCategoryIds.length ? "primary" : "secondary"}
                    onClick={handleStep1Next}
                    className="justify-center"
                  >
                    Next: Tell us your business problems &rarr;
                  </Button>
                </div>
                {step1Error && (
                  <p className="text-danger text-sm mt-3">
                    {step1Error}
                  </p>
                )}
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-3xl font-bold text-text-primary mb-2">
                  Step 2 — What business problems are you trying to solve?
                </h2>
                <p className="text-lg text-text-secondary max-w-4xl">
                  Select all that apply to your current situation. Your selections help us identify which dashboards will deliver the most value for your specific operational challenges.
                </p>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {BUSINESS_PROBLEM_CARDS.map((p) => {
                    const selected = selectedProblemIds.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => toggleProblem(p.id)}
                        aria-pressed={selected}
                        className={`relative text-left p-5 rounded-xl border transition focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                          selected
                            ? "border-accent bg-accent/10"
                            : "border-border bg-card-bg/30 hover:border-accent/60"
                        }`}
                      >
                        <div
                          className={`absolute top-4 right-4 w-5 h-5 rounded border flex items-center justify-center ${
                            selected
                              ? "border-accent bg-accent text-white"
                              : "border-border bg-background/30 text-transparent"
                          }`}
                          aria-hidden="true"
                        >
                          <TickIcon className="w-3.5 h-3.5" />
                        </div>

                        <p className="text-text-secondary text-base">
                          {p.text}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <p className="text-text-secondary mt-5 text-sm">
                  {selectedProblemIds.length} business problems selected
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setStep(1)}
                    className="justify-center"
                  >
                    &larr; Back to KPI categories
                  </Button>

                  <Button
                    type="button"
                    variant={selectedProblemIds.length ? "primary" : "secondary"}
                    onClick={handleStep2Next}
                    className="justify-center"
                  >
                    Next: See your recommended dashboards &rarr;
                  </Button>
                </div>
                {step2Error && (
                  <p className="text-danger text-sm mt-3">
                    {step2Error}
                  </p>
                )}
              </>
            )}

            {step === 3 && (
              <>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h2 className="text-3xl font-bold text-text-primary">
                    Step 3 &mdash; Your recommended dashboards.
                  </h2>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setStep(2)}
                    className="shrink-0"
                  >
                    &larr; Back to business problems
                  </Button>
                </div>
                <p className="text-lg text-text-secondary max-w-4xl">
                  Based on your selections, here are the dashboard areas from the Exec App that are most relevant to your business. Register your interest below to save your results, receive your early access offer, and be notified when the Exec App launches.
                </p>

                <div className="mt-8">
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {recommendedDashboards.map((d) => (
                      <div
                        key={d.key}
                        className="border border-border rounded-xl bg-card-bg p-6"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-accent/40 bg-accent/10 text-accent">
                              Recommended for you
                            </span>
                            <h3 className="text-xl font-semibold text-text-primary mt-4">
                              {d.name}
                            </h3>
                            <p className="text-text-secondary mt-2">
                              {d.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6">
                  <div className="border border-border rounded-xl bg-card-bg/40 p-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-4">
                      Your selections summary
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-text-secondary font-semibold">
                          KPI categories selected
                        </p>
                        <p className="text-text-primary mt-1">
                          {selectedCategoryNames.join(", ")}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-text-secondary font-semibold">
                          Business problems selected
                        </p>
                        <div className="mt-2 space-y-1">
                          {selectedProblemTexts.map((text) => (
                            <div
                              key={text}
                              className="text-text-secondary text-sm"
                            >
                              {text}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-text-secondary font-semibold">
                          Recommended dashboards
                        </p>
                        <div className="mt-2 space-y-1">
                          {recommendedDashboardNames.map((name) => (
                            <div
                              key={name}
                              className="text-text-secondary text-sm"
                            >
                              {name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-xl bg-card-bg/40 p-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      Register your interest and save your results.
                    </h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      Submit your details below to save your KPI selections, receive your personalised dashboard recommendations by email, and secure your early access offer for when the Exec App launches.
                    </p>

                    <div className="mt-6 bg-highlight/10 border border-highlight/40 rounded-xl p-5">
                      <p className="font-semibold text-text-primary mb-1">
                        Early Access Offer
                      </p>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Early registrants will be eligible for 100 credits for
                        &pound;50 when the Exec App opens. This is a pre-launch registration — no payment is taken now. Subject to final launch terms.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                      <Input
                        label="Full Name"
                        required
                        value={form.fullName}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            fullName: e.target.value,
                          }))
                        }
                        placeholder="Your full name"
                      />

                      <Input
                        label="Business Email"
                        type="email"
                        required
                        value={form.businessEmail}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            businessEmail: e.target.value,
                          }))
                        }
                        placeholder="you@company.com"
                      />

                      <Input
                        label="Company Name"
                        required
                        value={form.companyName}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            companyName: e.target.value,
                          }))
                        }
                        placeholder="Your company"
                      />

                      <Input
                        label="Mobile Number"
                        type="tel"
                        value={form.mobileNumber}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            mobileNumber: e.target.value,
                          }))
                        }
                        placeholder="+44 7xxx xxxxxx (optional)"
                      />

                      <Checkbox
                        id="kpi-confirm-contact"
                        required
                        label="I confirm that OpEx6 may contact me about the product interest I am registering through this form."
                        checked={form.confirmContact}
                        onChange={(v) =>
                          setForm((p) => ({
                            ...p,
                            confirmContact: v,
                          }))
                        }
                      />

                      <Checkbox
                        id="kpi-marketing-optin"
                        label="Yes, I would like to receive product updates and launch communications by email."
                        checked={form.marketingOptIn}
                        onChange={(v) =>
                          setForm((p) => ({
                            ...p,
                            marketingOptIn: v,
                          }))
                        }
                      />

                      {error && <p className="text-danger text-sm">{error}</p>}

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full justify-center"
                      >
                        {loading
                          ? "Submitting..."
                          : "Submit My Interest & Save My Dashboard Selections"}
                      </Button>

                      <p className="text-xs text-text-secondary">
                        By submitting this form, you confirm you have read our{" "}
                        <Link to="/privacy" className="text-accent hover:underline">
                          Privacy Notice
                        </Link>{" "}
                        and{" "}
                        <Link to="/cookies" className="text-accent hover:underline">
                          Cookie Notice
                        </Link>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>

          <p className="text-xs text-text-muted mt-12">
            Examples, use cases, and outcome statements are illustrative and do
            not guarantee specific business results.
          </p>
        </div>
      </Section>
    </>
  );
}
