import { slugify } from "../utils/slugify.js";

/**
 * Flatten kpiCategories into catalogue rows with stable detail URLs.
 */
export function flattenKpiCatalogue(kpiCategories) {
  return kpiCategories.flatMap((cat) =>
    (cat.kpis || []).map((kpi) => ({
      categoryId: cat.id,
      categoryName: cat.name,
      leadershipQuestion: cat.leadershipQuestion,
      kpi,
      slug: slugify(kpi.name),
    })),
  );
}

export function whyLine(item) {
  return (
    item.kpi.why ||
    item.leadershipQuestion ||
    "Helps leadership turn operational signals into faster, more consistent decisions."
  );
}

export function filterKpiCatalogue(items, { search, activeCategoryIds }) {
  const q = (search || "").trim().toLowerCase();
  let out = items;

  if (activeCategoryIds.length > 0) {
    const set = new Set(activeCategoryIds);
    out = out.filter((i) => set.has(i.categoryId));
  }

  if (q) {
    out = out.filter((i) => {
      const w = whyLine(i);
      const hay = [
        i.kpi.name,
        i.kpi.definition || "",
        w,
        i.categoryName,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }

  return out;
}
