/** Illustrative Exec App dashboard mockup — static UI only, not live product. */
export function HeroDashboardMockup() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-black/10 bg-white overflow-hidden shadow-lg">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 bg-gray-50">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-red-400" />
        </div>
        <p className="text-[11px] text-black/60 font-medium">
          Exec App · Illustrative dashboard
        </p>
      </div>

      <div className="p-6 space-y-5">
        {/* KPI headline row */}
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Group OEE', value: '92.4%', change: '+3.2 pts', tone: 'up' },
            { label: 'Unplanned downtime', value: '4.3%', change: '-0.8 pts', tone: 'down' },
            { label: 'Scrap cost / wk', value: '£184k', change: '-£14k', tone: 'up' },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="flex-1 min-w-[120px] rounded-xl border border-black/10 bg-white px-3 py-3 shadow-sm"
            >
              <p className="text-[11px] text-black/60 mb-1">{kpi.label}</p>
              <p className="text-lg font-semibold text-black leading-tight">{kpi.value}</p>
              <p
                className={`text-[11px] mt-0.5 ${
                  kpi.tone === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {kpi.change} vs last week
              </p>
            </div>
          ))}
        </div>

        {/* Main chart + side panel */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-4 items-stretch">
          {/* Trend chart */}
          <div className="rounded-xl border border-black/10 bg-gradient-to-b from-blue-50 to-white px-4 pt-3 pb-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[11px] text-black/60 uppercase tracking-wide">
                  Multi-site OEE trend
                </p>
                <p className="text-xs text-black/60">Last 8 weeks · Group view</p>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] text-black/60">
                  <span className="h-2 w-2 rounded-full bg-blue-500" /> Site A
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-black/60">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" /> Site B
                </span>
              </div>
            </div>
            <div className="h-28 flex items-end gap-2">
              {[40, 55, 48, 68, 60, 72, 78, 82].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                  <div
                    className="w-full rounded-t bg-blue-500/80"
                    style={{ height: `${h}%` }}
                  />
                  <div
                    className="w-full rounded-t bg-indigo-400/70"
                    style={{ height: `${Math.max(20, h - 10)}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-black/50">
              <span>W-8</span>
              <span>W-6</span>
              <span>W-4</span>
              <span>W-2</span>
              <span>Current</span>
            </div>
          </div>

          {/* Right-side KPI list */}
          <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm flex flex-col gap-3">
            <p className="text-[11px] text-black/60 uppercase tracking-wide">
              Today&apos;s focus
            </p>
            {[
              'Top 5 downtime causes by cost',
              'Lines below OEE threshold',
              'Products with negative margin trend',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-lg bg-gray-50 px-3 py-2"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <p className="text-[12px] text-black/70">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-3">
          <p className="text-[10px] text-black/50">
            Illustrative Exec App layout. Numbers and structure are indicative and may change before general release.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-black/60">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500" /> On track
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> Watch
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-red-500" /> At risk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}