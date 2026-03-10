export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-card-bg border border-slate-700 rounded-xl p-6 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
