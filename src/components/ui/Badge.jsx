export function Badge({ children, variant = 'accent', className = '' }) {
  const variants = {
    accent: 'bg-accent/10 text-accent',
    amber: 'bg-highlight/10 text-highlight',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}