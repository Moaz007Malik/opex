export function Section({ children, className = '' }) {
  return (
    <section className={`py-24 max-w-7xl mx-auto px-6 ${className}`}>
      {children}
    </section>
  );
}
