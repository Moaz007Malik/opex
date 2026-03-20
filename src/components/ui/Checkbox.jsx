export function Checkbox({
  id,
  label,
  checked,
  onChange,
  required,
  className = '',
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required={required}
        className="peer sr-only"
      />

      {/* Custom visual checkbox to ensure selected state matches design system */}
      <span
        aria-hidden="true"
        className="
          mt-1 h-4 w-4 rounded
          border border-border bg-background
          flex items-center justify-center
          transition-colors
          peer-checked:bg-accent peer-checked:border-accent
          peer-focus:ring-2 peer-focus:ring-accent/30 peer-focus:outline-none
        "
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          className="hidden h-3 w-3 text-white peer-checked:block"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 10.5l3.2 3.2L16 5.9" />
        </svg>
      </span>

      <label
        htmlFor={id}
        className="text-sm text-text-secondary cursor-pointer select-none peer-checked:text-text-primary"
      >
        {label}
      </label>
    </div>
  );
}