export function Input({ label, error, className = '', ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium tracking-[0.1em] uppercase text-text-primary mb-1">
          {label}
        </label>
      )}

      <input
        className="
          w-full
          bg-background
          border border-border
          rounded-lg
          px-4 py-3
          text-text-primary
          placeholder:text-text-muted/90
          focus:outline-none
          focus:ring-2
          focus:ring-accent/40
          focus:border-accent
          transition
        "
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}