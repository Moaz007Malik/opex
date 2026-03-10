export function Input({ label, error, className = '', ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-1">
          {label}
        </label>
      )}
      <input
        className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-text-primary placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
        {...props}
      />
      {error && <p className="mt-1 text-sm text-danger">{error}</p>}
    </div>
  );
}
