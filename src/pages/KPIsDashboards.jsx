import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";
import { RegisterInterestCTA } from "../components/RegisterInterestCTA";
import { kpiCategories } from "../data/kpis";

const TOTAL_KPI_COUNT = kpiCategories.reduce(
  (sum, category) => sum + (category.kpis?.length || 0),
  0,
);
const TOTAL_CATEGORY_COUNT = kpiCategories.length;

function normaliseText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[\u2019']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function makeKpiKey(categoryId, kpiName) {
  const base = normaliseText(kpiName)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${categoryId}:${base}`;
}

function kpiWhyMatters(kpi, category) {
  if (kpi?.why) return kpi.why;
  const q = category?.leadershipQuestion;
  if (!q) return "Helps leadership turn operational signals into faster, more consistent decisions.";
  return `Decision signal for: ${q}`;
}

function getStoredShortlist() {
  try {
    if (typeof window === "undefined" || !window.localStorage) return [];
    const raw = localStorage.getItem("opex6_kpi_shortlist");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setStoredShortlist(keys) {
  try {
    if (typeof window === "undefined" || !window.localStorage) return;
    localStorage.setItem("opex6_kpi_shortlist", JSON.stringify(keys));
  } catch {
    // Ignore storage errors (e.g. private mode).
  }
}

export function KPIsDashboards() {
  const [kpiSearch, setKpiSearch] = useState("");
  const [kpiCategoryFilter, setKpiCategoryFilter] = useState("all");
  const [shortlistedKpis, setShortlistedKpis] = useState(() =>
    getStoredShortlist(),
  );

  const pageTitle = `KPIs & Dashboards — OpEx6 | KPI Catalogue Across ${TOTAL_CATEGORY_COUNT} Areas`;

  const search = normaliseText(kpiSearch);

  const catalogue = useMemo(() => {
    const categories = kpiCategories.map((category) => {
      const kpis = (category.kpis || [])
        .map((kpi) => ({
          key: makeKpiKey(category.id, kpi.name),
          name: kpi.name,
          definition: kpi.definition,
          whyMatters: kpiWhyMatters(kpi, category),
        }))
        .filter((kpi) => {
          if (!search) return true;
          const haystack = normaliseText(
            `${kpi.name} ${kpi.definition} ${kpi.whyMatters} ${category.name}`,
          );
          return haystack.includes(search);
        });

      return {
        id: category.id,
        name: category.name,
        leadershipQuestion: category.leadershipQuestion,
        description: category.description,
        leadershipExplanation: category.leadershipExplanation,
        totalCount: category.kpis?.length || 0,
        visibleCount: kpis.length,
        kpis,
      };
    });

    const filteredCategories =
      kpiCategoryFilter === "all"
        ? categories
        : categories.filter((c) => c.id === kpiCategoryFilter);

    const visibleCategories = filteredCategories.filter(
      (c) => c.visibleCount > 0,
    );
    const visibleKpiCount = visibleCategories.reduce(
      (sum, c) => sum + c.visibleCount,
      0,
    );

    return {
      categories: visibleCategories,
      totalKpis: TOTAL_KPI_COUNT,
      visibleKpis: visibleKpiCount,
    };
  }, [kpiCategoryFilter, search]);

  const toggleShortlist = (kpiKey) => {
    setShortlistedKpis((prev) => {
      const next = prev.includes(kpiKey)
        ? prev.filter((k) => k !== kpiKey)
        : [...prev, kpiKey];
      setStoredShortlist(next);
      return next;
    });
  };

  return (
    <>
      <Helmet
        title={pageTitle}
        meta={[
          {
            name: "description",
            content: `Explore the ${TOTAL_KPI_COUNT}+ manufacturing KPIs across ${TOTAL_CATEGORY_COUNT} dashboard areas that the Exec App is being built around — from Production and Quality to Maintenance, Safety, Margin, and more.`,
          },
        ]}
      />

      {/* HERO */}
      <motion.section
        className="py-20 lg:py-24 border-b border-border bg-background"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
          <p className="text-accent text-base font-semibold uppercase tracking-wider mb-3">
            KPIs & Dashboards
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {TOTAL_KPI_COUNT}+ manufacturing KPIs across {TOTAL_CATEGORY_COUNT} dashboard areas.
          </h1>

          <p className="text-lg text-text-secondary mb-2">
            The Exec App is being structured around a fixed manufacturing KPI
            framework —{" "}
            <span className="font-semibold">
              {TOTAL_KPI_COUNT}+ individual metrics
            </span>{" "}
            grouped into {TOTAL_CATEGORY_COUNT} dashboard areas, pre-defined for plant, multi-site,
            and board-level reviews.
          </p>
          <p className="text-base text-text-secondary mb-6 max-w-3xl mx-auto">
            Use the catalogue below to search every KPI, understand what it measures, and see why it matters for leadership reviews.
          </p>

          <p className="text-base text-text-secondary mb-6">
            OpEx6 is currently in pre-launch / early-access phase. Product
            features, screenshots, integrations, availability, and pricing may
            change before general release.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/register-interest">
              Register Interest in the Exec App
            </Button>
            <Button to="/exec-app" variant="secondary">
              See the Exec App preview
            </Button>
          </div>
          </div>

          {/* Above-the-fold catalogue controls */}
          <div className="mt-10 rounded-2xl border border-border bg-card-bg/40 p-5 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
                <Input
                  label="Search the catalogue"
                  value={kpiSearch}
                  onChange={(e) => setKpiSearch(e.target.value)}
                  placeholder="e.g. OEE, OTIF, MTBF, scrap rate…"
                  aria-label="Search the KPI catalogue"
                  className="sm:min-w-[340px]"
                />

                <div>
                  <label className="block text-sm font-medium tracking-[0.1em] uppercase text-text-secondary mb-1">
                    Category
                  </label>
                  <select
                    value={kpiCategoryFilter}
                    onChange={(e) => setKpiCategoryFilter(e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    aria-label="Filter KPI catalogue by category"
                  >
                    <option value="all">All categories</option>
                    {kpiCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-base text-text-secondary">
                Showing{" "}
                <span className="font-semibold text-text-primary">
                  {catalogue.visibleKpis}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-text-primary">
                  {catalogue.totalKpis}
                </span>{" "}
                KPIs.
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* KPI LIBRARY */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary mb-2">
                KPI Catalogue
              </h2>
              <p className="text-base text-text-secondary max-w-3xl">
                This is the structured KPI framework the Exec App is being built
                around. Each KPI is discoverable, grouped into leadership
                dashboard areas, and shown with a one-line explanation of what
                it measures and why it matters.
              </p>
            </div>

            <div className="hidden lg:flex items-end gap-3">
              {shortlistedKpis.length > 0 && (
                <>
                  <Badge variant="amber">
                    {shortlistedKpis.length} shortlisted
                  </Badge>
                  <Button to="/register-interest">
                    Register interest (tailored)
                  </Button>
                </>
              )}
            </div>
          </div>

          {shortlistedKpis.length > 0 && (
            <div className="flex lg:hidden items-center gap-3 mb-4">
              <Badge variant="amber">{shortlistedKpis.length} shortlisted</Badge>
              <Button to="/register-interest">Register interest (tailored)</Button>
            </div>
          )}

          <div className="space-y-8">
            {catalogue.categories.map((category) => (
              <div
                key={category.id}
                id={`cat-${category.id}`}
                className="scroll-mt-24"
              >
                <div className="mb-4">
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-2">
                        Dashboard area
                      </p>
                      <h3 className="text-2xl font-semibold text-text-primary">
                        {category.name}
                      </h3>
                      {category.leadershipQuestion && (
                        <p className="text-text-primary mt-2 text-base font-medium">
                          Leadership question:{" "}
                          <span className="text-text-secondary font-semibold">
                            {category.leadershipQuestion}
                          </span>
                        </p>
                      )}
                      <p className="text-text-secondary mt-2 text-base max-w-4xl leading-relaxed">
                        {category.leadershipExplanation || category.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Badge variant="slate">
                        {category.visibleCount}/{category.totalCount} KPIs
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {category.kpis.map((kpi) => {
                    const isShortlisted = shortlistedKpis.includes(kpi.key);
                    return (
                      <Card
                        key={kpi.key}
                        className="bg-card-bg border border-border rounded-xl p-5 flex flex-col"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="min-w-0">
                            <h4 className="text-lg font-semibold text-text-primary leading-snug break-words">
                              {kpi.name}
                            </h4>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleShortlist(kpi.key)}
                            className={`shrink-0 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider border transition ${
                              isShortlisted
                                ? "bg-accent text-white border-accent"
                                : "bg-background/50 text-text-secondary border-border hover:border-accent/60 hover:text-text-primary"
                            }`}
                            aria-pressed={isShortlisted}
                            aria-label={
                              isShortlisted
                                ? "Remove KPI from shortlist"
                                : "Add KPI to shortlist"
                            }
                          >
                            {isShortlisted ? "Shortlisted" : "Shortlist"}
                          </button>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-1">
                              What it measures
                            </p>
                            <p className="text-base text-text-secondary">
                              {kpi.definition}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-1">
                              Why it matters
                            </p>
                            <p className="text-base text-text-secondary clamp-2">
                              {kpi.whyMatters}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {catalogue.visibleKpis === 0 && (
            <div className="mt-6 border border-border rounded-xl bg-card-bg p-6">
              <p className="text-base text-text-secondary">
                No KPIs match your search. Try a broader term (e.g. “yield”,
                “downtime”, “inventory”), or clear the category filter.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* CTA */}
      <RegisterInterestCTA />
    </>
  );
}
