export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-card-bg border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-accent transition-transform ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
