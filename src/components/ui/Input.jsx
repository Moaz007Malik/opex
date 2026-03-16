export function Input({ label, error, className = '', ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-black mb-1">
          {label}
        </label>
      )}

      <input
        className="
          w-full
          bg-white
          border border-black/10
          rounded-lg
          px-4 py-3
          text-black
          placeholder-black/40
          focus:outline-none
          focus:ring-2
          focus:ring-accent/30
          focus:border-accent
          transition
        "
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}