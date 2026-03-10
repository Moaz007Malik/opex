export function Badge({ children, variant = 'accent', className = '' }) {
  const variants = {
    accent: 'bg-accent/20 text-accent',
    amber: 'bg-highlight/20 text-highlight',
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
