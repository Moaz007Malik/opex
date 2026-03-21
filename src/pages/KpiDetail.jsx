import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { kpiCategories } from '../data/kpis';

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function KpiDetail() {
  const { categoryId, kpiSlug } = useParams();

  const { category, kpi } = useMemo(() => {
    const foundCategory = kpiCategories.find((c) => c.id === categoryId);
    if (!foundCategory) return { category: null, kpi: null };

    const foundKpi =
      (foundCategory.kpis || []).find((k) => slugify(k.name) === kpiSlug) ||
      null;

    return { category: foundCategory, kpi: foundKpi };
  }, [categoryId, kpiSlug]);

  const pageTitle = kpi
    ? `${kpi.name} — OpEx6 | KPI Details`
    : 'KPI Not Found — OpEx6';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <section className="border-b border-border bg-background py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-6">
            <Link
              to="/kpis-dashboards"
              className="text-accent hover:underline underline-offset-4"
            >
              Back to KPI catalogue
            </Link>
          </div>

          {!category || !kpi ? (
            <div className="border border-border rounded-2xl bg-card-bg p-6">
              <p className="text-lg font-semibold text-text-primary">
                KPI not found
              </p>
              <p className="text-text-secondary mt-2">
                The KPI you’re looking for doesn’t exist (or the link is
                incorrect).
              </p>
            </div>
          ) : (
            <div className="border border-border rounded-2xl bg-card-bg p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-text-secondary font-semibold mb-2">
                {category.name}
              </p>
              <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4">
                {kpi.name}
              </h1>

              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {kpi.definition}
              </p>

              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.18em] text-text-secondary font-semibold mb-1">
                  Why it matters
                </p>
                <p className="text-text-primary text-base leading-relaxed">
                  {kpi.why ||
                    category.leadershipQuestion ||
                    'Helps leadership turn operational signals into faster, more consistent decisions.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

