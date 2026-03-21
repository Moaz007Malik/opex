import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { kpiCategories } from '../data/kpis';
import { slugify } from '../utils/slugify.js';

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
              to="/kpis"
              className="text-accent hover:underline underline-offset-4"
            >
              Back to KPI catalogue
            </Link>
          </div>

          {!category || !kpi ? (
            <div className="border border-border rounded-2xl bg-card-bg p-6">
              <p className="text-xl font-semibold text-text-primary">
                KPI not found
              </p>
              <p className="text-text-primary text-lg mt-2">
                The KPI you’re looking for doesn’t exist (or the link is
                incorrect).
              </p>
            </div>
          ) : (
            <div className="border border-border rounded-2xl bg-card-bg p-6 sm:p-8">
              <p className="text-base uppercase tracking-[0.18em] text-text-primary font-semibold mb-2">
                {category.name}
              </p>
              <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4">
                {kpi.name}
              </h1>

              <p className="text-text-primary text-xl leading-relaxed mb-6">
                {kpi.definition}
              </p>

              <div className="space-y-3">
                <p className="text-base uppercase tracking-[0.18em] text-text-primary font-semibold mb-1">
                  Why it matters
                </p>
                <p className="text-text-primary text-lg leading-relaxed">
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

