/** Abstract dashboard UI mockup — KPI tiles, line graph, OEE gauge, margin tile. No claims of live product. */
export function HeroDashboardMockup() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-black/10 bg-white overflow-hidden shadow-lg">
      
      <div className="p-6 space-y-5">

        {/* KPI Tiles */}
        <div className="flex gap-3">
          <div className="flex-1 h-16 rounded-lg border border-black/10 bg-white flex items-center justify-center shadow-sm">
            <span className="text-xs text-black/60 font-mono">KPI</span>
          </div>

          <div className="flex-1 h-16 rounded-lg border border-black/10 bg-white flex items-center justify-center shadow-sm">
            <span className="text-xs text-black/60 font-mono">OEE</span>
          </div>

          <div className="flex-1 h-16 rounded-lg border border-black/10 bg-white flex items-center justify-center shadow-sm">
            <span className="text-xs text-black/60 font-mono">Margin</span>
          </div>
        </div>


        {/* Chart */}
        <div className="h-28 rounded-lg border border-black/10 bg-blue-50 flex items-end justify-around px-3 pb-3 gap-2">

          {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-500/70 rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}

        </div>


        {/* Bottom widgets */}
        <div className="flex gap-4">

          <div className="flex-1 h-14 rounded-lg border border-black/10 bg-white shadow-sm" />

          <div className="w-20 h-14 rounded-full border-2 border-black/20 border-t-blue-500 flex items-center justify-center"
            style={{ transform: "rotate(-45deg)" }}
          >
            <span
              className="text-[9px] text-black/60 font-medium"
              style={{ transform: "rotate(45deg)" }}
            >
              OEE
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}