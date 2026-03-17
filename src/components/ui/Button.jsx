import { Link } from 'react-router-dom';

export function Button({
  children,
  to,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) {

  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      // Primary: indigo fill, white text
      'bg-accent text-white hover:bg-accent/90',
    secondary:
      // Secondary: transparent with indigo border
      'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white',
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}