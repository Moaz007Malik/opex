export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white border border-black/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
