import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { kpiCategories } from "../data/kpis";
import {
  filterKpiCatalogue,
  flattenKpiCatalogue,
  whyLine,
} from "../data/kpiCatalogueFilters";

const PREVIEW_LIMIT = 9;

export function KpiCatalogue() {
  const [search, setSearch] = useState("");
  const [activeCategoryIds, setActiveCategoryIds] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setShowAll(false);
  }, [search, activeCategoryIds]);

  const allItems = useMemo(
    () => flattenKpiCatalogue(kpiCategories),
    [],
  );

  const filtered = useMemo(
    () =>
      filterKpiCatalogue(allItems, {
        search,
        activeCategoryIds,
      }),
    [allItems, search, activeCategoryIds],
  );

  const visibleItems = useMemo(() => {
    if (filtered.length <= PREVIEW_LIMIT || showAll) return filtered;
    return filtered.slice(0, PREVIEW_LIMIT);
  }, [filtered, showAll]);

  const canExpand = filtered.length > PREVIEW_LIMIT;

  const toggleCategory = (id) => {
    setActiveCategoryIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id];
    });
  };

  const clearCategories = () => setActiveCategoryIds([]);

  return (
    <div id="kpi-catalogue" className="scroll-mt-28">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-text-primary">KPI catalogue</h2>
        <p className="text-xl text-text-primary mt-2 max-w-3xl">
          Search and filter the Exec App KPI framework. Each metric links to a
          short definition and why it matters for leadership visibility.
        </p>
      </div>

      <div className="space-y-6">
        <div className="max-w-xl">
          <Input
            label="Search KPIs"
            type="search"
            name="kpi-catalogue-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="e.g. OEE, margin, OTIF…"
            autoComplete="off"
            aria-controls="kpi-catalogue-results"
          />
        </div>

        <div>
          <p className="text-sm font-medium tracking-[0.1em] uppercase text-text-primary mb-3">
            Categories
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={clearCategories}
              aria-pressed={activeCategoryIds.length === 0}
              className={`px-3 py-1.5 rounded-full text-base font-medium border transition focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                activeCategoryIds.length === 0
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-border bg-card-bg/40 text-text-primary hover:border-accent/50"
              }`}
            >
              All categories
            </button>
            {kpiCategories.map((cat) => {
              const on = activeCategoryIds.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  aria-pressed={on}
                  className={`px-3 py-1.5 rounded-full text-base font-medium border transition focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                    on
                      ? "border-accent bg-accent/15 text-accent"
                      : "border-border bg-card-bg/40 text-text-primary hover:border-accent/50"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
          <p className="text-base text-text-primary mt-2 max-w-2xl leading-relaxed">
            Toggle categories to narrow the list (multiple allowed). Use
            &quot;All categories&quot; to clear category filters and show every
            KPI again.
          </p>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div
          className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          aria-live="polite"
        >
          <p className="text-text-primary text-xl sm:text-2xl leading-snug">
            Showing{" "}
            <span className="text-text-primary font-bold tabular-nums text-4xl sm:text-5xl align-baseline">
              {visibleItems.length}
            </span>{" "}
            <span className="align-baseline">of</span>{" "}
            <span className="text-text-primary font-bold tabular-nums text-4xl sm:text-5xl align-baseline">
              {filtered.length}
            </span>{" "}
            <span className="text-text-primary font-semibold">KPIs</span>
          </p>
          {canExpand ? (
            <Button
              type="button"
              variant={showAll ? "secondary" : "primary"}
              onClick={() => setShowAll((v) => !v)}
              className="shrink-0 self-start sm:self-auto"
            >
              {showAll ? "Show less" : "Show all"}
            </Button>
          ) : null}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <div
          id="kpi-catalogue-results"
          className="mt-10 rounded-xl border border-border bg-card-bg/30 p-8 text-center"
        >
          <p className="text-text-primary font-semibold">No KPIs match</p>
          <p className="text-text-primary mt-2 text-base">
            Try clearing the search or category filters.
          </p>
        </div>
      ) : (
        <ul
          id="kpi-catalogue-results"
          className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 list-none p-0 m-0"
        >
          {visibleItems.map((item) => {
            const to = `/kpis/${item.categoryId}/${item.slug}`;
            const why = whyLine(item);
            return (
              <li key={`${item.categoryId}-${item.slug}`}>
                <Link
                  to={to}
                  className="block h-full rounded-xl border border-border bg-card-bg/40 p-5 transition hover:border-accent/60 hover:bg-card-bg/70 focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent mb-2">
                    {item.categoryName}
                  </p>
                  <h3 className="text-xl font-semibold text-text-primary leading-snug">
                    {item.kpi.name}
                  </h3>
                  <div className="mt-4 space-y-3 text-lg text-text-primary leading-relaxed">
                    <div>
                      <p className="text-sm uppercase tracking-[0.12em] text-text-primary font-semibold mb-1.5">
                        What it measures
                      </p>
                      <p>{item.kpi.definition}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.12em] text-text-primary font-semibold mb-1.5">
                        Why it matters
                      </p>
                      <p className="text-text-primary">
                        {why}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-accent font-medium">
                    View details →
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
