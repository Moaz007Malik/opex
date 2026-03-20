import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Section } from "../components/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { kpiCategories } from "../data/kpis";

const TOTAL_KPI_COUNT = kpiCategories.reduce(
  (sum, category) => sum + (category.kpis?.length || 0),
  0,
);
const TOTAL_CATEGORY_COUNT = kpiCategories.length;
const ALL_CATEGORY_PREVIEW_LIMIT = 15;

function normaliseText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[\u2019']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function kpiWhyMatters(kpi, category) {
  if (kpi?.why) return kpi.why;
  const q = category?.leadershipQuestion;
  if (!q) return "Helps leadership turn operational signals into faster, more consistent decisions.";
  return `Decision signal for: ${q}`;
}

function buildKpiLeadershipLine(kpi, category) {
  return `${kpi.definition} Why it matters: ${kpiWhyMatters(kpi, category)}`;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function KPIsDashboards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showAllInAllCategory, setShowAllInAllCategory] = useState(false);

  const pageTitle = `KPIs & Dashboards — OpEx6 | KPI Catalogue Across ${TOTAL_CATEGORY_COUNT} Areas`;

  const search = normaliseText(searchTerm);

  const allKpis = useMemo(
    () =>
      kpiCategories.flatMap((category) =>
        (category.kpis || []).map((kpi) => ({
          id: `${category.id}-${kpi.name}`,
          name: kpi.name,
          categoryId: category.id,
          categoryName: category.name,
          oneLineDescription: buildKpiLeadershipLine(kpi, category),
        })),
      ),
    [],
  );

  const filteredKpis = useMemo(() => {
    return allKpis.filter((kpi) => {
      const categoryMatches =
        activeCategory === "all" || kpi.categoryId === activeCategory;

      if (!categoryMatches) return false;

      if (!search) return true;
      const haystack = normaliseText(
        `${kpi.name} ${kpi.oneLineDescription} ${kpi.categoryName}`,
      );
      return haystack.includes(search);
    });
  }, [activeCategory, allKpis, search]);

  const totalVisible = filteredKpis.length;
  const isAllCategory = activeCategory === "all";
  const activeCategoryName = isAllCategory
    ? "All Categories"
    : kpiCategories.find((category) => category.id === activeCategory)?.name ||
      "Category";
  const displayedKpis =
    isAllCategory && !showAllInAllCategory
      ? filteredKpis.slice(0, ALL_CATEGORY_PREVIEW_LIMIT)
      : filteredKpis;
  const isPreviewMode =
    isAllCategory &&
    !showAllInAllCategory &&
    filteredKpis.length > ALL_CATEGORY_PREVIEW_LIMIT;

  const openKpiInNewTab = (kpi) => {
    const url = `/kpis/${kpi.categoryId}/${slugify(kpi.name)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet
        title={pageTitle}
        meta={[
          {
            name: "description",
            content: `Explore and filter ${TOTAL_KPI_COUNT}+ manufacturing KPIs across ${TOTAL_CATEGORY_COUNT} categories with live search and category navigation.`,
          },
        ]}
      />

      <section className="border-b border-border bg-background py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-base font-semibold uppercase tracking-[0.2em] mb-3">
            KPI Catalogue
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary">
            Interactive KPI Catalogue
          </h1>
          <p className="text-xl text-text-secondary mt-4">
            The Exec App is being structured around a fixed manufacturing KPI
            framework -{" "}
            <span className="font-semibold">
              {TOTAL_KPI_COUNT}+ individual metrics
            </span>{" "}
            grouped into {TOTAL_CATEGORY_COUNT} dashboard areas, pre-defined for
            plant, multi-site, and board-level reviews.
          </p>
          <p className="text-lg lg:text-xl text-text-secondary mt-4 max-w-4xl">
            Search by KPI name or keyword, then narrow by category. The count
            updates live as filters change.
          </p>
          <p className="text-lg text-text-secondary mt-4 max-w-4xl">
            OpEx6 is currently in pre-launch / early-access phase. Product
            features, screenshots, integrations, availability, and pricing may
            change before general release.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button to="/register-interest">
              Register Interest in the Exec App
            </Button>
            <Button to="/exec-app" variant="secondary">
              See the Exec App preview
            </Button>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card-bg/60 p-6">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
              <Input
                label="Search KPI name or keyword"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowAllInAllCategory(false);
                }}
                placeholder="Search e.g. OEE, MTTR, inventory, margin, quality..."
                aria-label="Search KPI name or keyword"
                className="flex-1"
              />

              <div className="flex justify-start lg:justify-end">
                <button
                  type="button"
                  onClick={() => setShowCategoryDropdown(true)}
                  className="px-5 py-3 rounded-xl text-base font-semibold border border-border bg-background text-text-primary hover:border-accent/60 transition w-full lg:w-auto"
                  aria-haspopup="dialog"
                  aria-expanded={showCategoryDropdown}
                >
                  Filter: {activeCategoryName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-semibold text-text-primary mb-2">
                {activeCategoryName}
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl">
                Each KPI includes the measure name, a one-line leadership-focused
                description, and its category.
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-base uppercase tracking-[0.18em] text-text-secondary">
                Visible KPIs
              </p>
              <p className="text-6xl lg:text-7xl font-bold text-accent leading-none mt-2">
                {totalVisible}
              </p>
              <p className="text-base text-text-secondary mt-2">
                out of {TOTAL_KPI_COUNT} total KPIs
              </p>
            </div>
          </div>

          {totalVisible > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {displayedKpis.map((kpi) => (
                <Card
                  key={kpi.id}
                  className="bg-card-bg border border-border rounded-xl p-5 cursor-pointer"
                  role="link"
                  tabIndex={0}
                  aria-label={`Open KPI details: ${kpi.name}`}
                  onClick={() => openKpiInNewTab(kpi)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openKpiInNewTab(kpi);
                    }
                  }}
                >
                  {isAllCategory && (
                    <p className="text-base font-semibold uppercase tracking-[0.16em] text-accent mb-3">
                      {kpi.categoryName}
                    </p>
                  )}
                  <h3 className="text-2xl font-semibold text-text-primary leading-snug mb-2">
                    {kpi.name}
                  </h3>
                  <p
                    className="text-text-secondary text-lg leading-relaxed"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                    }}
                  >
                    {kpi.oneLineDescription}
                  </p>
                </Card>
              ))}
            </div>
          ) : (
            <div className="mt-6 border border-border rounded-xl bg-card-bg p-6">
              <p className="text-lg text-text-secondary">
                No KPIs match your current search/filter. Try a broader keyword
                or switch back to All Categories.
              </p>
            </div>
          )}

          {isPreviewMode && (
            <div className="mt-6 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setShowAllInAllCategory(true)}
                className="px-6 py-3 rounded-full text-base font-semibold border border-accent text-accent hover:bg-accent hover:text-white transition"
              >
                Show All
              </button>
            </div>
          )}
        </div>
      </Section>

      {showCategoryDropdown && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
          <div className="bg-background border border-border rounded-2xl max-w-lg w-full mx-4 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-text-primary">
                Choose KPI Category
              </h3>
              <button
                type="button"
                onClick={() => setShowCategoryDropdown(false)}
                className="text-text-secondary hover:text-text-primary text-xl px-2"
                aria-label="Close category filter"
              >
                ×
              </button>
            </div>
            <p className="text-lg text-text-secondary mb-4">
              Filter the catalogue by leadership dashboard area.
            </p>
            <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setShowAllInAllCategory(false);
                  setShowCategoryDropdown(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold border transition ${
                  activeCategory === "all"
                    ? "bg-accent text-white border-accent"
                    : "bg-card-bg text-text-secondary border-border hover:text-text-primary hover:border-accent/60"
                }`}
              >
                All Categories
              </button>
              {kpiCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.id);
                    setShowAllInAllCategory(false);
                    setShowCategoryDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold border transition ${
                    activeCategory === category.id
                      ? "bg-accent text-white border-accent"
                      : "bg-card-bg text-text-secondary border-border hover:text-text-primary hover:border-accent/60"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA is rendered globally */}
    </>
  );
}
