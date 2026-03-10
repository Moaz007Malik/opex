import { Link } from 'react-router-dom';

export function Button({ children, to, variant = 'primary', type = 'button', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold text-base rounded-lg px-6 py-3 transition-colors';
  const variants = {
    primary: 'bg-accent text-white hover:bg-indigo-500',
    secondary: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (to && !props.disabled) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }
  return <button type={type} className={classes} {...props}>{children}</button>;
}
