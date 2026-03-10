/** Abstract dark dashboard UI mockup — KPI tiles, line graph, OEE gauge, margin tile. No claims of live product. */
export function HeroDashboardMockup() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-slate-700 bg-card-bg overflow-hidden shadow-xl">
      <div className="p-4 space-y-4">
        <div className="flex gap-3">
          <div className="flex-1 h-16 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center">
            <span className="text-xs text-slate-500 font-mono">KPI</span>
          </div>
          <div className="flex-1 h-16 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center">
            <span className="text-xs text-slate-500 font-mono">OEE</span>
          </div>
          <div className="flex-1 h-16 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center">
            <span className="text-xs text-slate-500 font-mono">Margin</span>
          </div>
        </div>
        <div className="h-24 rounded-lg bg-slate-800 border border-slate-600 flex items-end justify-around px-2 pb-2 gap-1">
          {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
            <div key={i} className="flex-1 bg-accent/40 rounded-t min-w-2" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex gap-3">
          <div className="flex-1 h-14 rounded-lg bg-slate-800 border border-slate-600" />
          <div className="w-20 h-14 rounded-full border-2 border-slate-600 border-t-accent/60 flex items-center justify-center" style={{ transform: 'rotate(-45deg)' }}>
            <span className="text-[8px] text-slate-500" style={{ transform: 'rotate(45deg)' }}>OEE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
