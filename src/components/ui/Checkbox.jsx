export function Checkbox({ id, label, checked, onChange, required, className = '' }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required={required}
        className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-accent focus:ring-accent focus:ring-offset-0"
      />
      <label htmlFor={id} className="text-sm text-text-secondary cursor-pointer">
        {label}
      </label>
    </div>
  );
}
