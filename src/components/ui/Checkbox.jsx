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
        className="
          mt-1
          h-4 w-4
          rounded
          border border-border
          bg-background
          text-accent
          focus:ring-2
          focus:ring-accent/30
          focus:outline-none
        "
      />

      <label
        htmlFor={id}
        className="text-sm text-text-secondary cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
}